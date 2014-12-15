Package.describe({
  name: 'bdunnette:snapjs',
  summary: 'Snap.js smart package',
  version: '1.0.0',
  git: 'https://github.com/bdunnette/meteor-snapjs'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.1');
  api.addFiles('snap.js', 'client');
  api.addFiles('snap.css', 'client');
});