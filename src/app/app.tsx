import MaintenanceMode from '@/components/MaintenanceMode/MaintenanceMode';
import config from '@/config';

import type { Layout } from '@/types';

const App: Layout = ({ children }) => {
  const isInMaintenance = config.MAINTENANCE_MODE === 'ON';

  return <main id="main">{isInMaintenance ? <MaintenanceMode /> : children}</main>;
};

export default App;
