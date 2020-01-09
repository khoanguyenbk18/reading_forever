import {axiosInstance} from './axiosInstance';
import {GET_LIST_REPORTS, REJECT_REPORTS, REJECT_POST} from './urls';

export const getListReports = () => {
  return axiosInstance.get(GET_LIST_REPORTS);
};
export const rejectReport = reportId => {
  return axiosInstance.post(REJECT_REPORTS, {reportId: reportId});
};
export const deletePost = reportId  => {
  return axiosInstance.post(REJECT_POST, {reportId: reportId});
};