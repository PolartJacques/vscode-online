import { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import './ErrorPage.css';

const ErrorPage: FunctionComponent = () => {
  return (
    <div className="container">
      <div className="content">
        <FontAwesomeIcon icon={faCircleExclamation} size="lg" />
        <p>Something went wrong. try reloading the page.</p>
      </div>
    </div>
  );
};

export default ErrorPage;