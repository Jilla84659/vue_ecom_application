<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-info">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-tem nav-link active">Home</router-link>
        </div>

        <div>
          <div class="dropdown open">
            <button
              class="btn btn-info dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >{{ totalItemsQuantity }} Cart</button>
            <div @click="$event.stopPropagation()">
              <mini-cart />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MiniCart from "./MiniCart";

export default {
  components: { MiniCart },

  computed: {
    
    ...mapGetters("cart", ["cartItemCount","totalItemsQuantity"])
  }
};
</script>

<style>
</style>