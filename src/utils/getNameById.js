const getNameById = (array, id) => array.find((item) => item.id === id)?.name;

export default getNameById;
