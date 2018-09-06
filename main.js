new Vue({
    name: 'game',
    el:'#app',

    template: `<div id="#app">
            Hello World!
            {{ worldRatio}}
        </div>`,

    data: state,

    // Window resize handling
    window: addEventListener('resize', () => {state.worldRatio = getWorldRatio()}),

    mounted(){
        console.log(this.$data === state)// true or false
    },

})