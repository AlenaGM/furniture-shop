<template>
  <Transition name="modal">
    <div class="modal-overlay" v-if="open" @click="$emit('close')">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          {{ title }}
        </div>
        <div class="modal-body">
          <slot name="modal-body" />
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
    width: 100%;
    height: 100%;
    background: rgba(34, 32, 46, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;
    z-index: 110;
  }
  &-container {
    margin: 24px;
    max-width: 640px;
    width: 80%;
    padding: 24px 32px;
    background: var(--light-gray);
    display: grid;
    grid-template: auto 1fr minmax(56px, auto) / 1fr;
    align-content: space-between;
    z-index: 120;
    transition: all 0.3s ease;
    @media screen and (max-width: 768px) {
      padding: 24px;
      width: 100%;
    }
  }
  &-header {
  }
  &-body {
  }
  &-footer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(194px, 1fr));
    gap: 20px;
  }
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
</style>

<!-- Add to child component

<template>
  <button @click="openModal">Open</button>

  <teleport to="body">
    <modal-content
      :open="isModalOpen"
      @close="closeModal"
    />
  </teleport>
</template>

<script setup>
import ModalContent from "@/components/ui/Modal.vue";
import { ref } from "vue";

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
  document.body.classList.add("_lock");
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.classList.remove("_lock");
};
</script>

-->
