<template>
    <div id="path_package_list" class="packege-list">
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
import Sortable from 'sortablejs';

import { ref, defineProps, onMounted } from 'vue';

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

onMounted(() => {

    const flex = document.getElementById('path_package_list');
    new Sortable(flex, {
        animation: 0,
        swap: true,
        swapThreshold: 0.65,
        forceFallback: true, // This is it!
        onChoose: function(e: { target: { classList: { add: (arg0: string) => void; }; }; }) {
            console.log(e.target)
            e.target.classList.add('grabbing');
        },
        onUnchoose: function(e: { target: { classList: { remove: (arg0: string) => void; }; }; }) {
            e.target.classList.remove('grabbing');
        },
        onStart: function(e: { target: { classList: { add: (arg0: string) => void; }; }; }) {
            e.target.classList.add('grabbing');
        },
        onEnd: function(e: { target: { classList: { remove: (arg0: string) => void; }; }; }) {
            e.target.classList.remove('grabbing');
        },
        onMove: function(e: { target: { classList: { add: (arg0: string) => void; }; }; }) {
                e.target.classList.add('grabbing');
            },
        });
});

</script>
<style scoped>
.packege-list {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
}
.packege-list__item {
    display: inline-block;
    justify-content: center;
    align-items: center;
    width: 105px;
    height: 100px;
}
.packege-list__item:active {
    cursor: grabbing!important;
}
.grabbing {
    cursor: grabbing !important;
    border: 1px solid var(--light_gray);
    border-radius: var(--br_24);
}
</style>