const vm = new Vue({

  el: '#app',

  data: {
    welcomeMessage: 'Our first Vue App.',

    anothermessage : "you can haz vue!",


    targetURL : 'https://vuejs.org/',

    anchorOff : true,

    hazVue : true,


    goodFruits: [
      {name: 'apple', flavour: 'tasty!'},
      {name: 'mango', flavour: 'fantastic!'},
      {name: 'apricot', flavour: 'gnammy!'}
    ]
  },

  methods: {
    logFruits(e) { console.log(e.currentTarget); },
  
  hideMsg() { this.anothermessage = 'Hey you!';},

  changeText() {
    this.aothermessage = "changed this from a function call";
  }
  
}


});
