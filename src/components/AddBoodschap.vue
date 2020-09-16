<template>
  <div>
    <form @submit="addBoodschap">
      <input type="text" v-model="title" name="title" placeholder="Add Boodschap..." />
      <!-- <input type="text" v-model="aantal" names="aantal" placeholder="Add aantal..."> -->
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "AddBoodschap",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addBoodschap(e) {
      e.preventDefault();
      const newBoodschap = {
        id: uuidv4(),
        title: this.title,
        completed: false,
      };

      this.$store.commit("addBoodschap", newBoodschap);

      this.title = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input [type="text"] {
  flex: 10;
  padding: 10px;
}

input [type="submit"] {
  flex: 2;
}
</style>