import { nanoid } from "nanoid";

const duplicateCards = (data, cardCount) =>
  [...data?.cards.slice(0, cardCount), ...data?.cards.slice(0, cardCount)].map(
    (card) => ({
      ...card,
      id: nanoid(),
    })
  );

export default duplicateCards;
