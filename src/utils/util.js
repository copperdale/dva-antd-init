export default {
  getLocParam: (name) => {
    let obj = false;
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var r = window.location.search.substr(1).match(reg); // eslint-disable-line
    if (r != null) {
      obj = unescape(r[2]);
    }
    return obj;
  },
  getLocParamObject: () => {
    let queryString = {}; // eslint-disable-line
    let query = window.location.search.substring(1); // eslint-disable-line
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=');
      if (typeof queryString[pair[0]] === 'undefined') {
        queryString[pair[0]] = decodeURIComponent(pair[1]);
      } else if (typeof queryString[pair[0]] === 'string') {
        const arr = [queryString[pair[0]], decodeURIComponent(pair[1])];
        queryString[pair[0]] = arr;
      } else {
        queryString[pair[0]].push(decodeURIComponent(pair[1]));
      }
    }
    delete queryString[''];
    return queryString;
  },
  queryStringify: (queryObj) => {
    let result = '?';
    const keys = Object.keys(queryObj);
    keys.forEach((item, index) => {
      result += (item + '=' + queryObj[item]);
      if (index !== keys.length - 1) {
        result += '&';
      }
    });
    return result;
  },
  getCookieByName: (name) => {
    const cookie = window.document.cookie; // eslint-disable-line
    const getCookieValue = (offset) => {
      let endStr = cookie.indexOf(';', offset);
      if (endStr === -1) {
        endStr = cookie.length;
      }
      return unescape(cookie.substring(offset, endStr));
    };
    const arg = name + '=';
    const alen = arg.length;
    const clen = cookie.length;
    let i = 0;
    while (i < clen) {
      const j = i + alen;
      if (cookie.substring(i, j) === arg) {
        return getCookieValue(j);
      }
      i = cookie.indexOf(' ', i) + 1;
      if (i === 0) break;
    }
    return null;
  }
};
