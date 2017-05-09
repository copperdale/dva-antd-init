import React from 'react';
import { connect } from 'dva';
import { LocaleProvider, Row, Col } from 'antd';

import HyveHeader from '../../components/common/HyveHeader';
import { LANG, LANGAntd } from '../../lang/index';

const NOT_FOUND_PAGE_TEXT = LANG('APP.Routes.NotFoundPage.NotFoundPageText', 'Not Found Page');

function NotFoundPage() {
  return (
    <LocaleProvider locale={LANGAntd}>
      <Row>
        <Col span={20} offset={2}>
          <HyveHeader />
          <div>{NOT_FOUND_PAGE_TEXT}</div>
        </Col>
      </Row>
    </LocaleProvider>
  );
}

function mapStateToProps() {
  return {

  };
}

export default connect(mapStateToProps)(NotFoundPage);
