Package.describe({
  name: 'olivers:lodash',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'lodash - A JavaScript utility library delivering consistency, modularity, performance, & extras.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({ 'lodash': '3.1.0'});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles(['lodash.js', 'client.js'], 'client');
  api.addFiles('server.js', 'server');
  if (api.export) {
  	api.export('lodash');
  	api.export('_');
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('olivers:lodash');
  api.addFiles('lodash-tests.js');
});
