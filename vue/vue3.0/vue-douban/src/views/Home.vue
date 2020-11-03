<template>
<div>
    <v-header title="豆瓣电影评分" :leftArrow="false" />
    <MovieSection :section="test"></MovieSection>
    <!--<Movie :movie="{image:'https://cn.bing.com/ImageResolution.aspx', title:'金刚川', rating: { stars: [1,1,1,0,0], score:6.5}}"></Movie>-->
    <!--<Star :rating="{stars:[1, 1, 1, 1, 0], score: 8.5}"></Star>-->
</div>
</template>

<script>
// @ is an alias to /src
import {
    ref
} from 'vue'
import Header from '@/components/Header.vue'
import MovieSection from '@/components/MovieSection.vue'
// import Movie from '@/components/Movie.vue'
// import Star from '@/components/Star.vue'
export default {
    name: 'Home',
    components: {
        'v-header': Header,
        MovieSection,
        // Star
    },
    setup() {
        const test = ref({
            movies: [{
                    image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=103431208,3897663198&fm=26&gp=0.jpg',
                    title: '肥猫',
                    rating: {
                        stars: [1, 1, 1, 0, 0],
                        score: 6.5
                    }
                },
                {
                    image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=12148159,512443507&fm=26&gp=0.jpg',
                    title: '金刚川',
                    rating: {
                        stars: [1, 1, 1, 0, 0],
                        score: 6.5
                    }
                },
                {
                    image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2206010204,1108845524&fm=26&gp=0.jpg',
                    title: '蜘蛛侠',
                    rating: {
                        stars: [1, 1, 1, 0, 0],
                        score: 6.5
                    }
                }
            ]
        })

        return {
            test
        }
    }
}
</script>

<style>

</style>
