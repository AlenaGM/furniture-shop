<template>
  <div class="idea">
    <InfoBlock
      title="It started with a small idea"
      description="A global brand with local beginnings, our story begain in a small studio in South London in early 2014"
      link="/about"
      btnText="Our story"
      background="var(--dark-primary)"
      colorLink="secondary"
      colorTitle="var(--white)"
      colorDescription="var(--white)"
      :mobilePadding="true"
    />
    <img src="/img/idea-room.jpg" alt="room" class="idea-image" />
  </div>
</template>

<script setup>
import InfoBlock from "@/components/InfoBlock.vue";
</script>

<style lang="scss" scoped>
.idea {
  margin: var(--section-gap);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    margin: var(--section-gap-mobile);
  }
  &-image {
    object-fit: cover;
    height: 100%;
    @media screen and (max-width: 768px) {
      margin-top: 24px;
      height: auto;
      width: 100%;
    }
  }
}
</style>
