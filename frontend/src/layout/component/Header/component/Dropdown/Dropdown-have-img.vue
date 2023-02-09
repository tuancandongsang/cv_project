<template>
  <div id="components-dropdown-demo-placement">
    <a-dropdown placement="bottomLeft">
      <span>{{ content }}</span>
      <template #overlay>
        <div class="dropdown-container">
          <div class="dropdown-container-left">
            <a-menu>
              <a-menu-item
                class="item-dropdown"
                v-for="item in dataNavbarHeader"
                v-bind:key="item.tittle"
              >
                <div class="link-dropdown">
                  <router-link :to="{ path: item.link }">{{
                    item.tittle
                  }}</router-link>
                </div>
              </a-menu-item>
            </a-menu>
          </div>
          <div class="dropdown-container-right">
            <img :src="img" alt="" />
          </div>
        </div>
      </template>
    </a-dropdown>
  </div>
</template>
<script>
import './dropdown.scss';
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
    dataNavbarHeader: {
      type: String,
    },
    img: {
      type: String,
    },
  },
};
</script>