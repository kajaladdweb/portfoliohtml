// v-link

// const app=Vue.createApp({
// 	data()
// 	{
// 		return{
// 			vueLink:"https://udemy.com"
// 		};

// 	}
// }).mount('#user-goal');






// vbind js

const app=Vue.createApp({
	data(){
		return{
			carousegoal:'helloo'
		};
	},
	methods:{
		carousegoal(){
			const random=Math.random();
			if(random<0.5)
			{
				return 'learn';
			}
			else
			{
				return 'master'
			}

		}
	}
}).mount('#user-goal');



// v-method


// const app=Vue.createApp({
// 	data(){
// 		return{
// 			methods:
// 				{
// 					outputgoal()
// 					{
// 						const num=Math.random()
// 						if(num<0)
// 						{
// 							return 'negative';
// 						}
// 						else{
// 							return 'positive';
// 						}
// 					}
// 				}

// 		};
// 	}
// }).mount('#user-goal');
