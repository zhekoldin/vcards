<template>
    <div class="packege-list">
        <div v-for="renderItem of renderList" :key="renderItem?.id" class="packege-list__item">
            <div class="packege-list__item-content" v-if="renderItem.color === cardColor.transparent">
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { generateUID } from '../utils';
import type { IListSizeData } from '../package';
import { cardColor, type cardData } from '../stores/cards'

import { ref, defineProps } from 'vue';

interface IProps {
    listSizeData: IListSizeData,
    itemList: cardData[]
}

const props = defineProps<IProps>();

const renderList = ref<cardData[]>([])

function getDefaultRenderItem(): cardData {
    return {
        id: generateUID(),
        color: cardColor.transparent,
        count: 0,
        position: -1
    }
}

// утсановим в нужные ячейки все сохраненные элементы
props.itemList.forEach((item, index) => {
    renderList.value[index] = item;
})

// подготовим размерность общего массива
const listSize = props.listSizeData.rowsCount * props.listSizeData.columnsCount;

// пройдемся по общему массиву
for (let i = 0; i < listSize; i++) {
    const renderItem = renderList.value[i];

    // если такого элоемента в масссиве еще нет - добавим заглушку (пустой элемент)
    if (!Boolean(renderItem)) {
        renderList.value[i] = {...getDefaultRenderItem(), position: i}
    }
}

</script>
<style scoped>
.packege-list {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
}
.packege-list__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 105px;
    height: 100px;
}
</style>