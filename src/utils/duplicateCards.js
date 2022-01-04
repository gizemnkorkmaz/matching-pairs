const duplicateCards = (data, cardNumber) => {
  return [
    ...data?.cards.slice(0, cardNumber),
    ...data?.cards.slice(0, cardNumber),
  ].map((card) => ({
    ...card,
    id: Math.random(),
  }));
};

export default duplicateCards;
