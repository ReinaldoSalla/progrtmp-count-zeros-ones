const countZerosOnes = (decimal: number): Array<number> => {
  // count zeros and ones from a string
  // const binary = (decimal >>> 0).toString(2);
  // return [
  //   (binary.match(/0/g) || []).length,
  //   (binary.match(/1/g) || []).length
  // ];

  // count zeros and ones from a number
  const binary = Number((decimal >>> 0).toString(2));
  return [];
};

const result = countZerosOnes(10);

console.log(result);