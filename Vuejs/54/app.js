
function getRandomValue(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app=Vue.createApp({

        data(){
            return{
                playerHealth:100,
                mmonsterHealth:100 ,
                currentRound:0 ,
                winner:null;
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
            },

        },
        watch:{
          playerHealth(value){
            if(value<=0 && this.mmonsterHealth<=0){
//  a draw
              this.winner ='draw';
            }else if(value<=0){
// player lost

              this.winner ='monster';
            }
          },
          mmonsterHealth(value){
             if(value<=0 && this.playerHealth<=0){
//  a draw
              
              this.winner ='draw';
            }else if(value<=0){
// mmonster lost
              this.winner ='player';
            }
          },
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
            },
             healPlayer(){
              const healValue=getRandomValue(8,20);
              if(this.playerHealth+healValue>100){
                this.playerHealth=100;
              }
              else{
                this.playerHealth+=healValue;
              }
              this.attackPlayer();
            },
        },
});
app.mount('#game');