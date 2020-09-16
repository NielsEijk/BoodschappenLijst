<template>
  <div id="app">
    <Header />
    <AddBoodschap v-on:add-boodschap="addBoodschap" />
   <Boodschappen v-bind:boodschappen="boodschappen" v-on:del-boodschap="deleteBoodschap" />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Boodschappen from './components/Boodschappen';
import AddBoodschap from './components/AddBoodschap';


export default {
  name: 'App',
  components: {
   Header,
   Boodschappen,
   AddBoodschap,
  },
  data (){
    return{
      boodschappen: []
    }
  },
  methods: {
    deleteBoodschap(id){
      this.boodschappen = this.boodschappen.filter(boodschap => boodschap.id !== id);
    },
    addBoodschap(newBoodschap){
      this.boodschappen = [...this.boodschappen, newBoodschap];
    },
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: chartreuse;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
</style>
