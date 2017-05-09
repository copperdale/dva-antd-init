import React from 'react';
import { LANG } from '../../lang/index';

const pager = {
  pageSize: 20,
  showSizeChanger: true,
  pageSizeOptions: ['2', '5', '10', '20', '30', '40', '50', '100'],
  showTotal: (total, range) => { // eslint-disable-line
    return (<div>
      {LANG('APP.Fragment.TablePagerTotalLabel', 'Total')} : {total}
      <div style={{ width: '20px', height: '1px', display: 'inline-block' }} />
    </div>);
  },
  showQuickJumper: true
};

export default pager;
