<template>
    <div class="profile">
        <div class="profile__avatar" >
        </div>
        <Skeleton  width="190px" height="26px" class="profile__name" />
        <Skeleton  width="155px" height="10px" class="profile__text" />
        <Skeleton  width="190px" height="10px" class="profile__text" />
        <Skeleton  width="170px" height="10px" class="profile__text" />
        <Skeleton  width="160px" height="10px" class="profile__text" />
        <Skeleton  width="140px" height="10px" class="profile__text" />
        <Skeleton  width="80px" height="10px" class="profile__text" />
    </div>
</template>

<script setup lang="ts">

import Skeleton from 'primevue/skeleton';

</script>
<style scoped>
.profile {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 18px 14px;
    border: solid var(--light_gray) 1px;
    border-radius: var(--br_12);
}
.profile__name {
    margin-bottom: 24px;
}
.profile__text {
    margin-bottom: 16px;
}
.profile__avatar {
    position: relative;
    width: 208px;
    height: 240px;
    border-radius: var(--br_8);
    margin-bottom: 20px;
}
.profile__avatar::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url("src/images/nicebg1.png") no-repeat;
    background-position: center;
    background-size: cover;
    filter: blur(10px);
}

</style>