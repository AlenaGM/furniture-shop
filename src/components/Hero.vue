<template>
  <div class="hero">
    <div class="hero-info">
      <div class="hero-info-text">
        <h2 class="hero-info__title">
          Luxury homeware for people who love timeless design quality
        </h2>
        <span class="hero-info__description"
          >Shop the new Spring 2022 collection today</span
        >
      </div>
      <a href="#" class="hero-info-link">View collection</a>
    </div>
  </div>
</template>

<style lang="scss">
.hero {
  background: url("/img/hero.jpg");
  height: 704px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 80px;
  &-info {
    background: #fff;
    max-width: 630px;
    padding: 50px 60px;
    height: 444px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__title {
      font-family: "Clash Display", sans-serif;
      font-size: 32px;
      font-weight: 400;
      line-height: 45px;
      margin: 0 0 20px 0;
    }
    &__description {
      color: #5b5676;
      font-size: 18px;
      font-family: "Satoshi", sans-serif;
      line-height: 27px;
    }
    &-link {
      color: #2a254b;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
