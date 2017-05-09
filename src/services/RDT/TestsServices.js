import { GET } from '../../utils/request';
import { URL } from '../../utils/Constant';

export function get({ status = 'finished', sn, hour = false }) {
  let param = '';
  if (sn) {
    param += `&sn=${sn}`;
  }
  if (hour) {
    param += `&hourLeft=${hour}`;
  }
  return GET(`${URL.Tests}?status=${status}${param}`, {});
}

export function post(param = {}) {
  return GET(`${URL.Tests}`, param);
}
