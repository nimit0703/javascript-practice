<template>
  <div>
    <h1>API Data</h1>
    <ul>
      <pre id="a"></pre>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiData: [],
    };
  },
  mounted() {
    console.log("before Mount");
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById('a').innerText =data;
        // this.apiData = data;
      })
      .catch((error) => {
        console.error("API request failed:", error);
      });
  },
//   created() {
//     console.log("created");
//     fetch("https://randomuser.me/api/")
//       .then((response) => response.json())
//       .then((data) => {
//         this.apiData = data;
//       })
//       .catch((error) => {
//         console.error("API request failed:", error);
//       });
//   },
};
</script>
