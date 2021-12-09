

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullname:'',
      lastName:''
    };
  },

  // watch:{
    counter(value){
      if(value>50){
        this.counter=0;
      }
    }

  //   name(value){
  //     if(value===''){
  //       this.fullname='';
  //     }
  //     else
  //     {
  //        this.fullname=value + ' ' +this.lastName;
  //     }
     
  //   },

  //   lastName(){
  //     if(value===''){
  //       this.fullname='';
  //     }
  //     else
  //     {
  //        this.fullname=value + ' ' +value;
  //     }
  //   }
  // },

  computed:{

      fullname(){
        console.log('running');
       if(this.name === '' || this.lastName ==='')
      {
        return '';
      }
      
      return this.name + '' + lastName;
    
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
