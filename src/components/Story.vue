<template>
  <div class="story">
    <h1 class="story_title">
      A brand built on the love of craftmanship, quality and outstanding
      customer service
    </h1>
    <InfoBlock
      title="From a studio in London to a global brand with over 400 outlets"
      description="When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community."
      link="/products"
      colorLink="dark-primary"
      btnText="View collection"
      background="var(--light-gray)"
      colorTitle="var(--dark-primary)"
      colorDescription="var(--dark-primary)"
      :mobilePadding="true"
    />
    <div>
      <img src="/img/story-studio.webp" alt="room" class="story_image" />
    </div>
    <div>
      <img src="/img/story-service.webp" alt="room" class="story_image" />
    </div>
    <InfoBlock
      title="Our service isn’t just personal, it’s actually hyper personally exquisite"
      description="At Avion, we believe in providing a level of personalized service that goes above and beyond. Our team is dedicated to creating an exquisite shopping experience tailored specifically to your needs and preferences. From helping you select the perfect piece of furniture to ensuring it fits perfectly in your space, we are committed to making your shopping experience truly exceptional."
      link="/contact"
      colorLink="dark-primary"
      btnText="Get in touch"
      background="var(--light-gray)"
      colorTitle="var(--dark-primary)"
      colorDescription="var(--dark-primary)"
      :mobilePadding="true"
    />
  </div>
</template>

<script setup>
import InfoBlock from "@/components/blocks/InfoBlock.vue";
</script>

<style lang="scss" scoped>
.story {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr 1fr;
  column-gap: 0px;
  justify-items: center;
  margin-bottom: 80px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    margin-bottom: 40px;
  }
  &_title {
    grid-column: span 2;
    padding: 80px 0;
    margin: 0;
    text-align: center;
    color: var(--dark-primary);
    font-family: var(--second-family);
    max-width: 704px;
    @media screen and (max-width: 768px) {
      grid-column: span 1;
      text-align: left;
      padding: 48px 0 36px;
    }
  }
  &_image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

.infoblock {
  max-width: none;
}
</style>
