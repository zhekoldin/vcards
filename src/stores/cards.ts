import { ref } from 'vue'
import { defineStore } from 'pinia'

import { generateUID } from '@/utils';

export enum cardColor {
  green,
  yellow,
  purple,
  transparent
}

export interface cardData {
  id: string,
  color: cardColor,
  count: number,
  position: number
}


const LS_CARDS_KEY = 'LS_CARDS_KEY';

function getCardId() {
  return 'path_card_' + generateUID();
}

const defaultCardList: cardData[] = [
  {
    id: getCardId(),
    color: cardColor.green,
    count: 4,
    position: 1
  },
  {
    id: getCardId(),
    color: cardColor.yellow,
    count: 2,
    position: 2
  },
  {
    id: getCardId(),
    color: cardColor.purple,
    count: 5,
    position: 3
  },
]

export const useCardsStore = defineStore('cards', () => {

  function init(): cardData[] {
    const LSData = localStorage.getItem(LS_CARDS_KEY);

    return LSData !== null 
      ? JSON.parse(LSData)
      : defaultCardList;
  }

  const cards = ref<cardData[]>(init());

  function setCards(cardList: cardData[]) {
    cards.value = cardList;
    localStorage.setItem(LS_CARDS_KEY, JSON.stringify(cards.value))
  }

  function setCardPosition(id: string, position: number) {
    // todo тут пересчитать позицию всех элементов, возможно использовать drop переменные из либы, для упрощения подсчета

    setCards(cards.value);
  }

  function getCard(id: string): cardData | undefined {
    const item = cards.value.find(item => item.id === id)
    return Object.assign({}, item)
  }

  return { cards }
})
