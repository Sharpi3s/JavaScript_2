<template>
<div >
  


  <div class="" >
    <div class="hBody  shadow-2">
      <div class="hChild d-flex flex-column justify-content-center align-items-center">
        <img class="mb-5 me-5" src="@/assets/images/logo_rose_large.png" alt="">
        <!-- <div class="btn-group"> -->
          <router-link to="/newin" class="btn btn-pink" >NEW IN STORE</router-link>
          <!-- <button class="btn btn-light px-4">SHOP NOW</button> -->
        <!-- </div> -->
      </div>
    </div>
     <!-- <hr > -->
    
  </div>
  <div class="mt-5 container">
    <div class="mb-5 text-center">
      <h1 v-if="loggedIn">Welcome {{ oneUser.firstName }}!</h1>
      <h1 v-else>Welcome</h1>
    </div>

    <p class="h4 text-center">Ready for spring?</p>




    
    <div id="carouselExampleIndicators" class="carousel slide my-5 carousel-dark" data-mdb-ride="carousel">
      <div class="carousel-indicators ">
        <button
          type="button"
          data-mdb-target="#carouselDarkVariant"
          data-mdb-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselDarkVariant"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselDarkVariant"
          data-mdb-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">




          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 item" >
            <div class="col" v-for="dress in dresses.slice(0, 4)" :key="dress._id" :dress="dress">
              <div class="card">
                
                <router-link :to="'/product/details/' + dress._id" class="bg-image hover-zoom">
                  <img class="card-img-top" :src="(dress.img)" alt="Card image cap">
                </router-link>
                <div class="card-body d-flex justify-content-between align-items-center">
                  <strong class="card-title">{{ dress.title }}</strong>
                  <!-- <p class="card-text">{{ product.description }}</p> -->
                  
                  <!-- <router-link :to="'/product/details/' + product._id" class="btn btn-dark">more ></router-link> -->
                </div>
                <div class="card-footer d-flex justify-content-between">
                  <p>Dresses</p>
                  <h5><strong>${{ dress.price }}</strong></h5>
                </div>
              </div>
            </div>
          </div>



          
        </div>
        <div class="carousel-item">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 item" >
            <div class="col" v-for="bottom in bottoms.slice(0, 4)" :key="bottom._id" :bottom="bottom">
              <div class="card">
                
                <router-link :to="'/product/details/' + bottom._id" class="bg-image hover-zoom">
                  <img class="card-img-top" :src="(bottom.img)" alt="Card image cap">
                </router-link>
                <div class="card-body d-flex justify-content-between align-items-center">
                  <strong class="card-title">{{ bottom.title }}</strong>
                  <!-- <p class="card-text">{{ product.description }}</p> -->
                  
                  <!-- <router-link :to="'/product/details/' + product._id" class="btn btn-dark">more ></router-link> -->
                </div>
                <div class="card-footer d-flex justify-content-between">
                  <p>Bottom</p>
                  <h5><strong>${{ bottom.price }}</strong></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 item" >
            <div class="col" v-for="top in tops.slice(0, 4)" :key="top._id" :top="top">
              <div class="card">
                
                <router-link :to="'/product/details/' + top._id" class="bg-image hover-zoom">
                  <img class="card-img-top" :src="(top.img)" alt="Card image cap">
                </router-link>
                <div class="card-body d-flex justify-content-between align-items-center">
                  <strong class="card-title">{{ top.title }}</strong>
                  <!-- <p class="card-text">{{ product.description }}</p> -->
                  
                  <!-- <router-link :to="'/product/details/' + product._id" class="btn btn-dark">more ></router-link> -->
                </div>
                <div class="card-footer d-flex justify-content-between">
                  <p>Tops</p>
                  <h5><strong>${{ top.price }}</strong></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev text-dark"
        type="button"
        data-mdb-target="#carouselExampleIndicators"
        data-mdb-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next text-dark"
        type="button"
        data-mdb-target="#carouselExampleIndicators"
        data-mdb-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="space">

    </div>

  </div>
  

  

  



</div>
</template>

<script>

// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'
// import DressesCard from '../components/Products/DressesCard.vue'

export default {
  name: 'Home',
  components: {
    // DressesCard
  },
  methods: {
    ...mapActions(['sortDresses', 'sortBottoms', 'sortTops']),

  },
  computed: {
    ...mapGetters(['oneUser', 'loggedIn', 'dresses', 'bottoms', 'tops'])
  },
  mounted() {
    this.sortDresses('dresses')
    this.sortBottoms('bottoms')
    this.sortTops('tops')

  }
}
</script>
<style>
.hBody {
  /* background-color: #ae8484; */
  background-image: url('../assets/images/header_p.png');
  background-size: cover;
  background-repeat: no-repeat;
  height: 70vh;
  background-position-x: right;
  position: relative;
}
.hChild {
  position: absolute;
  left: 20vw;
  top: 18vh;
}
.hChild img {
  height: 7rem;
}
.btn-pink {
  background-color: #c38587f3;
  color: #fff;
}
.btn-pink:hover {
  background-color: #fff;
}
hr {
  margin: 0;
}

.item {
  width: 80%;
  margin: auto;
}
.carousel-indicators {
  bottom:-70px;
}
.space {
  height: 10rem;
}


</style>