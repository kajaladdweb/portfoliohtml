const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
   
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;

      this.message=this.$refs.userText.value;//point dom object =input element

      // console.dir(this.$refs.userText);
    },  
  },
});

app.mount('#app');

const app2=Vue.createApp({
  tamplate:`
  <p>{{ favoriteMeal }}</p>
  `,
  data(){
    return {
      favoriteMeal:'pizza'
    };
  }
});
app2.mount('#app2');

const data={
  message:'hello',
  longMessage:'hello world'
};

const handler={
  set(target,key,value){
    if(key === 'message'){
      target.longMessage=value+'world';
    }
    target.message=value;
  }
};
const proxy= new Proxy(data,handler);

proxy.message='hello...';
console.log(proxy.longMessage);