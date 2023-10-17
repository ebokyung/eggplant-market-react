export const handleDimension = array => {
  const oneDimensionArray = array.reduce((result, current) => {
    return result.concat(current);
  }, []);

  return oneDimensionArray;
};
