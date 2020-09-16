<template>
  <div>
    <draggable v-model="unchecked" group="people" @start="drag=true" @end="drag=false">
      <div v-for="boodschap in unchecked" :key="boodschap.id">
        <BoodschapItem
          v-bind:boodschap="boodschap"
          v-on:del-boodschap="$emit('del-boodschap',
        boodschap.id)"
        />
      </div>
    </draggable>
    <div v-for="boodschap in checked" :key="boodschap.id">
      <BoodschapItem
        v-bind:boodschap="boodschap"
        v-on:del-boodschap="$emit('del-boodschap',
        boodschap.id)"
      />
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import BoodschapItem from "./BoodschapItem.vue";

export default {
  name: "Boodschappen",
  components: {
    draggable,
    BoodschapItem,
  },
  props: ["boodschappen"],
  computed: {
    unchecked: {
      get() {
        return this.$store.state.boodschappen.filter((boodschap) => !boodschap.completed);
      },
      set(value) {
          this.$store.commit("updateList", value)
      }
    },
    checked: {
      get() {
        return this.$store.state.boodschappen.filter((boodschap) => boodschap.completed);
      },
    },
  },
  methods: {
    add: function () {
      this.BoodschapItem.push({ name: "Boodschappen" });
    },
    replace: function () {
      this.BoodschapItem = [{ name: "Boodschappen" }];
    },
  },
};
</script>

<style scoped>
</style>