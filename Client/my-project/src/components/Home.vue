<template>
  <div class="wrap-banner">
      <div class="main-title">
        <div>
          <h4>
            Hello! I'm Manish Biyani.<br>
            I am a Full-stack developer.
          </h4>
        </div>
        <div>
        <a class="gh-button" href="./#/about">View my Work</a>
        </div>
      </div>
      <vue-particles
        color="#fefefe"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push">
      </vue-particles>
      
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap-banner {
    background-image: url("./../assets/background.jpg");
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
  }
.main-title {
  color: #fff;
  z-index: 999;
  justify-content: center;
  position: relative;
  top:40%;
}
h4 {
    font-size: 3rem;
    font-family: 'Teko', sans-serif;
    text-shadow: 8px 8px #000000;
    margin: 0;
    @media (max-width: 767px) {
      font-size: 3rem;
    }
}

.gh-button {
  display: inline-block;
}
.gh-button {
  box-sizing: border-box;
  height: 40px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  text-shadow: 0 1px 0 #fff;
  white-space: nowrap;
  cursor: pointer;
  overflow: hidden;
  padding: 3px 10px 3px 8px;
  font-size: 20px;
  line-height: 16px;
  border-radius: 4px;
  background-color: #eee;
  background-image: linear-gradient(#fcfcfc, #eee);
  border: 1px solid #d5d5d5;
}
.gh-button:hover,
.gh-button:focus {
  text-decoration: none;
  background-color: #ddd;
  background-image: linear-gradient(#eee, #ddd);
  border-color: #ccc;
  color: black;
}
.gh-button:active {
  background: #dcdcdc;
  border-color: #b5b5b5;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, .15);
}
</style>
