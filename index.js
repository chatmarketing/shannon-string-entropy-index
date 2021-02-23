module.exports = function stringEntropyIndex(stringArgument) {
  if (stringArgument.length < 3) return "N/A";
  const stringToArray = Array.from(stringArgument);
  const charSum = stringArgument.length;

  let counts = {};
  stringToArray.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  return Math.abs(
    Object.values(counts)
      .map((n) => Math.log2(n / charSum) * (n / charSum))
      .reduce((a, b) => a + b)
  );
};
