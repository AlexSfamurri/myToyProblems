 /*! toyproblems v0.0.0 - MIT license */
'use strict';
/* eslint-disable no-extend-native */
const mixEvents = function(obj) {
  // TODO: Your code here
  obj.events = {};
  obj.trigger = function(...event) {
    // TODO: Your code here
      if(obj.events[event[0]] === undefined) {
        return;
      }
      obj.events[event[0]].forEach((callback, index) => {
        callback(...event.slice(1));
      });
  };
  // Register a callback to be fired on this event.
  obj.on = function(event, callback) {
    // TODO: Your code here
    // TODO: Your code here
    console.log(callback);
    
    if(obj.events[event] === undefined){
      obj.events[event] = [];
    }
    obj.events[event].push(callback);

  };
  return obj;
};


