/* eslint-env browser */
import axios from 'axios';

import NProgress from 'nprogress';
import qs from 'qs';
import Promise from 'promise-polyfill';

if (!(window && window.Promise)) {
  window.Promise = Promise;
}

axios.interceptors.request.use((config) => {
  NProgress.start();
  // config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
  // config.headers['Access-Control-Allow-Credentials'] = true;
  config.data = qs.stringify(config.data);
  config.timeout = 5000;
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  NProgress.done();
  return response;
}, (error) => {
  NProgress.done();
  return Promise.reject(error);
});

function checkStatus(response) {
  if (response.status === 200 || response.status === 304) {
    return response;
        // if (+response.data.code === 200) return response
        // else throw new Error(response.data.message) // eslint-disable-line
  }
    throw new Error(response.statusText) // eslint-disable-line
}

export function request(config) {
  return axios.request(config).then(checkStatus);
}

export function GET(url, data) {
  return request({
    url: url,
    method: 'get',
    data: data
  });
}

export function POST(url, data, config) {
  let CONF = {
    url: url,
    method: 'post',
    data: data
  };
  return request({ ...CONF, ...config });
}

export function PUT(url, data, config) {
  let CONF = {
    url: url,
    method: 'put',
    data: data
  };
  return request({ ...CONF, ...config });
}

export function DELETE(url, config) {
  let CONF = {
    url: url,
    method: 'delete'
  };
  return request({ ...CONF, ...config });
}
