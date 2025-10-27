import { Fragment } from 'react/jsx-runtime';

import MaintenanceModeIcon from '@/assets/MaintenanceModeIcon';
import '@/components/MaintenanceMode/styles.css';

import type { Component } from '@/types';

const MaintenanceMode: Component = () => (
  <Fragment>
    <div className="container">
      <div className="flex flex-wrap justify-center">
        <div className="basis-10/12 main-title">
          <h1>Website</h1>
          <h2>under construction</h2>
        </div>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="basis-10/12 md:basis-6/12 lg:basis-1/2 svg-img p-5">
          <MaintenanceModeIcon />
        </div>
      </div>
    </div>
  </Fragment>
);

export default MaintenanceMode;
