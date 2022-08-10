<template>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="hello">
    <div class="container mt-4 text-center">
        <div class="row justify-content-center">
          <div class="col">
            <h1>Registrar</h1>
            <br>
            <form>              
                <div class="mb-3 row">
                  <input type="text" class="form-control" id="exampleInputEmail1"  v-model="name" placeholder="Nombre" required>
                </div>

                <div class="mb-3 row">
                  <input type="text" class="form-control" id="exampleInputPassword1" v-model="job" placeholder="Trabajo" required>
                </div>
              
                <button type="submit" class="btn btn-danger" name="sumit" id="id_sumit" >Registrar</button>
              </form>
          </div>
        </div>
      </div>
      <!-- <h1 class="tittle">JUAN PABLO CERON FERNANDEZ</h1>
      <br><br>
      {{numero1}}
      <br><br>
      <h2>Array</h2>
      {{array}}
      <br><br>
      <li>el resultado de la suma es </li> {{undifined}}
      <br><br>
      <button @click="sumaFun(numero1 , numero2)">resultado</button>
      <br><br>
      <h2>sumaaa</h2>
      <br>
      <li>primer numero</li>
      <input type="number" placeholder=" ingresa el primer numero" autocomplete="off" v-model = "numero1" v-on:keyup="sumaFun(numero1 ,numero2)" />
      <br><br>
      <li>segundo numero</li>
        <input type="number" placeholder=" ingresa el segundo numero" autocomplete="off" v-model = "numero2" v-on:keyup="sumaFun(numero1 ,numero2)"/>
      <br><br>
      <button type="button">Suma Crack</button>
      <h2>resultado</h2>
      <h4>{{undifined}}</h4>

      
        <div v-for="(array,index ) in titanes" :key= "index">
          <h1>{{array.name}}</h1>
          <img v-bind:src="array.img" >
        </div> -->
      
    </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src


import Axios  from "axios";

export default class HomeView extends Vue {


   crearUser(){

    Axios.post("https://reqres.in/api/users",{
        "name" :this.name,
        "job" : this.job
    }).then(respuesta => {
      // respuesta.status = 203
      if(respuesta.status == 201) {
        alert("Se registro correctamente")
        console.log(respuesta.data);
      }else{
        alert("Hubo un error, status: " + respuesta.status);
        
      }
    })
  }

obtenerUsers(){

  Axios.get("https://reqres.in/api/users")
       .then(respuesta => {
        console.log(respuesta.data);
       })
  }

  name = ''
  job  = ''



}
</script>
