import dva from 'dva';
import createLoading from 'dva-loading';
import { message } from 'antd';
import { browserHistory } from 'dva/router';

import './index.html';
import './index.less';

// 1. Initialize
const app = dva({
  history: browserHistory,
  onError(e) {
    message.error(e.message, 3);
  },
});

// 2. Plugins
app.use(createLoading());

// 3. Model
// app.model(require('./models/RDT/StatusFinished'));
// app.model(require('./models/RDT/StatusRunning'));
// app.model(require('./models/RDT/StatusInitialized'));
// app.model(require('./models/User'));

// app.model(require('./models/RDT/StatusFinished'));
// app.model(require('./models/RDT/StatusRunning'));
// app.model(require('./models/RDT/StatusInitialized'));
// app.model(require('./models/RDT/DownloadDialog'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
