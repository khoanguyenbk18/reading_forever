import {axiosInstance} from './axiosInstance';
import {GET_LIST_REPORTS} from './urls';

export const getListReports = () => {
  return axiosInstance.get(GET_LIST_REPORTS);
};
