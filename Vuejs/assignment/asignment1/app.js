const app=Vue.createApp({
    data()
    {
        return{
            name:'kajal',
            age:30,
            imageUrl:''
        };
    },
    methods:{
        calculateAge(){
            return this.age+5;
        },
        calculaterandom(){
            return Math.random();
        }
    }
});
app.mount('#assignment')