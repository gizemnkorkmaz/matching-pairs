// https://flaviocopes.com/how-to-shuffle-array-javascript/

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

export default shuffleArray;
