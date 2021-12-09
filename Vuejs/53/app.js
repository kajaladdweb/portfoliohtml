
function getRandomValue(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app=Vue.createApp({

        data(){
            return{
                playerHealth:100,
                mmonsterHealth:100 ,
                currentRound:0 
            };
        },
        computed:{
            monsterBarStyles()
            {
                return { width: this.mmonsterHealth+ '%' };
            
            },
            playerBarStyles(){

                return { width: this.playerHealth+ '%' };
            },
            mayUseSpecialAttacks(){


                return this.currentRound % 3 !==0;
            }
        },
        
        methods:

        {
            attackMonster(){

                this.currentRound++;
              const attackValue= getRandomValue(5,12);
              this.mmonsterHealth=this.mmonsterHealth-attackValue;
              this.attackPlayer();

            },
            attackPlayer(){

              const attackValue=  getRandomValue(8,15);
              this.playerHealth=this.mmonsterHealth-attackValue;

            },
            specialAttackMonster(){


                this.currentRound++;
              const attackValue=  getRandomValue(10,25);
              this.mmonsterHealth=this.mmonsterHealth-attackValue;
              this.attackPlayer();
            }
        }
});
app.mount('#game');