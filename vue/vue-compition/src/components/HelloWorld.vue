<template>
  <div>
    <!-- fragment -->
    <h2 @touchmove="handleMove" 
    :style="{left: `${x}px`, top: `${y}px`, position: 'absolute'}">
    拖拽</h2>
    <DragAble />
  </div>
</template>

<script>
import withDrag from '../withDrag';
import Txt from './Txt'
const DragAble = withDrag(Txt)
export default {
  components: {
    'DragAble': DragAble
  },
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  methods: {
    handleMove(e) {
      const x = e.touches[0].pageX
      const y = e.touches[0].pageY
      this.x = x
      this.y = y
    }
  }
}
</script>

<style>

</style>