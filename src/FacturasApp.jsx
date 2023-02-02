import { AuthProvider } from './auth/context';
import { FacturasAppRouter } from './router/FacturasAppRouter';

export const FacturasApp = () => {
  return (
    <AuthProvider>
      <FacturasAppRouter />
    </AuthProvider>
  )
}
