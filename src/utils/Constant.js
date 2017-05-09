const protocol = 'http://';

// let hostname = '192.168.85.106'
// let hostname = 'cdc-d-williamz'
// let hostname = '10.17.2.29'
const hostname = '192.168.85.125';

const port = ':8888';

const Prefix = protocol + hostname + port + '/';

export default {
  URL: {
    Tests: Prefix + 'tests',
    TestType: Prefix + 'testTypes',
    TestTemplate: Prefix + 'templates',
    TestTask: Prefix + 'monitorTasks',
    TestEngine: Prefix + 'stressEngines',
  },
  LANG: 'en',
};
