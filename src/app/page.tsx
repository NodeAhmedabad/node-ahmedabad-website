import { Fragment } from 'react';
import UserIcon from '@/components/UserIcon';

export default function Home() {
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 main-title">
            <h1>Website</h1>
            <h2>under development, released soon</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-sm-10 col-md-6 col-lg-6 svg-img p-5">
            <UserIcon />
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container text-center">
          <span>nodeahmedabad.com</span>
        </div>
      </footer>
    </Fragment>
  );
}
