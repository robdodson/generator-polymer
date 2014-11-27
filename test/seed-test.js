/*global describe, beforeEach, it*/

var path    = require('path');
var helpers = require('yeoman-generator').test;

describe('yo polymer:seed test', function () {

  it('the generator can be required without throwing', function () {
    // not testing the actual run of generators yet
    this.seed = require('../seed');
  });

  // it('creates expected files', function (done) {
  //   var expected = [
  //     ['x-foo/bower.json', /"name": "x-foo"/, /"main": "x-foo.html"/],
  //     'x-foo/.bowerrc',
  //     'x-foo/.editorconfig',
  //     'x-foo/.gitignore',
  //     'x-foo/.jshintrc',
  //     'x-foo/demo.html',
  //     'x-foo/index.html',
  //     'x-foo/README.md',
  //     'x-foo/x-foo.css',
  //     'x-foo/x-foo.html',
  //     'x-foo/test/index.html',
  //     'x-foo/test/x-foo-basic.html',
  //   ];

  //   helpers.mockPrompt(this.polymer, {
  //     ghUser: 'test-user',
  //     elementName: 'x-foo'
  //   });

  //   this.polymer.run({}, function () {
  //     process.chdir(testDir);
  //     helpers.assertFiles(expected);
  //     done();
  //   });
  // });

});
