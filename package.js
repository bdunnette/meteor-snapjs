Package.describe({
  name: 'bdunnette:snapjs',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles('snap.js','client');
  api.addFiles('snap.css','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bdunnette:snapjs');
  api.addFiles('bdunnette:snapjs-tests.js');
});
