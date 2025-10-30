import MaintenanceMode from '@/components/maintenanceMode/MaintenanceMode';
import config from '@/config';

import type { Layout } from '@/types';

const App: Layout = async ({ children }) => {
  const isInMaintenance = config.MAINTENANCE_MODE === 'ON';

  return isInMaintenance ? <MaintenanceMode /> : children;
};

export default App;
