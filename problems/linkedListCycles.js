
/*! hasCycle v0.0.0 - MIT license */
'use strict';

const hasCycle = function (linkedList) {
  // TODO: implement me!
  let isCycle = false;
  const listValues = {};

  // const diver = (node) =>{
  //   if(listValues[node.value] !== undefined){
  //     isCycle = true;
  //     return;
  //   }
  //   if(node.next === null) {
  //     return;
  //   }
  //   listValues[node.value] = true;
  //   diver(node.next);
  // }
  // diver(linkedList);
  let node = linkedList;
  while(node !== null){
    if(listValues[node.value]){
      isCycle = true;
      return isCycle;
    }
    listValues[node.value] = true;
    node = node.next;
  }
  return isCycle;
};
