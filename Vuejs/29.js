

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },

  computed:{

      fullname(){
        console.log('running');
       if(this.name === '')
      {
        return '';
      }
      
      return this.name + '' + 'Schwarzmuller';
    
      }//dataproperty noy use as method
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
