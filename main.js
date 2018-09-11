new Vue({
    name: 'game',
    el:'#app',

    template: `<div id="#app">
                    <top-bar 
                    :turn="turn" 
                    :current-player-index="currentPlayerIndex" 
                    :players="players"
                    />      
                </div>`,

    data: state,

    // Window resize handling
    window: addEventListener('resize', () => {state.worldRatio = getWorldRatio()}),

    mounted(){
        console.log(this.$data === state)// true or false
    },

})

console.log('Yes! We are using Vue version', Vue.version)