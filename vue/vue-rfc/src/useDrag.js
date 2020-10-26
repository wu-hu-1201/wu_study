import { ref } from 'vue'
// 多个地方需要拖拽  x y  handleMove



export default function useDrag() {
    const x = ref(0)  // data
    const y = ref(0)
    const handleMove = (e) => {
        console.log(1)
        x.value = e.touches[0].pageX
        y.value = e.touches[0].pageY
    }
    return {
        x,
        y,
        handleMove
    }
}
