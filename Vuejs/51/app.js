
function getRandomValue(min,max){
    return Math.floor(Math.random()* (max-min)) +min;
}

const app=Vue.createApp({

        data(){
            return{
                playerHealth:100,
                mmonsterHealth:100  
            };
        },
        computed:{
            monsterBarStyles()
            {
                return {width: this.monsterHealth+ '%'};
            
            },
        playerBarStyles(){

            return {width: this.monsterHealth+ '%'};
        },
    },
        methods:
        {
            attackMonster(){

              const attackValue= getRandomValue(5,12);

              this.mmonsterHealth=this.mmonsterHealth-attackValue;
              this.attackPlayer();

            },
            attackPlayer(){

              const attackValue=  getRandomValue(8,15);

              this.mmonsterHealth=this.mmonsterHealth-attackValue;

            }
        }
});
app.mount('#game');