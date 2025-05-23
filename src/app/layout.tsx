import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Tu App',
  description: 'App con NextAuth',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
