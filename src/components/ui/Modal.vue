<template>
  <Transition name="modal" :duration="1000">
    <div class="modal_wrapper" v-if="open">
      <div class="modal_overlay" @click="$emit('close')">
        <div class="modal_container" @click.stop v-scroll-lock="open">
          <div class="modal_header">
            <h3 class="modal_header__title">{{ title }}</h3>
            <div class="modal_header__close" @click="$emit('close')">
              <img src="/svg/menu-close.svg" alt="modal-close" />
            </div>
          </div>
          <div class="modal_body">
            <slot></slot>
          </div>
          <div class="modal_footer">
            <ui-button type="link" :to="to || '/'" v-if="link" mobileFullWidth>
              {{ link }}
            </ui-button>
            <ui-button @click="$emit('close')" type="button" mobileFullWidth>
              {{ btn }}
            </ui-button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import uiButton from "@/components/ui/Button.vue";

const props = defineProps({
  open: {
    type: Boolean,
  },
  title: {
    type: String,
    required: false,
  },
  btn: {
    type: String,
    default: "OK",
  },
  link: {
    type: String,
    required: false,
  },
  to: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss">
.modal {
  &_overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
    background: rgba(34, 32, 46, 0.8);
    z-index: 120;
  }
  &_container {
    position: relative;
    display: grid;
    grid-template: auto 1fr minmax(56px, auto) / 1fr;
    align-content: space-between;
    width: 80%;
    max-width: 640px;
    padding: 24px 32px;
    margin: 24px;
    background: var(--white);
    z-index: 130;
    @media screen and (max-width: 768px) {
      width: 100%;
      min-width: auto;
      padding: 24px;
    }
  }
  &_header {
    display: grid;
    grid-template-columns: 1fr auto;
    width: 100%;
    &__title {
      text-align: center;
      padding-left: 24px;
      @media screen and (max-width: 768px) {
        text-align: left;
        padding-left: 0;
      }
    }
    &__close {
      cursor: pointer;
    }
  }
  &_body {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--dark-primary);
    margin-bottom: 40px;
    text-align: left;
    align-items: center;
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(194px, 1fr));
    gap: 20px;
    h4 {
      margin-bottom: 6px;
    }
    p:not(:last-of-type) {
      margin-bottom: 6px;
    }
    @media screen and (max-width: 768px) {
      font-size: 14px;
      margin-bottom: 24px;
    }
  }
  &_footer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(194px, 1fr));
    gap: 20px;
  }
}

.modal_container,
.modal_overlay {
  transition: all 0.7s ease;
}

.modal-enter-active .modal_container,
.modal-leave-active .modal_overlay {
  transition-delay: 0.3s;
}

.modal-enter-from .modal_overlay,
.modal-leave-to .modal_overlay {
  opacity: 0;
}

.modal-enter-from .modal_container,
.modal-leave-to .modal_container {
  -webkit-transform: translateY(-30px);
  transform: translateY(-30px);
  opacity: 0;
}
</style>

<!-- Add to child component

<template>
  @click="isModalOpen = true"

  <teleport to="body">
    <modal-content
      :open="isModalOpen"
      @close="isModalOpen = false"
      title="XXX"
      btn="XXX"
      link="XXX"
      to="/XXX"
    >
      some random content
    </modal-content>
  </teleport>
</template>

<script setup>
import ModalContent from "@/components/ui/Modal.vue";
import { ref } from "vue";

const isModalOpen = ref(false);
</script>

-->
