 /*! toyproblems v0.0.0 - MIT license */
'use strict';

const Range = function(start, end, step) {
  // TODO: Implement me!
  this.start = start;
  this.end = end;
  this.step = step;
  if(this.step === undefined && this.start > this.end){
    this.step = -1;
  }
  if(this.step === undefined && this.start < this.end){
    this.step = 1;
  }
};

Range.prototype.size = function() {
  // TODO: Implement me!
  let start = this.start;
  if(this.end === undefined) {
    return 1;
  }
  let count = 0;
  if(this.step > 0){
    while (start <= this.end){
      start += this.step;
      count++;
    }
  }
  if (this.step < 0) {
    while (start >= this.end){
      start += this.step;
      count++;
    }
  }
  return count;
};

Range.prototype.each = function(callback) {
  // TODO: Implement me!
  let start = this.start;
  callback(this.start);
  if(this.step > 0){
    while (start < this.end){
      
      start += this.step;
      callback(start);
    }
  }
  if (this.step < 0) {
    while (start > this.end){
      start += this.step;
      callback(start);
      
    }
  }
  
};

Range.prototype.includes = function(val) {
  // TODO: Implement me!
  let start = this.start;
  if(this.start === val || this.end === val){
    return true;
  }
  if(this.step > 0){
    while (start < this.end){
      if(start === val){
        return true;
      }
      start += this.step;
    }
  }
  if (this.step < 0) {
    while (start > this.end){
      if(start === val){
        return true;
      }
      start += this.step;
    }
  }
  return false;
};

// var range = new Range(1);
