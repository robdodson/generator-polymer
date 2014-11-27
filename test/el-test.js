/*global describe, beforeEach, it*/

var path    = require('path');
var helpers = require('yeoman-generator').test;
var assert  = require('yeoman-generator').assert;

describe('yo polymer:el test', function () {

  it('the generator can be required without throwing', function () {
    // not testing the actual run of generators yet
    this.el = require('../el');
  });

  // it('creates expected files', function (done) {
  //   var expected = [
  //     'app/elements/x-foo/x-foo.html',
  //     'app/elements/x-foo/x-foo.css'
  //   ];

  //   helpers.mockPrompt(this.polymer, {
  //     includeCore: true,
  //     includePaper: true,
  //     includeSass: false  // FIXME: figure out why .yo-rc isn't generated
  //   });

  //   helpers.mockPrompt(this.element, {
  //     externalStyle: true,
  //     includeImport: false
  //   });

  //   // Run the polymer:app generator
  //   this.polymer.run({}, function () {
  //     // Then run the polymer:el generator
  //     this.element.run({}, function() {
  //       assert.file(expected);
  //       done();
  //     });
  //   }.bind(this));
  // });

});
