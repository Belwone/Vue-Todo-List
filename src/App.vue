<script>
export default {

data() {
  return{
    todoList: [
      {name: 'example'},
    ],
    message: '',
  }
},

methods: {
  clearInput(){
  
  },
  //nullTodo(message, todoList){
  //  if (todoList == null){
  //    message = "Список дел пуст!"
  //    console.log(message)
  //  }else{
  //    message = '';
  //  }
  //
  //},
  delTodo: function(index) {
		this.todoList.splice(index, 1);
	},
  formSubmit: function(event) {
    var newTodo
    newTodo = document.getElementById("todoinput").value
    console.log(newTodo)
    this.todoList.push({name: newTodo},)
    console.log(this.todoList)
    this.name = this.email = '';
    event.target.reset();

    },
  newTodo(){
    newId = this.todoList.length++
  },
  
}
}
</script>
<template>
  <div class="maintext">
 <h1>To-do List</h1>
 <h3>Tasks for today</h3>
  </div>
  <form class="addTodo" @submit.prevent="formSubmit">
    <input v-model="name" @click="clearInput" id="todoinput" type="text"  placeholder=" write...">
    <button class="btnAdd" @click="addTodo">Add</button>
  </form>
  <div style="margin-top: 40px;">
  <div class="showTodo" v-for="todos in todoList">
  {{ todos.name }}<button class="toButtons" id="inputTodo" @click="delTodo(index), nullTodo">Delete</button>
  </div>
  </div>


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  background-color: #0e0e0e;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
h1{
  margin-top: 90px;
  color: rgb(255, 255, 255);
}
h3{
  margin-top: 10px;
  color: rgb(255, 255, 255);
}
.addTodo{
  margin-top: 50px;
  float: left;
  margin-left: 38%;
  margin-bottom: 30px;
}
.maintext{
  float: left;
  margin-left: 43%;
}
input{
  border: 2px solid #818181;
  border-radius: 20px;
  height: 30px;
  width: 300px;
  color: white;
  font-size: 16px ;
  background-color: #1f2937;
}
.btnAdd{
  font-size: 18px;
  font-weight: 300;
  border: 0;
  color: #8c5bf4;
  margin-left: 20px;
  

}
.btnAdd:hover{
  cursor: pointer;
}
.showTodo{
  margin-top: 20px;
  border: 0;
  border-radius: 20px;
  width: 750px;
  height: 60px;
  background-color: #111827;
  color: white;
  font-size: 20px;
  float: left;
  padding: 0;
  margin-left: 28%;

}
.toButtons{
  float: right;
  height: 30px;
  width: 70px;
  font-size: 15px;
  margin-left: 0;
  padding-left: 0;
  color: rgb(221, 221, 221);
  width: 70px ;
  float: right;
  border: 0.5px solid #313030;
  border-radius: 20px;
  color: white;
  font-size: 16px ;
  margin-right: 5px;
  cursor: pointer;
}
#checkTodo{
  float: left;
  margin-top: 10px;
  margin-right: 0;
  margin-left: 0;
  padding-left: 0;
}
body{
  display: grid;
}
.showTodo {
  padding-top: 20px;
}
</style>
