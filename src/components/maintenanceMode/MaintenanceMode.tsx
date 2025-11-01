import MaintenanceModeIcon from '@/assets/MaintenanceModeIcon';
import '@/components/maintenanceMode/styles.css';

import type { Component } from '@/types';

const MaintenanceMode: Component = () => (
  <div className="container">
    <div className="flex flex-wrap justify-center">
      <div className="main-title basis-10/12">
        <h1>Website</h1>
        <h2>under construction</h2>
      </div>
    </div>
    <div className="flex flex-wrap items-center">
      <div className="svg-img basis-10/12 p-5 md:basis-6/12 lg:basis-1/2">
        <MaintenanceModeIcon />
      </div>
    </div>
  </div>
);

export default MaintenanceMode;
