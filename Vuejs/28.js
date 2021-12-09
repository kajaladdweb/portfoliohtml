

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: 
  {
    outputFullname(){
      if(this.name === '')
      {
        return '';
      }
      
      return this.name + '' + 'Schwarzmuller';
    },
  resetInput(){
    this.name='';
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
     
    }
  }
});

app.mount('#events');
