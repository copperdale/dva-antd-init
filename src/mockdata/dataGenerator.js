const fs = require('fs');
const Mock = require('mockjs');

fs.open('db.json', 'w', 0, (e, fd) => {
  if (e) throw e;
  fs.write(fd, genData(), 0, 'utf8', (event) => {
    if (event) throw event;
    fs.closeSync(fd);
  });
});

function genData() {
  const result = Mock.mock({
    'tests|2000': [{
      'sn': /(TWTHS|EBY)(02|01)[0-9]{8}/gi,
      'sku': /(HYV-N-TCH-4COMP-5|HYVSLEDP1G5A)/gi,
      'started': '@datetime(\'yyyy-MM-dd HH:mm:ss\')',
      'finished': '@datetime(\'yyyy-MM-dd HH:mm:ss\')',
      'ip': '@ip',
      'status': /(Finished|Running|Initialized)/gi,
      'currenttype': /(Burn-in)/gi,
      'isFailed': '@boolean',
      'hourLeft': /(1|2|4|8|12|24)/gi,
      'id+1': 1,
      'testTypes|1-3': [{
        'name': 'Burn-in 5',
        'template': /Template 1|Template 2|Template 3|Template 4/gi,
        'monitorTasks|0-2': [{
          'name': /Lidp Sensor|System Temperature/gi,
          'interval|0-40': 40,
        }],
        'stressEngines|1-2': [{
          'name': /Inter HPL|Badblock|LMbench/gi,
          'implPath|2-4': /[a-zA-Z]{2,8}\//,
          'linpackPath|2-4': /[a-zA-Z]{2,8}\//,
          'MpiexecBinary|2-4': /[a-zA-Z]{2,8}\//,
          'pathToStoreLog': /\/[a-zA-Z]{2,8}\/HPL(-d{5,10}){2,3}/,
          'logFileName': /[a-zA-Z]{4,14}\.txt/,
          'debugFileName': /[a-zA-Z]{4,14}\.txt/,
          'standardOutputFile': /[a-zA-Z]{4,14}\.txt/,
          'standardErrorFile': /[a-zA-Z]{4,14}\.txt/,
          'ompNumThreads|1-100': 1,
          'mklNumThreads|1-100': 1,
          'iMpiFrbrics': /[a-z]{2,6}:[a-z]{2,6}/,
          'iMpiDebug|1-10': 1,
          'scheduleStart': /[0-9]{1,2}-[0-9]{1,2}/,
          'type': /[a-z]{2,8}/,
          'threads|1-20': 1,
          'iters|1-20': 1,
          'fioConfig': 'xml string and can be empty',
          'basePath': /\w{4,8}\/\w{4,8}\/\w{4,8}/,
        }],
      }],
    }],
    'monitorTasks': ['LIdp', 'System Temperature'],
    'testTypes': ['Burn-in 1', 'Burn-in 2', 'Burn-in 3', 'Burn-in 4', 'Burn-in 5',
      'Burn-in 6', 'Burn-in 7', 'Burn-in 8', 'Burn-in 9'],
    'templates': ['Template 1', 'Template 2', 'Template 3', 'Template 4'],
    'stressEngines': ['Inter HPL', 'Badblock', 'LMbench'],
  });
  return JSON.stringify(result);
}
