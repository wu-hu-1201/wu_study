<template>
<div class="confirm-modal">
    <button @click="isOpen = true">打开</button>

    <Teleport to="#foot-container">
        <div v-if="isOpen">
            <p>Vue 鼓励我们通过将 UI 和相关行为封装到组件中来构建 UI</p>
            <button @click="isOpen = false">取消</button>
        </div>
    </Teleport>
</div>
</template>

<script>
import {
    ref
} from 'vue'
export default {
    setup() {
        const isOpen = ref(false)
        return {
            isOpen
        }
    }
}
</script>

<style>

</style>
