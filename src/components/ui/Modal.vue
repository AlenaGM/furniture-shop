<template>
  <Transition name="modal" :duration="1400">
    <div class="modal-wrapper" v-if="open">
      <div class="modal-overlay" @click="$emit('close')">
        <div class="modal-container" @click.stop v-scroll-lock="open">
          <div class="modal-header">
            <h4 class="modal-header__title">{{ title }}</h4>
            <div class="modal-header__close" @click="$emit('close')">
              <img src="/svg/menu-close.svg" alt="modal-close" />
            </div>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <ui-button type="link" :to="to || '/'" v-if="link">
              {{ link }}
            </ui-button>
            <ui-button @click="$emit('close')" type="button">
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
  &-overlay {
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
  }
  &-overlay {
    background: rgba(34, 32, 46, 0.8);
    z-index: 120;
  }
  &-container {
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
  &-header {
    display: grid;
    grid-template-columns: 1fr auto;
    width: 100%;
    &__title {
      text-align: center;
      padding-left: 24px;
    }
    &__close {
      cursor: pointer;
    }
  }
  &-body {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--dark-primary);
    margin-bottom: 24px;
    text-align: center;
    display: grid;
    justify-items: center;
    @media screen and (max-width: 768px) {
      font-size: 14px;
      margin-bottom: 24px;
    }
    p:not(:last-of-type),
    div:not(:last-of-type) {
      margin-bottom: 6px;
    }
  }
  &-footer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(194px, 1fr));
    gap: 20px;
  }
}

.modal-container,
.modal-overlay {
  transition: all 1s ease;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-overlay {
  transition-delay: 0.4s;
}

.modal-enter-from .modal-overlay,
.modal-leave-to .modal-overlay {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: translateY(-30px);
  transform: translateY(-30px);
  opacity: 0;
}
</style>

<!-- Add to child component

<template>
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
