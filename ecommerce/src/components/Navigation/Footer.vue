<template>
  <footer class="bg-pink text-center text-md-start">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 my-4 mb-md-0">
       
          <div class="d-flex flex-column justify-content-center align-items-center mb-5">
            <div class="me-4">
              <img id="imgLogoFooter" src="@/assets/images/logo_rose_b.png" alt="">
            </div>
            <p class="col-9 text-center">
              Rosemay is a storytelling brand offering great fashion at a competitive price, aiming to be kind to the world and empowering the young women in it. Over 120 concept stores offers the experience in 19 markets. Online, Rosemay delivers to 28 markets, and via International shipping to an additional 64 destinations worldwide. Rosemay was founded in 2021.
            </p>
          </div>

          <div class="d-flex justify-content-center">  
            <div class="col-9 d-flex justify-content-evenly mb-5">        
              <router-link to="/" class="text-uppercase pointer LP h5 text-dark">home</router-link>
              <router-link to="/shop" class="text-uppercase pointer LP h5 text-dark">shop</router-link>
              <router-link to="/" class="text-uppercase pointer LP h5 text-dark">about us</router-link>
              <router-link to="/" class="text-uppercase pointer LP h5 text-dark">faq</router-link>
            </div>
          </div>

        </div>

        <div class="d-flex justify-content-center align-items-center mb-3">
          © 2021 Copyright
          <a
            class="btn btn-link btn-floating text-dark m-1 ms-2"
            href="https://github.com/Sharpi3s/JavaScript_2"
            role="button"
            data-mdb-ripple-color="dark"
            ><i class="fab fa-github fa-2x"></i
          ></a>
        </div>

      </div>
      
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
.bg-pink {
  background-color: #c38587aa;
}
#imgLogoFooter {
  height: 5rem;
}
.LP:hover {
  text-decoration: underline;
}
</style>