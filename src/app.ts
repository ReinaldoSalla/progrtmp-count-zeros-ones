interface Result {
  zeros: number;
  ones: number;
}

const countZerosOnes = (decimal: number): Result => {
  // count zeros and ones from a string
  // const binary = (decimal >>> 0).toString(2);
  // return [
  //   (binary.match(/0/g) || []).length,
  //   (binary.match(/1/g) || []).length
  // ];

  // count zeros and ones from a number
  let binary = Number((decimal >>> 0).toString(2));
  let zeros = 0;
  let ones = 0;
  while (binary > 0) {
    binary /= 10; //1010, 101, 10.1, 1.01, 0.101
    if (binary === Math.floor(binary)) {
      zeros++;
    } else {
      ones++;
    }
    binary = Math.floor(binary);

  }
  return { zeros, ones }; 
};

const result = countZerosOnes(100);

console.log(result);