<script setup lang="ts">
import Package from './components/Package.vue';
import Profile from './components/Profile.vue';
import Skeleton from 'primevue/skeleton';
import IconCross from './components/icons/IconCross.vue';

</script>

<template>
  <div class="main">
    <Profile class="main__profile" />
    <Package />
  </div>
  <div class="footer">
    <Skeleton height="36px" class="footer__skeleton" />
    <icon-cross />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  margin-bottom: 20px;
}
.main__profile {
  margin-right: 24px;
}
.footer{
  display: flex;
  border: solid var(--light_gray) 1px;
  border-radius: var(--br_12);
  padding: 18px;
}
.footer__skeleton {
  margin-right: 36px;
}
</style>
