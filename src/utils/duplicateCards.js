const duplicateCards = (data, cardCount) => {
  return [
    ...data?.cards.slice(0, cardCount),
    ...data?.cards.slice(0, cardCount),
  ].map((card) => ({
    ...card,
    id: Math.random(),
  }));
};

export default duplicateCards;
