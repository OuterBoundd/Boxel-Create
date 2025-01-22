<script setup>
  import { ref } from 'vue'

  function newFile() {
    console.log('Menu.vue: newFile()');
  }
</script>

<style lang="scss">
  @import "../scss/menu-main";
</style>

<template>
  <div class="menu-main">
    <ul>
      <li>
        <button>File</button>
        <ul class="">
          <li><button @click="newFile"><span class="icon icon-new"></span>New</button></li>
          <li><button><span class="icon icon-open"></span>Open</button></li>
          <li><button><span class="icon icon-save"></span>Save</button></li>
        </ul>
      </li>
      <li>
        <button>Edit</button>
        <ul class="">
          <li><button @click="newFile"><span class="icon icon-open"></span>Undo</button></li>
          <li><button><span class="icon icon-open"></span>Redo</button></li>
          <li><button><span class="icon icon-trash"></span>Delete everything</button></li>
        </ul>
      </li>
      <li>
        <button>Test</button>
        <ul class="">
          <li><button @click="newFile"><span class="icon icon-open"></span>Play</button></li>
          <li><button><span class="icon icon-eye"></span>Run</button></li>
        </ul>
      </li>
      <li>
        <button>Controls</button>
        <ul class="">
          <li><label><span class="text"></span>Movement keys:</label></li>
          <li><label><span class="text"></span></label></li>
          <li><label><span class="text"></span></label></li>
          <li><label><span class="text"></span></label></li>
          <li><label><span class="text"></span>Middle click - Move camera</label></li>
          <li><label><span class="text"></span>Shift + Middle click - Move camera</label></li>
          <li><label><span class="text"></span>Scroll wheel - Zoom</label></li>
          <li><label><span class="text"></span></label></li>
          <li><label><span class="text"></span></label></li>
          <li><label><span class="text"></span></label></li>
          <li><label><span class="text"></span>Quick Access:</label></li>
          <li><label><span class="text"></span></label></li>
          <li><label><span class="text"></span></label></li>
          <li><label><span class="text"></span></label></li>
          <li><label><span class="text"></span>Q - Move/Translate</label></li>
          <li><label><span class="text"></span>W - Scale</label></li>
          <li><label><span class="text"></span>E - Rotate</label></li>
          <li><label><span class="text"></span>Shift + A - Snap</label></li>
          <li><label><span class="text"></span>Left Control + A - Unsnap</label></li>
          <li><label><span class="text"></span>Shift + D - Duplicate</label></li>
          <li><label><span class="text"></span>Shift + B - Duplicate + Transform</label></li>
          <li><label><span class="text"></span>Left Control + C - Copy</label></li>
          <li><label><span class="text"></span>Left Control + X - Cut</label></li>
          <li><label><span class="text"></span>Left Control + V - Paste</label></li>
          <li><label><span class="text"></span>Del - Delete selected</label></li>
        </ul>
      </li>
      <li>
        <button>About</button>
        <ul class="">
          <li><label><span class="text"></span>Created by Jacob DeBenedetto, Remade for Boxel NOMAD</label></li>
          <li><label><span class="text"></span></label></li>
          <li><label><span class="text"></span></label></li>
          <li><label><span class="text"></span></label></li>
          <li><label><span class="text"></span>Copyright OuterBound 2025, No rights reserved 😏</label></li>
          <li><label><span class="text"></span></label></li>
          <li><label><span class="text"></span></label></li>
          <li><label><span class="text"></span></label></li>
          <li><a href="https://dopplercreative.com/level-editor" target="_blank">Visit the original website here!</a></li>
          <li><a href="https://github.com/doppl3r/level-editor" target="_blank">See the original GitHub repository!</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>