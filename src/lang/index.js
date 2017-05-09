import antdEn from 'antd/lib/locale-provider/en_US';
import { langEnUS } from './enUS';
import { langZhCN } from './zhCN';

import { getLocParam, getCookieByName } from '../utils/util';

const getLang = () => {
  const result = {};
// cookie value first, location parameter value second.
  const cookieLang = getCookieByName('languageEnvironment');
  const locationLang = getLocParam('lang');
  const lang = cookieLang || locationLang;
// CODE : en-us, es-mx, en-gb, fr-ca, zh-cn, zh-tw
// DESC : English US, Espanol, English UK/CA, Français, 简体中文, 繁體中文

  switch (lang) {
    case 'enUS':
    case 'en-us':
      result.antd = antdEn;
      result.lang = langEnUS;
      break;
    case 'zhCN':
    case 'zh-cn':
      result.antd = null;
      result.lang = langZhCN;
      break;
    default:
      result.antd = null;
      result.lang = langEnUS;
      break;
  }
  return result;
};
export default {
  LANG: (key, defaultStr) => {
    return (getLang() && getLang().lang && getLang().lang[key]) || defaultStr || '';
  },
  LANGAntd: (getLang() && getLang().antd) || {},
};
