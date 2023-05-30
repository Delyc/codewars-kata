function reverseVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  const strArr = str.split('');

  let left = 0;
  let right = strArr.length - 1;

  while (left < right) {
    if (vowels.includes(strArr[left].toLowerCase()) && vowels.includes(strArr[right].toLowerCase())) {
  
      const temp = strArr[left];
      strArr[left] = strArr[right];
      strArr[right] = temp;
      left++;
      right--;
    } else if (!vowels.includes(strArr[left].toLowerCase())) {
      left++;
    } else {
      right--;
    }
  }

  return strArr.join('');
  
}