import moment from 'moment';

const formatDateTime = (datetime: string) => {
  return moment(datetime).format('yyyy-MM-DD HH:mm:ss');
};
export {formatDateTime};
