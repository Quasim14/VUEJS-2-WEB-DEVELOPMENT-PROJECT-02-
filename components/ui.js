Vue.component('top-bar', {
    template: `<div class="top-bar" v-bind:class="'player-'+ currentPlayerIndex">
                    <div class="player p0">{{ this.players[0].name }}</div>
                    <div class="turn-counter">
                    <img class="arrow" src="svg/turn.svg" />
                    <div class="turn">Turn {{turn}}</div>
                    </div>
                    <div class="player p1">{{ this.players[1].name }}</div>
                </div>`,
    props: ['players', 'currentPlayerIndex', 'turn'],


    created(){
        console.log(this.players)
    },
 })

