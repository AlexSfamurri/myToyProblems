/* global reconstruct, describe, it, expect, should */

describe('reconstruct()', function () {
  'use strict';

  it('exists', function () {
    expect(reconstruct).to.be.a('function');

  });

  
  it('should return "hi\nthere\n" for changes: [[{"type":"add","line":0,"text":"there\n"}],[{"type":"add","line":0,"text":"hi\n"}]]', function () {
    expect(reconstruct([[{ "type": "add", "line": 0, "text": "there\n" }], [{ "type": "add", "line": 0, "text": "hi\n" }]])).to.equal("hi\nthere\n");
  });
  
  it('should return "fluffy\npillow\ncarnivores\n" for changes: [[{"type":"add","line":0,"text":"pillow\nhogs\n"}],[{"type":"rem","line":1,"count":1}],[{"type":"add","line":0,"text":"fluffy\n"},{"type":"add","line":2,"text":"carnivores\n"}]]', function () {
    const input = [[{ "type": "add", "line": 0, "text": "pillow\nhogs\n" }], [{ "type": "rem", "line": 1, "count": 1 }], [{ "type": "add", "line": 0, "text": "fluffy\n" }, { "type": "add", "line": 2, "text": "carnivores\n" }]];
    expect(reconstruct(input)).to.equal("fluffy\npillow\ncarnivores\n" );
  });

  it('should return "a\nb\nc\n" for changes: [[{"type":"add","line":0,"text":"a\nX\nc\n"}],[{"type":"rem","line":1,"count":1},{"type":"add","line":1,"text":"b\n"}]]', function(){

    expect(reconstruct([[{ "type": "add", "line": 0, "text": "a\nX\nc\n" }], [{ "type": "rem", "line": 1, "count": 1 }, { "type": "add", "line": 1, "text": "b\n" }]])).to.equal('a\nb\nc\n');
  })
  // Add more assertions here
});
