const generateRandomValue = (n) => {
  const arr = new Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = Math.ceil(Math.random() * 9);
  }

  return arr;
};

const sumOfDigits = (arr) => {
  const sum = arr.reduce((sum, digit) => sum + digit, 0);
  return sum;
};

export { generateRandomValue, sumOfDigits };
