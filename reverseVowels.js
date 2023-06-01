function reverseVowels(str) {
  
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const strArr = str.split('');

  let left = 0;
  let right = strArr.length - 1;

  while (left < right) {
    const isLeftVowel = vowels.has(strArr[left].toLowerCase());
    const isRightVowel = vowels.has(strArr[right].toLowerCase());

    const shouldSwap = isLeftVowel && isRightVowel;

    if (shouldSwap) {
      [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    }

    left += Number(!isLeftVowel) || Number(shouldSwap);
    right -= Number(!isRightVowel) || Number(shouldSwap);
  }

  return strArr.join('');
}
