//https://stackoverflow.com/a/21689286

const getNamesByIds = (array, id) => {
  return array.find((item) => item.id === id).name;
};

export default getNamesByIds;
