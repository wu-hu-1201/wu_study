import { defineComponent, h } from 'vue';

export default function(Com) {
    console.log(Com)
    // 第二个参数 script 中间那一段
    return defineComponent({
        // render 返回就是 该组件需要渲染的
        render() {
            // return h('h3', {}, ['hhh'])
            // return <h3>hh</h3>
            return h('div', {
                // onclick: {touchmove: this.handleMove},
                "ontouchmove": this.handleMove,
                "onClick": () => {
                    console.log(1)
                },
                style: [
                    {position: 'absolute'},
                    {left: this.xpx},
                    {top: this.ypx}
                ]
            }, [ h(Com) ])
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
    })
    
}


