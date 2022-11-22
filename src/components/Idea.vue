<template>
  <div class="idea">
    <HeroInfo
      title="It started with a small idea"
      description="A global brand with local beginnings, our story begain in a small studio in South London in early 2014"
      link="#"
      background="var(--dark-primary)"
      colorTitle="var(--white)"
      colorDescription="var(--white)"
      :mobilePadding="true"
    />
    <img src="/img/idea-room.jpg" alt="room" class="idea-image" />
  </div>
</template>

<script setup>
import HeroInfo from "@/components/HeroInfo.vue";
</script>

<style lang="scss" scoped>
.idea {
  padding: 0 80px;
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
  &-image {
    object-fit: cover;
    height: 100%;
    @media screen and (max-width: 767px) {
      margin-top: 24px;
      height: auto;
    }
  }
}
</style>
