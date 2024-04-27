import axios from 'axios';

export const fetchData = async () => {
  const result = await axios('http://localhost:8080/notification/notifytest');
  return result.data;
};

export const postNotificationData = async (data) => {
    const result = await axios.post('http://localhost:8080/notification/send',data);
    return result.data
};

export const getRequestLog = async () => {
  const result = await axios('http://localhost:8080/notification/requestLogs');
  return result.data;
}
