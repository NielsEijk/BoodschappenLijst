<template>
  <div class="boodschap-item" v-bind:class="{'is-complete':boodschap.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete(boodschap.id)" />
      {{boodschap.title}}
      <button @click="$emit('del-boodschap', boodschap.id)" class="del">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "BoodschapItem",
  methods: {
      markComplete: function(id) {
          this.$store.commit("markComplete", id)
      }
  },
  props: ["boodschap"],
};
</script>

<style scoped>
.boodschap-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.boodschap-item.is-complete {
  background: darkslategray;
}
.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}

.del:hover {
  background: darkred;
}
</style>