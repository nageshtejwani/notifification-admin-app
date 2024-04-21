import React, { useState } from 'react';
import { fetchData, postNotificationData } from './api/api';

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');




  const handleFetchData = async () => {
    setIsLoading(true);
    const data = await fetchData();
    setData(data);
    setIsLoading(false);
  };

 const handleParseJson = () => {
    try {
      const jsonData = JSON.parse(textareaValue);
    postNotificationData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error('Invalid JSON:', error);
    }
  };


  return (
    <div className="App">
       <textarea value={textareaValue} onChange={e => setTextareaValue(e.target.value)} />
      <button onClick={handleFetchData} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch Data'}
      </button>
      <button onClick={handleParseJson}>Parse JSON</button>
      {data && <textarea readOnly value={JSON.stringify(data)} />}
    </div>
  );
}

export default App;