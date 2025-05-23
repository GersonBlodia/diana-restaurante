"use client"
import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Package, 
  TrendingDown, 
  AlertTriangle, 
  Plus, 
  Minus,
  Edit,
  Search,
  ChefHat,
  Eye,
  DollarSign,
  X,
 
  User,
  Phone,
  Mail,
  MapPin,
  Building,
 
  ArrowUpDown,
  FileText,
  Save,
  Loader2,
 
  Info,
  
} from "lucide-react"
import { 
  getInsumos, 
  obtenerProveedores, 
  crearMovimientoInventario,
  obtenerMovimientosInventario,
  crearProveedor,
  actualizarProveedor,
  obtenerProveedorPorId,
  crearInsumo,
  obtenerInsumoPorId,
  obtenerTiposProveedor,
  obtenerTiposInsumo,
  obtenerUnidadesMedida
} from "@/actions/inventario/inventario-actions"

// Interfaces TypeScript
interface TipoProveedor {
  idTipoProveedor: number
  nombreTipo: string
  descripcion?: string
}

interface Proveedor {
  idProveedores: number
  nombreProveedor: string
  ruc?: string
  telefono?: string
  correo?: string
  direccion?: string
  personaContacto?: string
  telefonoContacto?: string
  tipoProveedor?: TipoProveedor
}

interface UnidadMedida {
  idUnidadMedida: number
  nombre: string
  abreviatura: string
}

interface TipoInsumo {
  idTipoInsumo: number
  nombreTipo: string
}

interface Insumo {
  idInsumo: number
  nombreInsumo: string
  stock: number
  stockMinimo: number
  precio: number
  descripcion?: string
  codigoInsumo?: string
  ubicacionAlmacen?: string
  unidadMedida?: UnidadMedida
  tipoInsumo?: TipoInsumo
  proveedor?: {
    nombreProveedor: string
  }
}

interface Movimiento {
  idMovimiento: number
  tipoMovimiento: string
  cantidad: number
  fechaMovimiento: string
  motivo?: string
  observaciones?: string
  insumo: {
    nombreInsumo: string
    unidadMedida: UnidadMedida
  }
  empleado: {
    persona: {
      nombre: string
      apellido: string
    }
  }
}

const InventarioPage = () => {
  // Estados principales
  const [proveedores, setProveedores] = useState<Proveedor[]>([])
  const [tiposProveedor, setTiposProveedor] = useState<TipoProveedor[]>([])
  const [insumos, setInsumos] = useState<Insumo[]>([])
  const [tiposInsumo, setTiposInsumo] = useState<TipoInsumo[]>([])
  const [unidadesMedida, setUnidadesMedida] = useState<UnidadMedida[]>([])
  const [movimientos, setMovimientos] = useState<Movimiento[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchTerm, setSearchTerm] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Estados de modales
  const [showMovementModal, setShowMovementModal] = useState(false)
  const [showCreateInsumoModal, setShowCreateInsumoModal] = useState(false)
  const [showEditInsumoModal, setShowEditInsumoModal] = useState(false)
  const [showViewInsumoModal, setShowViewInsumoModal] = useState(false)
  const [showCreateProveedorModal, setShowCreateProveedorModal] = useState(false)
  const [showEditProveedorModal, setShowEditProveedorModal] = useState(false)
  const [showViewProveedorModal, setShowViewProveedorModal] = useState(false)

  // Estados para movimientos
  const [selectedInsumo, setSelectedInsumo] = useState<Insumo | null>(null)
  const [movementType, setMovementType] = useState('Entrada')
  const [movementQuantity, setMovementQuantity] = useState('')
  const [movementReason, setMovementReason] = useState('')

  // Estados para proveedores
  const [selectedProveedor, setSelectedProveedor] = useState<Proveedor | null>(null)
  const [proveedorForm, setProveedorForm] = useState({
    idTipoProveedor: '',
    nombreProveedor: '',
    ruc: '',
    telefono: '',
    correo: '',
    direccion: '',
    personaContacto: '',
    telefonoContacto: ''
  })

  // Estados para insumos
  const [insumoForm, setInsumoForm] = useState({
    idTipoInsumo: '',
    idProveedor: '',
    idUnidadMedida: '',
    codigoInsumo: '',
    nombreInsumo: '',
    descripcion: '',
    stock: '',
    stockMinimo: '',
    precio: '',
    ubicacionAlmacen: ''
  })

  // Cargar datos iniciales
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          proveedoresData,
          insumosData,
          movimientosData,
          tiposProveedorData,
          tiposInsumoData,
          unidadesMedidaData
        ] = await Promise.all([
          obtenerProveedores(),
          getInsumos(),
          obtenerMovimientosInventario({ limite: 20 }),
          obtenerTiposProveedor(),
          obtenerTiposInsumo(),
          obtenerUnidadesMedida()
        ])

        setProveedores(proveedoresData.data || [])
        setInsumos(insumosData || [])
        setMovimientos(movimientosData.data || [])
        setTiposProveedor(tiposProveedorData.data || [])
        setTiposInsumo(tiposInsumoData.data || [])
        setUnidadesMedida(unidadesMedidaData.data || [])
      } catch (error) {
        console.error("Error al obtener los datos del inventario:", error)
      }
      setLoading(false)
    }

    fetchData()
  }, [])

  // Funciones para movimientos
  const handleMovement = async () => {
    if (!selectedInsumo || !movementQuantity || !movementReason) return
    
    setIsSubmitting(true)
    
    try {
      const resultado = await crearMovimientoInventario({
        idInsumo: selectedInsumo.idInsumo,
        idEmpleado: 1, // Reemplazar con el ID del empleado actual
        tipoMovimiento: movementType as any,
        cantidad: parseFloat(movementQuantity),
        motivo: movementReason
      })

      if (resultado.ok) {
        // Actualizar la lista de insumos
        setInsumos(insumos.map(insumo => 
          insumo.idInsumo === selectedInsumo.idInsumo 
            ? { ...insumo, stock: resultado.data.insumoActualizado.stock }
            : insumo
        ))
        
        // Recargar movimientos
        const movimientosData = await obtenerMovimientosInventario({ limite: 20 })
        setMovimientos(movimientosData.data || [])
        
        setShowMovementModal(false)
        resetMovementForm()
      } else {
        alert(resultado.message)
      }
    } catch (error) {
      console.error('Error al procesar movimiento:', error)
      alert('Error al procesar el movimiento')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetMovementForm = () => {
    setSelectedInsumo(null)
    setMovementQuantity('')
    setMovementReason('')
    setMovementType('Entrada')
  }

  // Funciones para proveedores
  const handleCreateProveedor = async () => {
    if (!proveedorForm.nombreProveedor) return
    
    setIsSubmitting(true)
    
    try {
      const resultado = await crearProveedor({
        ...proveedorForm,
        idTipoProveedor: proveedorForm.idTipoProveedor ? parseInt(proveedorForm.idTipoProveedor) : undefined
      })

      if (resultado.ok) {
        setProveedores([...proveedores, resultado.data])
        setShowCreateProveedorModal(false)
        resetProveedorForm()
      } else {
        alert(resultado.message)
      }
    } catch (error) {
      console.error('Error al crear proveedor:', error)
      alert('Error al crear el proveedor')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEditProveedor = async () => {
    if (!selectedProveedor || !proveedorForm.nombreProveedor) return
    
    setIsSubmitting(true)
    
    try {
      const resultado = await actualizarProveedor(selectedProveedor.idProveedores, {
        ...proveedorForm,
        idTipoProveedor: proveedorForm.idTipoProveedor ? parseInt(proveedorForm.idTipoProveedor) : undefined
      })

      if (resultado.ok) {
        setProveedores(proveedores.map(p => 
          p.idProveedores === selectedProveedor.idProveedores ? resultado.data : p
        ))
        setShowEditProveedorModal(false)
        resetProveedorForm()
      } else {
        alert(resultado.message)
      }
    } catch (error) {
      console.error('Error al actualizar proveedor:', error)
      alert('Error al actualizar el proveedor')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleViewProveedor = async (proveedor: Proveedor) => {
    try {
      const resultado = await obtenerProveedorPorId(proveedor.idProveedores)
      if (resultado.ok) {
        setSelectedProveedor(resultado.data)
        setShowViewProveedorModal(true)
      }
    } catch (error) {
      console.error('Error al obtener proveedor:', error)
    }
  }

  const resetProveedorForm = () => {
    setProveedorForm({
      idTipoProveedor: '',
      nombreProveedor: '',
      ruc: '',
      telefono: '',
      correo: '',
      direccion: '',
      personaContacto: '',
      telefonoContacto: ''
    })
    setSelectedProveedor(null)
  }

  // Funciones para insumos
  const handleCreateInsumo = async () => {
    if (!insumoForm.nombreInsumo || !insumoForm.stock || !insumoForm.precio) return
    
    setIsSubmitting(true)
    
    try {
      const resultado = await crearInsumo({
        idTipoInsumo: parseInt(insumoForm.idTipoInsumo),
        idProveedor: insumoForm.idProveedor ? parseInt(insumoForm.idProveedor) : undefined,
        idUnidadMedida: parseInt(insumoForm.idUnidadMedida),
        codigoInsumo: insumoForm.codigoInsumo,
        nombreInsumo: insumoForm.nombreInsumo,
        descripcion: insumoForm.descripcion,
        stock: parseFloat(insumoForm.stock),
        stockMinimo: parseFloat(insumoForm.stockMinimo) || 5,
        precio: parseFloat(insumoForm.precio),
        ubicacionAlmacen: insumoForm.ubicacionAlmacen
      })

      if (resultado.ok) {
        // Formatear el insumo creado
        const nuevoInsumo = {
          ...resultado.data,
          stock: resultado.data.stock.toNumber(),
          stockMinimo: resultado.data.stockMinimo.toNumber(),
          precio: resultado.data.precio.toNumber()
        }
        setInsumos([...insumos, nuevoInsumo])
        setShowCreateInsumoModal(false)
        resetInsumoForm()
      } else {
        alert(resultado.message)
      }
    } catch (error) {
      console.error('Error al crear insumo:', error)
      alert('Error al crear el insumo')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleViewInsumo = async (insumo: Insumo) => {
    try {
      const resultado = await obtenerInsumoPorId(insumo.idInsumo)
      if (resultado.ok) {
        setSelectedInsumo(resultado.data)
        setShowViewInsumoModal(true)
      }
    } catch (error) {
      console.error('Error al obtener insumo:', error)
    }
  }

  const resetInsumoForm = () => {
    setInsumoForm({
      idTipoInsumo: '',
      idProveedor: '',
      idUnidadMedida: '',
      codigoInsumo: '',
      nombreInsumo: '',
      descripcion: '',
      stock: '',
      stockMinimo: '',
      precio: '',
      ubicacionAlmacen: ''
    })
    setSelectedInsumo(null)
  }

  // Funciones utilitarias
  const getStockStatus = (stock: number, stockMinimo: number) => {
    if (stock <= stockMinimo * 0.5) return { status: 'critical', color: 'red', text: 'Crítico' }
    if (stock <= stockMinimo) return { status: 'low', color: 'yellow', text: 'Bajo' }
    return { status: 'good', color: 'green', text: 'Normal' }
  }

  const filteredInsumos = insumos.filter(insumo =>
    insumo.nombreInsumo.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredProveedores = proveedores.filter(proveedor =>
    proveedor.nombreProveedor.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const stockStats = {
    total: insumos.length,
    lowStock: insumos.filter(i => i.stock <= i.stockMinimo).length,
    critical: insumos.filter(i => i.stock <= i.stockMinimo * 0.5).length,
    totalValue: insumos.reduce((sum, i) => sum + (i.stock * i.precio), 0)
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString('es-PE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Cargando inventario...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <motion.div 
        className="bg-white shadow-lg border-b-4 border-orange-500"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-2xl">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Inventario Diana</h1>
                <p className="text-gray-600">Control de stock y gestión de insumos</p>
              </div>
            </div>
            <div className="flex space-x-2">
              {['dashboard', 'insumos', 'movimientos', 'proveedores'].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <motion.div 
              key="dashboard"
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Total Insumos', value: stockStats.total, icon: Package, color: 'blue' },
                  { title: 'Stock Bajo', value: stockStats.lowStock, icon: AlertTriangle, color: 'yellow' },
                  { title: 'Stock Crítico', value: stockStats.critical, icon: TrendingDown, color: 'red' },
                  { title: 'Valor Total', value: `S/ ${stockStats.totalValue.toFixed(2)}`, icon: DollarSign, color: 'green' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                        <p className={`text-3xl font-bold text-${stat.color}-600`}>
                          {typeof stat.value === 'number' ? stat.value : stat.value}
                        </p>
                      </div>
                      <div className={`bg-${stat.color}-100 p-3 rounded-xl`}>
                        <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Alertas de Stock */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  Alertas de Stock
                </h2>
                <div className="space-y-4">
                  {insumos.filter(insumo => insumo.stock <= insumo.stockMinimo).map((insumo, index) => {
                    const stockInfo = getStockStatus(insumo.stock, insumo.stockMinimo)
                    return (
                      <motion.div 
                        key={insumo.idInsumo} 
                        className={`p-4 rounded-xl border-l-4 ${
                          stockInfo.status === 'critical' ? 'bg-red-50 border-red-500' : 'bg-yellow-50 border-yellow-500'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-800">{insumo.nombreInsumo}</h3>
                            <p className="text-sm text-gray-600">Stock actual: {insumo.stock} {insumo.unidadMedida?.abreviatura}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              stockInfo.status === 'critical' ? 'bg-red-200 text-red-800' : 'bg-yellow-200 text-yellow-800'
                            }`}>
                              {stockInfo.text}
                            </span>
                            <motion.button
                              onClick={() => {
                                setSelectedInsumo(insumo)
                                setMovementType('Entrada')
                                setShowMovementModal(true)
                              }}
                              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Reabastecer
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Gestión de Insumos */}
          {activeTab === 'insumos' && (
            <motion.div 
              key="insumos"
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Controles */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Buscar insumos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-full md:w-80"
                    />
                  </div>
                  <motion.button 
                    onClick={() => setShowCreateInsumoModal(true)}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Nuevo Insumo
                  </motion.button>
                </div>
              </div>

              {/* Tabla de Insumos */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Insumo</th>
                        <th className="px-6 py-4 text-left font-semibold">Tipo</th>
                        <th className="px-6 py-4 text-left font-semibold">Stock</th>
                        <th className="px-6 py-4 text-left font-semibold">Estado</th>
                        <th className="px-6 py-4 text-left font-semibold">Precio</th>
                        <th className="px-6 py-4 text-left font-semibold">Proveedor</th>
                        <th className="px-6 py-4 text-center font-semibold">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredInsumos.map((insumo, index) => {
                        const stockInfo = getStockStatus(insumo.stock, insumo.stockMinimo)
                        return (
                          <motion.tr 
                            key={insumo.idInsumo} 
                            className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-orange-50 transition-colors`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <td className="px-6 py-4">
                              <div>
                                <p className="font-semibold text-gray-800">{insumo.nombreInsumo}</p>
                                <p className="text-sm text-gray-600">Mín: {insumo.stockMinimo} {insumo.unidadMedida?.abreviatura}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-gray-600">{insumo.tipoInsumo?.nombreTipo}</td>
                            <td className="px-6 py-4">
                              <span className="font-bold text-gray-800">{insumo.stock}</span>
                              <span className="text-sm text-gray-600 ml-1">{insumo.unidadMedida?.abreviatura}</span>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                stockInfo.status === 'critical' ? 'bg-red-200 text-red-800' :
                                stockInfo.status === 'low' ? 'bg-yellow-200 text-yellow-800' :
                                'bg-green-200 text-green-800'
                              }`}>
                                {stockInfo.text}
                              </span>
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-800">S/ {insumo.precio?.toFixed(2)}</td>
                            <td className="px-6 py-4 text-gray-600">{insumo.proveedor?.nombreProveedor}</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-center space-x-2">
                                {[
                                  { icon: Plus, color: 'green', title: 'Entrada', action: () => { setSelectedInsumo(insumo); setMovementType('Entrada'); setShowMovementModal(true) } },
                                  { icon: Minus, color: 'red', title: 'Salida', action: () => { setSelectedInsumo(insumo); setMovementType('Salida'); setShowMovementModal(true) } },
                                  { icon: Edit, color: 'blue', title: 'Editar', action: () => {} },
                                  { icon: Eye, color: 'gray', title: 'Ver', action: () => handleViewInsumo(insumo) }
                                ].map((btn, btnIndex) => (
                                  <motion.button
                                    key={btnIndex}
                                    onClick={btn.action}
                                    className={`bg-${btn.color}-500 hover:bg-${btn.color}-600 text-white p-2 rounded-lg transition-colors`}
                                    title={btn.title}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                  >
                                    <btn.icon className="w-4 h-4" />
                                  </motion.button>
                                ))}
                              </div>
                            </td>
                          </motion.tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Movimientos */}
          {activeTab === 'movimientos' && (
            <motion.div 
              key="movimientos"
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <ArrowUpDown className="w-6 h-6 text-orange-500 mr-2" />
                  Historial de Movimientos
                </h2>
                
                <div className="space-y-4">
                  {movimientos.map((movimiento, index) => (
                    <motion.div 
                      key={movimiento.idMovimiento}
                      className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-2 rounded-lg ${
                            movimiento.tipoMovimiento === 'Entrada' ? 'bg-green-100 text-green-600' :
                            movimiento.tipoMovimiento === 'Salida' ? 'bg-red-100 text-red-600' :
                            'bg-blue-100 text-blue-600'
                          }`}>
                            {movimiento.tipoMovimiento === 'Entrada' ? <Plus className="w-5 h-5" /> :
                             movimiento.tipoMovimiento === 'Salida' ? <Minus className="w-5 h-5" /> :
                             <ArrowUpDown className="w-5 h-5" />}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">{movimiento.insumo.nombreInsumo}</h3>
                            <p className="text-sm text-gray-600">
                              {movimiento.tipoMovimiento}: {movimiento.cantidad} {movimiento.insumo.unidadMedida.abreviatura}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">{formatDate(movimiento.fechaMovimiento)}</p>
                          <p className="text-xs text-gray-500">
                            {movimiento.empleado.persona.nombre} {movimiento.empleado.persona.apellido}
                          </p>
                        </div>
                      </div>
                      {movimiento.motivo && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <p className="text-sm text-gray-700">
                            <FileText className="w-4 h-4 inline mr-1" />
                            {movimiento.motivo}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Proveedores */}
          {activeTab === 'proveedores' && (
            <motion.div 
              key="proveedores"
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Controles */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Buscar proveedores..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-full md:w-80"
                    />
                  </div>
                  <motion.button 
                    onClick={() => setShowCreateProveedorModal(true)}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Nuevo Proveedor
                  </motion.button>
                </div>
              </div>

              {/* Grid de Proveedores */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProveedores.map((proveedor, index) => (
                  <motion.div 
                    key={proveedor.idProveedores}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                        {proveedor.tipoProveedor?.nombreTipo || 'General'}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{proveedor.nombreProveedor}</h3>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      {proveedor.ruc && (
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-2" />
                          RUC: {proveedor.ruc}
                        </div>
                      )}
                      {proveedor.telefono && (
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          {proveedor.telefono}
                        </div>
                      )}
                      {proveedor.correo && (
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          {proveedor.correo}
                        </div>
                      )}
                      {proveedor.direccion && (
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {proveedor.direccion}
                        </div>
                      )}
                    </div>

                    {proveedor.personaContacto && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm font-medium text-gray-700">Contacto:</p>
                        <p className="text-sm text-gray-600 flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {proveedor.personaContacto}
                          {proveedor.telefonoContacto && ` - ${proveedor.telefonoContacto}`}
                        </p>
                      </div>
                    )}

                    <div className="flex space-x-2 mt-4">
                      <motion.button 
                        onClick={() => {
                          setSelectedProveedor(proveedor)
                          setProveedorForm({...proveedor, idTipoProveedor: proveedor.tipoProveedor?.idTipoProveedor?.toString() || ''})
                          setShowEditProveedorModal(true)
                        }}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Edit className="w-4 h-4 inline mr-1" />
                        Editar
                      </motion.button>
                      <motion.button 
                        onClick={() => handleViewProveedor(proveedor)}
                        className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye className="w-4 h-4 inline mr-1" />
                        Ver
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal de Movimiento */}
        <AnimatePresence>
          {showMovementModal && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-white rounded-2xl p-8 max-w-md w-full mx-4"
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {movementType} de Inventario
                  </h3>
                  <button
                    onClick={() => setShowMovementModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Insumo</label>
                    <p className="text-lg font-medium text-gray-800">{selectedInsumo?.nombreInsumo}</p>
                    <p className="text-sm text-gray-600">Stock actual: {selectedInsumo?.stock} {selectedInsumo?.unidadMedida?.abreviatura}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Movimiento</label>
                    <select
                      value={movementType}
                      onChange={(e) => setMovementType(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="Entrada">Entrada</option>
                      <option value="Salida">Salida</option>
                      <option value="Ajuste">Ajuste</option>
                      <option value="Merma">Merma</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Cantidad</label>
                    <input
                      type="number"
                      value={movementQuantity}
                      onChange={(e) => setMovementQuantity(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="0"
                      min="0"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Motivo</label>
                    <textarea
                      value={movementReason}
                      onChange={(e) => setMovementReason(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      rows={3}
                      placeholder="Describe el motivo del movimiento..."
                    />
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-6">
                  <button
                    onClick={() => setShowMovementModal(false)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                    disabled={isSubmitting}
                  >
                    Cancelar
                  </button>
                  <motion.button
                    onClick={handleMovement}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-70"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Procesando...
                      </span>
                    ) : (
                      `Confirmar ${movementType}`
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal de Crear Insumo */}
        <AnimatePresence>
          {showCreateInsumoModal && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-white rounded-2xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <Package className="w-6 h-6 mr-2 text-orange-500" />
                    Crear Nuevo Insumo
                  </h3>
                  <button
                    onClick={() => setShowCreateInsumoModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre del Insumo *</label>
                    <input
                      type="text"
                      value={insumoForm.nombreInsumo}
                      onChange={(e) => setInsumoForm({...insumoForm, nombreInsumo: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Ej: Carne de pollo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Código</label>
                    <input
                      type="text"
                      value={insumoForm.codigoInsumo}
                      onChange={(e) => setInsumoForm({...insumoForm, codigoInsumo: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Ej: CARN-001"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Insumo *</label>
                    <select
                      value={insumoForm.idTipoInsumo}
                      onChange={(e) => setInsumoForm({...insumoForm, idTipoInsumo: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Seleccionar tipo</option>
                      {tiposInsumo.map(tipo => (
                        <option key={tipo.idTipoInsumo} value={tipo.idTipoInsumo}>
                          {tipo.nombreTipo}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Unidad de Medida *</label>
                    <select
                      value={insumoForm.idUnidadMedida}
                      onChange={(e) => setInsumoForm({...insumoForm, idUnidadMedida: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Seleccionar unidad</option>
                      {unidadesMedida.map(unidad => (
                        <option key={unidad.idUnidadMedida} value={unidad.idUnidadMedida}>
                          {unidad.nombre} ({unidad.abreviatura})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Proveedor</label>
                    <select
                      value={insumoForm.idProveedor}
                      onChange={(e) => setInsumoForm({...insumoForm, idProveedor: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Sin proveedor</option>
                      {proveedores.map(proveedor => (
                        <option key={proveedor.idProveedores} value={proveedor.idProveedores}>
                          {proveedor.nombreProveedor}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Ubicación en Almacén</label>
                    <input
                      type="text"
                      value={insumoForm.ubicacionAlmacen}
                      onChange={(e) => setInsumoForm({...insumoForm, ubicacionAlmacen: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Ej: Estante A-1"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Descripción</label>
                    <textarea
                      value={insumoForm.descripcion}
                      onChange={(e) => setInsumoForm({...insumoForm, descripcion: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      rows={3}
                      placeholder="Descripción del insumo..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Stock Inicial *</label>
                    <input
                      type="number"
                      value={insumoForm.stock}
                      onChange={(e) => setInsumoForm({...insumoForm, stock: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="0"
                      min="0"
                      step="0.01"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Stock Mínimo</label>
                    <input
                      type="number"
                      value={insumoForm.stockMinimo}
                      onChange={(e) => setInsumoForm({...insumoForm, stockMinimo: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="5"
                      min="0"
                      step="0.01"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Precio Unitario *</label>
                    <input
                      type="number"
                      value={insumoForm.precio}
                      onChange={(e) => setInsumoForm({...insumoForm, precio: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-8">
                  <button
                    onClick={() => setShowCreateInsumoModal(false)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                    disabled={isSubmitting}
                  >
                    Cancelar
                  </button>
                  <motion.button
                    onClick={handleCreateInsumo}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-70"
                    disabled={isSubmitting || !insumoForm.nombreInsumo || !insumoForm.stock || !insumoForm.precio}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Creando...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Save className="w-5 h-5 mr-2" />
                        Crear Insumo
                      </span>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal de Ver Insumo */}
        <AnimatePresence>
          {showViewInsumoModal && selectedInsumo && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-white rounded-2xl p-8 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <Info className="w-6 h-6 mr-2 text-blue-500" />
                    Detalles del Insumo
                  </h3>
                  <button
                    onClick={() => setShowViewInsumoModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-600">Nombre</label>
                      <p className="text-lg font-medium text-gray-800">{selectedInsumo.nombreInsumo}</p>
                    </div>
                    
                    {selectedInsumo.codigoInsumo && (
                      <div>
                        <label className="text-sm font-semibold text-gray-600">Código</label>
                        <p className="text-gray-800">{selectedInsumo.codigoInsumo}</p>
                      </div>
                    )}
                    
                    <div>
                      <label className="text-sm font-semibold text-gray-600">Tipo</label>
                      <p className="text-gray-800">{selectedInsumo.tipoInsumo?.nombreTipo}</p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-semibold text-gray-600">Unidad de Medida</label>
                      <p className="text-gray-800">{selectedInsumo.unidadMedida?.nombre} ({selectedInsumo.unidadMedida?.abreviatura})</p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-semibold text-gray-600">Stock Actual</label>
                      <p className="text-2xl font-bold text-blue-600">
                        {selectedInsumo.stock} {selectedInsumo.unidadMedida?.abreviatura}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-600">Stock Mínimo</label>
                      <p className="text-lg font-medium text-orange-600">
                        {selectedInsumo.stockMinimo} {selectedInsumo.unidadMedida?.abreviatura}
                      </p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-semibold text-gray-600">Precio Unitario</label>
                      <p className="text-lg font-bold text-green-600">S/ {selectedInsumo.precio?.toFixed(2)}</p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-semibold text-gray-600">Proveedor</label>
                      <p className="text-gray-800">{selectedInsumo.proveedor?.nombreProveedor || 'Sin proveedor'}</p>
                    </div>
                    
                    {selectedInsumo.ubicacionAlmacen && (
                      <div>
                        <label className="text-sm font-semibold text-gray-600">Ubicación</label>
                        <p className="text-gray-800 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {selectedInsumo.ubicacionAlmacen}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {selectedInsumo.descripcion && (
                    <div className="md:col-span-2">
                      <label className="text-sm font-semibold text-gray-600">Descripción</label>
                      <p className="text-gray-800 mt-1">{selectedInsumo.descripcion}</p>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-end mt-8">
                  <button
                    onClick={() => setShowViewInsumoModal(false)}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Cerrar
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal de Crear Proveedor */}
        <AnimatePresence>
          {showCreateProveedorModal && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-white rounded-2xl p-8 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <Building className="w-6 h-6 mr-2 text-orange-500" />
                    Crear Nuevo Proveedor
                  </h3>
                  <button
                    onClick={() => setShowCreateProveedorModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre del Proveedor *</label>
                    <input
                      type="text"
                      value={proveedorForm.nombreProveedor}
                      onChange={(e) => setProveedorForm({...proveedorForm, nombreProveedor: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Ej: Mercado Central S.A."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Proveedor</label>
                    <select
                      value={proveedorForm.idTipoProveedor}
                      onChange={(e) => setProveedorForm({...proveedorForm, idTipoProveedor: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Seleccionar tipo</option>
                      {tiposProveedor.map(tipo => (
                        <option key={tipo.idTipoProveedor} value={tipo.idTipoProveedor}>
                          {tipo.nombreTipo}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">RUC</label>
                    <input
                      type="text"
                      value={proveedorForm.ruc}
                      onChange={(e) => setProveedorForm({...proveedorForm, ruc: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="20123456789"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                    <input
                      type="text"
                      value={proveedorForm.telefono}
                      onChange={(e) => setProveedorForm({...proveedorForm, telefono: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="987654321"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Correo Electrónico</label>
                    <input
                      type="email"
                      value={proveedorForm.correo}
                      onChange={(e) => setProveedorForm({...proveedorForm, correo: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="contacto@proveedor.com"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Dirección</label>
                    <textarea
                      value={proveedorForm.direccion}
                      onChange={(e) => setProveedorForm({...proveedorForm, direccion: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      rows={3}
                      placeholder="Dirección completa del proveedor..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Persona de Contacto</label>
                    <input
                      type="text"
                      value={proveedorForm.personaContacto}
                      onChange={(e) => setProveedorForm({...proveedorForm, personaContacto: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Nombre del contacto"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono de Contacto</label>
                    <input
                      type="text"
                      value={proveedorForm.telefonoContacto}
                      onChange={(e) => setProveedorForm({...proveedorForm, telefonoContacto: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="987654321"
                    />
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-8">
                  <button
                    onClick={() => {
                      setShowCreateProveedorModal(false)
                      resetProveedorForm()
                    }}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                    disabled={isSubmitting}
                  >
                    Cancelar
                  </button>
                  <motion.button
                    onClick={handleCreateProveedor}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-70"
                    disabled={isSubmitting || !proveedorForm.nombreProveedor}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Creando...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Save className="w-5 h-5 mr-2" />
                        Crear Proveedor
                      </span>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal de Editar Proveedor */}
        <AnimatePresence>
          {showEditProveedorModal && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-white rounded-2xl p-8 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <Edit className="w-6 h-6 mr-2 text-blue-500" />
                    Editar Proveedor
                  </h3>
                  <button
                    onClick={() => setShowEditProveedorModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre del Proveedor *</label>
                    <input
                      type="text"
                      value={proveedorForm.nombreProveedor}
                      onChange={(e) => setProveedorForm({...proveedorForm, nombreProveedor: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Ej: Mercado Central S.A."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Proveedor</label>
                    <select
                      value={proveedorForm.idTipoProveedor}
                      onChange={(e) => setProveedorForm({...proveedorForm, idTipoProveedor: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Seleccionar tipo</option>
                      {tiposProveedor.map(tipo => (
                        <option key={tipo.idTipoProveedor} value={tipo.idTipoProveedor}>
                          {tipo.nombreTipo}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">RUC</label>
                    <input
                      type="text"
                      value={proveedorForm.ruc}
                      onChange={(e) => setProveedorForm({...proveedorForm, ruc: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="20123456789"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                    <input
                      type="text"
                      value={proveedorForm.telefono}
                      onChange={(e) => setProveedorForm({...proveedorForm, telefono: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="987654321"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Correo Electrónico</label>
                    <input
                      type="email"
                      value={proveedorForm.correo}
                      onChange={(e) => setProveedorForm({...proveedorForm, correo: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="contacto@proveedor.com"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Dirección</label>
                    <textarea
                      value={proveedorForm.direccion}
                      onChange={(e) => setProveedorForm({...proveedorForm, direccion: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      rows={3}
                      placeholder="Dirección completa del proveedor..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Persona de Contacto</label>
                    <input
                      type="text"
                      value={proveedorForm.personaContacto}
                      onChange={(e) => setProveedorForm({...proveedorForm, personaContacto: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Nombre del contacto"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono de Contacto</label>
                    <input
                      type="text"
                      value={proveedorForm.telefonoContacto}
                      onChange={(e) => setProveedorForm({...proveedorForm, telefonoContacto: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="987654321"
                    />
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-8">
                  <button
                    onClick={() => {
                      setShowEditProveedorModal(false)
                      resetProveedorForm()
                    }}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                    disabled={isSubmitting}
                  >
                    Cancelar
                  </button>
                  <motion.button
                    onClick={handleEditProveedor}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-70"
                    disabled={isSubmitting || !proveedorForm.nombreProveedor}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Actualizando...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Save className="w-5 h-5 mr-2" />
                        Actualizar Proveedor
                      </span>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal de Ver Proveedor */}
        <AnimatePresence>
          {showViewProveedorModal && selectedProveedor && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-white rounded-2xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <Info className="w-6 h-6 mr-2 text-blue-500" />
                    Información del Proveedor
                  </h3>
                  <button
                    onClick={() => setShowViewProveedorModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Información básica */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-2xl text-white">
                      <div className="flex items-center mb-4">
                        <Building className="w-8 h-8 mr-3" />
                        <div>
                          <h4 className="text-xl font-bold">{selectedProveedor.nombreProveedor}</h4>
                          <p className="text-orange-100">{selectedProveedor.tipoProveedor?.nombreTipo || 'Proveedor General'}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {selectedProveedor.ruc && (
                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <FileText className="w-5 h-5 text-gray-500 mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">RUC</p>
                            <p className="font-semibold">{selectedProveedor.ruc}</p>
                          </div>
                        </div>
                      )}
                      
                      {selectedProveedor.telefono && (
                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <Phone className="w-5 h-5 text-gray-500 mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Teléfono</p>
                            <p className="font-semibold">{selectedProveedor.telefono}</p>
                          </div>
                        </div>
                      )}
                      
                      {selectedProveedor.correo && (
                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <Mail className="w-5 h-5 text-gray-500 mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Correo</p>
                            <p className="font-semibold">{selectedProveedor.correo}</p>
                          </div>
                        </div>
                      )}
                      
                      {selectedProveedor.direccion && (
                        <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                          <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-1" />
                          <div>
                            <p className="text-sm text-gray-600">Dirección</p>
                            <p className="font-semibold">{selectedProveedor.direccion}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Información de contacto y estadísticas */}
                  <div className="space-y-6">
                    {(selectedProveedor.personaContacto || selectedProveedor.telefonoContacto) && (
                      <div className="bg-blue-50 p-6 rounded-2xl">
                        <h5 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                          <User className="w-5 h-5 mr-2" />
                          Persona de Contacto
                        </h5>
                        <div className="space-y-2">
                          {selectedProveedor.personaContacto && (
                            <p className="text-gray-700">
                              <strong>Nombre:</strong> {selectedProveedor.personaContacto}
                            </p>
                          )}
                          {selectedProveedor.telefonoContacto && (
                            <p className="text-gray-700">
                              <strong>Teléfono:</strong> {selectedProveedor.telefonoContacto}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Aquí podrías mostrar insumos del proveedor si están disponibles */}
                    {selectedProveedor.insumo && selectedProveedor.insumo.length > 0 && (
                      <div className="bg-green-50 p-6 rounded-2xl">
                        <h5 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                          <Package className="w-5 h-5 mr-2" />
                          Insumos Suministrados
                        </h5>
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                          {selectedProveedor.insumo.map((insumo: any) => (
                            <div key={insumo.idInsumo} className="flex justify-between items-center p-2 bg-white rounded-lg">
                              <span className="text-gray-700">{insumo.nombreInsumo}</span>
                              <span className="text-sm text-gray-500">{insumo.stock} {insumo.unidadMedida?.abreviatura}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-end mt-8">
                  <button
                    onClick={() => setShowViewProveedorModal(false)}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Cerrar
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default InventarioPage