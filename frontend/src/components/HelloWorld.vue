<template>
  <div class="hello">
    <h1>Request data:</h1>
    <button @click="fetchData()" class="button">Request</button>
    <p>Name: {{ data.name || "unknown" }}</p>
    <p>Age: {{ data.age || "unknown" }}</p>
    <hr/>
    <button @click="fetchUserData()" class="button">Request users</button>
    {{userData}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      data: false,
      userData: false
    };
  },
  methods: {
    fetchData() {
      axios
        .get("http://localhost:1024/request")
        .then((res) => {
          this.data = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchUserData() {
      axios.get("http://localhost:1024/users").then((res) => {
        this.userData = res.data;
      }).catch((err) => {console.log(err)})
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
.button {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  border-radius: 10rem;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.button:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0cf;
  border-radius: 10rem;
  z-index: -2;
}
.button:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: #008fb3;
  transition: all 0.3s;
  border-radius: 10rem;
  z-index: -1;
}
.button:hover {
  color: #fff;
  cursor: pointer;
}
.button:hover:before {
  width: 100%;
}

/* optional reset for presentation */
* {
  font-family: Arial;
  text-decoration: none;
  font-size: 20px;
}

.container {
  padding-top: 50px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
}

span {
  display: block;
  margin-top: 2rem;
  font-size: 0.7rem;
  color: #777;
}
span a {
  font-size: 0.7rem;
  color: #999;
  text-decoration: underline;
}
</style>
