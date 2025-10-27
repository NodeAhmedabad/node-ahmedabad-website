import config from '@/config';
import { Layout } from '@/types';

const App: Layout = ({ children }) => {
  const isInMaintenance = config.MAINTENANCE_MODE === 'ON';

  return <main id="main">{isInMaintenance ? null : children}</main>;
};

export default App;
