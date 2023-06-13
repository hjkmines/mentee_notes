// Write a function called sortedHeights(arrayOfHeights), that takes a array of heights as a argument. 

// I would like you to sort by ascending order of all the non-zero numbers without moving the 0's in place. 

// For example, given the array [8, 2, 0, 0, 3, 10, 0, 4], it should return [2, 3, 0, 0, 4, 8, 0, 10]

function sortedHeights(arrayOfHeights) {
    // Create a new array to store the non-zero heights
    const nonZeroHeights = [];
  
    // Iterate over the input array and extract the non-zero heights
    for (let height of arrayOfHeights) {
      if (height !== 0) {
        nonZeroHeights.push(height);
      }
    }
  
    // Sort the non-zero heights in ascending order
    nonZeroHeights.sort((a, b) => a - b);
  
    // Create a new array to store the sorted heights with 0s in place
    const sortedArray = [];
  
    // Iterate over the input array and place the sorted non-zero heights while keeping the 0s in place
    let nonZeroIndex = 0;
    for (let height of arrayOfHeights) {
      if (height !== 0) {
        sortedArray.push(nonZeroHeights[nonZeroIndex]);
        nonZeroIndex++;
      } else {
        sortedArray.push(0);
      }
    }
  
    return sortedArray;
  }
  
  // Example usage:
  const heights = [8, 2, 0, 0, 3, 10, 0, 4];
  const sortedHeightsArray = sortedHeights(heights);
  console.log(sortedHeightsArray);
  