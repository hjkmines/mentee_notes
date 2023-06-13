function addDashToNumber(number) {
    const numberString = number.toString();
    const firstPart = numberString.slice(0, 3);
    const secondPart = numberString.slice(3);
  
    return `${firstPart}-${secondPart}`;
  }
  
  // Example usage:
  const number = 8246650;
  const formattedNumber = addDashToNumber(number);
  console.log(formattedNumber);
  