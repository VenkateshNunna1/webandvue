<template>
  <article class="contact">
    <div class="contact1">
      <p class="text">A phone call will be coming to this number</p>
      <p class="number">+60 - 12 - 1234567890</p>
    </div>
    <div class="timer">
      <p class="text1">Timer to get Call</p>
      <img class="img1" src="../assets/timer.png" alt="" />
    </div>
    <div class="chat">
      <p class="text2">Let's chat</p>
      <img class="img2" src="../assets/message.png" alt="" />
    </div>
  </article>
</template>
<script></script>
<style scoped>
.contact {
  display: flex;
  justify-content: space-around;
  background-color: #4cc2ca;
  margin-top: 15px;
  flex-wrap: wrap;
  padding-top: 10px;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 10px;
  border-radius: 8px;
}
.text,
.text1,
.text2 {
  color: white;
  font-size: 12px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.number {
  color: #121f64;
  font-size: 45px;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.img2 {
  height: 50px;
  width: 50px;
}
.text,
.text1,
.text2 {
  position: relative;
  left: 20px;
}
.number {
  position: relative;
  right: 45px;
  top: 20px;
}
.img1 {
  position: relative;
  right: 24px;
  top: 2px;
}
.img2 {
  top: 2px;
  position: relative;
  left: 20px;
  margin-top: 20px;
}
.timer {
  position: relative;
  right: 10px;
}
</style>
