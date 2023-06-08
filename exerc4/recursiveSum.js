// eslint-disable-next-line no-unused-vars
function recursiveArraySum(arr) {
    // Base case
    if (arr.length === 0) {
      return 0;
    }
    return arr[0] + recursiveArraySum(arr.slice(1));
  }
  