

// const app=Vue.createApp({
// 	data()
// 	{
// 		return{
// 			counter:0,
// 		};
// 	}

// }).mount('#events');



// //   bind method

const app=Vue.createApp({
	data()
	{
		return{
			counter:0,
		};
	},
	methods:
	{
		add()
		{
			this.counter=this.counter++;

		},
		remove()
		{
			this.counter=this.counter--;
		}
	}
}).mount('#events');





// by giving parameter

// const app=Vue.createApp({
// 	data()
// 	{
// 		return{
// 			counter:0,
// 		};
// 	},
// 	methods:{
// 		add(num)
// 		{
// 			this.counter=this.counter+num;
// 		},
// 		remove(num)
// 		{
// 			this.counter=this.counter-num;
// 		}
// 	}
// }).mount('#events');
