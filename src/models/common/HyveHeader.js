import * as TestsServices from '../../services/RDT/TestsServices.js';// eslint-disable-line

export default {

  namespace: 'HyveHeader',

  state: {
    lang: 'zhCN',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      // dispatch({ type: 'getBySn', payload: { sn: 'TWTHS0218731468' } });
      return history.listen(({ /* pathname, */ query }) => {
        if (query.lang) {
          dispatch({ type: 'setLang', payload: { lang: query.lang } });
        }
      });
    },
  },

  effects: {
    *setLang({ payload }, { call, put }) {  // eslint-disable-line
      // TestsServices.post();
      yield put({ type: 'r_setLang', payload });
    },
  },

  reducers: {
    r_setLang(state, { payload: { lang } }) {
      return { ...state, lang };
    },
  },

};
