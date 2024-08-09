<template>
    <div class="package">
        <package-net :listSizeData="listSizeData" />
        <package-list :listSizeData="listSizeData" :itemList="cardsStore.cards" />
    </div>
    
    <package-modal />
</template>
<script setup lang="ts">
import { ref } from 'vue';

import PackageModal from './PackageModal.vue';
import PackageNet from './PackageNet.vue';
import PackageList from './PackageList.vue';

import { type IListSizeData } from '../package';
import { useCardsStore } from '../stores/cards';

const placeSize = 25;
const itemCountInRow = 5
const rowsCount = placeSize / itemCountInRow;

const listSizeData = ref<IListSizeData>({
    rowsCount,
    columnsCount: itemCountInRow
});

const cardsStore = useCardsStore();

</script>
<style scoped>
.package {
position: relative;
display: flex;
border-radius: var(--br_12);
border: 1px solid var(--light_gray);
flex-wrap: wrap;
}

</style>