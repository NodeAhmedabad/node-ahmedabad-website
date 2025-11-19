import MaintenanceModeIcon from '@/assets/MaintenanceModeIcon';
import '@/components/maintenanceMode/styles.css';
import Typography from '@/components/ui/Typography';

import type { Component } from '@/types';

const MaintenanceMode: Component = () => (
  <div className="min-h-screen bg-white">
    <div className="container">
      <div className="flex flex-wrap justify-center">
        <div className="main-title basis-10/12">
          <Typography as="h1" variant="inherit">
            Website
          </Typography>
          <Typography as="h2" variant="inherit">
            under construction
          </Typography>
        </div>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="svg-img basis-10/12 p-5 md:basis-6/12 lg:basis-1/2">
          <MaintenanceModeIcon />
        </div>
      </div>
    </div>
  </div>
);

export default MaintenanceMode;
