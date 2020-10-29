<template>
<ul>
    <FragmentDemo :data="[5, 3, 1, 2, 4, 8]" />
</ul>
</template>

<script>
import FragmentDemo from './Fragment.vue'
export default {
    components: {
        FragmentDemo
    }
}
</script>

<style>

</style>
