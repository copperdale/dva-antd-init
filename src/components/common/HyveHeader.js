/* eslint-env browser */
import React from 'react';
import { connect } from 'dva';
import { Radio } from 'antd';
// import { routerRedux } from 'dva/router';
import styles from './HyveHeader.less';
import { LANG } from '../../lang/index';
import { getLocParamObject, queryStringify } from '../../utils/util';

// const FormItem = Form.Item;
const HYVEHEADER_TITLE = LANG('APP.HyveHeader.Title', 'RDT Test');
const HyveHeader = ({ lang }) => {
  const setLang = (e) => {
    const value = e.target.value;
    // dispatch(routerRedux.push({
    //   pathname: window.location.pathname,
    //   query: Object.assign(getLocParamObject(), {lang: value})
    // }))
    const query = Object.assign(getLocParamObject(), { lang: value });
    window.location.href = window.location.pathname + queryStringify(query);
  };
  return (
    <div className={styles['rdt-header-title']}>
      {HYVEHEADER_TITLE}

      <div>
        <Radio.Group value={lang} onChange={setLang}>
          <Radio.Button key="en" value="enUS">English</Radio.Button>
          <Radio.Button key="cn" value="zhCN">中文</Radio.Button>
        </Radio.Group>
      </div>
    </div>
  );
};

HyveHeader.propTypes = {

};
function mapStateToProps(state) {
  const { lang } = state.HyveHeader;

  return {
    lang,
  };
}

export default connect(mapStateToProps)(HyveHeader);
