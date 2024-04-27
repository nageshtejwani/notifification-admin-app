import React, { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';
import { getRequestLog } from './api/api';

function RequestLog() {
  const [logData, setLogData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRequestLog();
      setLogData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Request Log</h1>
      {logData && <ReactJson src={logData} />}
    </div>
  );
}

export default RequestLog;