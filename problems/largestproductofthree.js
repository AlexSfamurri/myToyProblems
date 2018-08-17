const largestProductOfThree = function(array) {
    // Your code here
    let biggest, bigger, big;
    let biggestCount, biggerCount;

    biggest = array.reduce((largest, current)=>{
        if(Math.abs(largest) < Math.abs(current)){
            largest = current;
        }
        return largest;
    }, 0);
    biggestCount = array.filter(isAlsoBiggest =>  isAlsoBiggest === biggest).length;
    bigger = array.reduce((larger, current)=>{
      if(Math.abs(larger) < Math.abs(current) && Math.abs(current) < Math.abs(biggest)){
          larger = current;
      }
      return larger;
    },0);
    biggerCount = array.filter(isAlsoBigger => isAlsoBigger === bigger).length;
    big = array.reduce((large, current)=>{
      if(Math.abs(large) < Math.abs(current) && Math.abs(current) < Math.abs(bigger)){
          large = current;
      }
      return large;
    },0);
    if(bigger < 0 && biggest > 0){
        const nextBig = array.reduce((nextLarge, current)=>{
            if(Math.abs(nextLarge) < Math.abs(current) && Math.abs(current) < Math.abs(big)){
                nextLarge = current;
            }
            return nextLarge;
        },0);
        return biggest * bigger * nextBig;
    }
    if(biggestCount >= 3){
        return biggest * biggest * biggest;
    }
    if(biggestCount === 2){
        return biggest * biggest * bigger;
    }
    if(biggerCount >= 2){
        return biggest * bigger * bigger;
    }
    return big * bigger * biggest;
  };