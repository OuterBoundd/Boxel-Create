<script setup>
  import { ref } from 'vue'
  var props = defineProps(['data']);
</script>

<style lang="scss">
  @import "../scss/menu-view";
</style>

<template>
  <div class="menu-view">
    <ul>
      <li>
        <button>Select</button>
        <ul class="">
          <li><button @click="newFile"><span class="icon icon-open"></span>Select Cube Closest to Origin</button></li>
          <li><button><span class="icon icon-open"></span>Select All Cubes in Workspace</button></li>
        </ul>
      </li>
      <li>
        <button>Add</button>
        <ul class="">
          <li><button @click="newFile"><span class="icon icon-open"></span>Player</button></li>
          <li><button @click="Editor"><span class="icon icon-open"></span>Cube</button></li>
          <li><button><span class="icon icon-open"></span>Sphere</button></li>
          <li><button><span class="icon icon-open"></span>Cylinder</button></li>
        </ul>
      </li>
    </ul>
  </div>
</template>