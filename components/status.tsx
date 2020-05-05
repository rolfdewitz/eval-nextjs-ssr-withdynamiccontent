import React, { FunctionComponent } from 'react';
import StatusService from '../services/statusService';

interface Props {
  status: boolean;
}

const StatusComponent: FunctionComponent<Props> = (props) => {

  let [status, setStatus] = React.useState(false);
  const statusService = new StatusService();

  React.useEffect(() => {
    console.log(status);
    startInterval();
  }, [status]);

  const startInterval = () => {
    const interval = setInterval(() => {
      setStatus(() => statusService.getStatus());
    }, 5000);
  };

  return (
      <span>
        { status
        ? 'Which framework is the best?'
        : 'Sure?'
        }
      </span>
  );
}

export default StatusComponent;