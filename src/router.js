import React from 'react';
import { Router } from 'dva/router';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '*',
      // name: 'notFound',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/common/HyveHeader'));
          cb(null, require('./routes/NotFoundPage/NotFoundPage'));
        });
      }
    }
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
