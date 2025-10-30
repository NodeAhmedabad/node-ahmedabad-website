import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MaintenanceMode from '@/components/maintenanceMode/MaintenanceMode';
import config from '@/config';

import type { Layout } from '@/types';

const App: Layout = ({ children }) => {
  const isInMaintenance = config.MAINTENANCE_MODE === 'ON';

  if (isInMaintenance) return <MaintenanceMode />;

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
};

export default App;
