<template>
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
import Axios  from "axios";

@Options({
  props: {
    msg: String
  }
})

export default class HelloWorld extends Vue {
  // msg!: string

  // numero1 : any 
  // numero2 :any
  // cadenaText  = "juan es ta buenisimo"
  // array : string [] =["juan","juan2"]
  // undifined : number = 0 
  // titanes = []
  // errors = true
  // loading = true
 
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




  // sumaFun (number1 :number , number2: number){
  //   this.undifined = number1 + number2
    
  // }

  // consumirTitanes()
  // {
  //   Axios.get("https://my-json-server.typicode.com/Joanutsu/SNK-JSON/SNK")
  //       .then((respuesta)=>{
  //       this.titanes = respuesta.data
  //       console.log(this.titanes);
  //   })

  // }

  mounted()
  {
    // this.crearUser()
    // this.obtenerUsers();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
