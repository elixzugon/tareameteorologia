app.component('profile',{
    props:{
        nombre:{
            type: String
        },
        usuario:{
            type: String,
            default: "default category"
        },
        posts:{
            type: String,
            default: "default name"
        },
        biografia:{
            type: String,
            default: "default level"
        },
        likes:{
            type: Number,
            default: 1
        },
        imagen:{
            type: String,
            default: ""
        },
    },
    data(){
        return{
            counter: 0
        }
    },
    template:
    /*html*/ 
    `
    
<section class="text-center h-100 gradient-custom-2">
<div class="py-5 h-100">
  <div class="justify-content-center align-items-center h-100">
    <div class="ps-5 text-white d-flex flex-row" style="background-color: rgb(213 70 48);
        height: 200px;">
        
        
          <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
          
          <div class="btn-group dropend">
          <button type="button" class="btn-search dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Opciones
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="C:/laragon/www/proyectorecetas/dist/passwordrecovery.html">Cambio de contraseña</a></li>
            <li><a class="dropdown-item" href="C:/laragon/www/proyectorecetas/dist/login.html">Cerrar sesión</a></li>
          </ul>
        </div>
          
            <img alt="Imagen" class="img-fluid img-thumbnail mt-4 mb-2"
            style="width: 150px; z-index: 1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" v-bind:src="imagen">
              

          </div>
          <div class="ms-3" style="margin-top: 130px;">
            <h5>{{nombre}}</h5>
            <p>{{usuario}}</p>
          </div>
          
        </div>
        <div class="p-4 " style="background-color: #f8f9fa;">
          <div class="d-flex justify-content-end text-center py-1">
            <div>
              <p class="mb-1  profile-data">{{posts}}</p>
              <p class="mb-0 profile-data-title">Publicaciones</p>
            </div>
            <div class="px-3">
              <p class="mb-1  profile-data">{{likes}}</p>
              <p class="mb-0 profile-data-title">Likes</p>
            </div>
            

          </div>
        </div>
        <div class="card-body p-4 text-black">
          <div class="mb-5">
            <p class="profile-data-title mb-1">Biografia</p>
            <div class="p-4" style="background-color: #f8f9fa;">
              <p class="font-italic mb-1">{{biografia}}</p>
            </div>
          </div>
          <div class="justify-content-between align-items-center mb-4">
            <p class="profile-data-title mb-0 text-center">Recetas guardadas</p>
          </div>
          <div class="container ps-5 pe-5 row text-center">

          </div>
       
    </div>
  </div>
</div>
</section>

     `
})


