//https://stackoverflow.com/a/21689286

const getNameById = (array, id) => {
  return array.find((item) => item.id === id)?.name;
};

export default getNameById;
