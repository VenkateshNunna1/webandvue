<template>
  <div class="card">
    <div>
      <slot name="header">default header</slot>
    </div>
    <div>
      <slot>default content</slot>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-left: 250px;
  width: 300px; /* Set the width as per your requirement */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}
</style>
