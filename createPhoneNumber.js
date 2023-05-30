function createPhoneNumber(numbers){
    const phoneNumber = numbers.join('');
    const formattedPhoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    return formattedPhoneNumber;
  }