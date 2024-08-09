<template>
    <div class="packege-net">
        <div v-for="(row, index) in rowList" :key="index" class="packege-net__row" >
            <div v-for="item of row" :key="item.id" class="packege-net__item" ></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, defineProps } from 'vue';

import { type IListSizeData } from '@/package';

interface IPlaceItem {
    id: string
}

const props = defineProps<{listSizeData: IListSizeData}>()

const rowList = ref<IPlaceItem[][]>([])

for (let rowIndex = 0; rowIndex < props.listSizeData.rowsCount; rowIndex++) {
    const itemList = ref<IPlaceItem[]>([]);

    for (let i = 0; i < props.listSizeData.columnsCount; i++) {
        itemList.value.push({
            id: '' + rowIndex + i,
        });
    }

    rowList.value.push(itemList.value)
}

</script>
<style scoped>
.packege-net {
    display: flex;
    flex-direction: column;
}
.packege-net__row {
    display: flex;
}
.packege-net__row:not(:last-child) {
    border-bottom: 1px solid var(--light_gray);
}
.packege-net__item {
    flex-basis: 20%;
    width: 105px;
    height: 100px;
}
.packege-net__item:not(:last-child) {
    border-right: 1px solid var(--light_gray);
}
</style>
