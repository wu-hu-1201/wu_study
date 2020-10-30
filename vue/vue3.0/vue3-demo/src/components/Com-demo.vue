<template>
<ul>
    <FragmentDemo :data="[5, 3, 1, 2, 4, 8]" />
    <hr>
    <teleport-demo />
    <hr>
    <Suspense>
        <template #default>
            <AsyncComponent :timeout="3000" />
            异步组件
        </template>
        <template #fallback>
            <Loading />
        </template>
    </Suspense>
</ul>
</template>

<script>
import FragmentDemo from './Fragment.vue'
import TeleportDemo from './Teleport.vue'
import AsyncComponent from './Suspense.vue'
import Loading from './Loading.vue'
export default {
    components: {
        FragmentDemo,
        TeleportDemo,
        AsyncComponent,
        Loading
    }
}
</script>

<style>

</style>
