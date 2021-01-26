var root = new Vue({
  el: '#root',
  data: {
    counter: 0,
    intervallo: "",
    immagini: [
      "img/bonolis.webp",
      "img/ezio.jpg",
      "img/jerry.jpg",
      "img/maccio.jpg"
    ],
    mieClassi: "bordo"
  },
  created(){
    this.intervallo = setInterval(this.next, 2000);
  },
  methods: {
    next(){
      (this.counter >= (this.immagini.length-1)) ? this.counter = 0 : this.counter++;
    },
    prev(){
      (this.counter <= 0) ? this.counter = 3 : this.counter--;
    },
    questaFoto(indice){
      this.counter = indice;
      clearInterval(this.intervallo);
    }
  }
})
