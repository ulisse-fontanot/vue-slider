var root = new Vue({
  el: '#root',
  data: {
    counter: 0,
    immagini: [
      "img/bonolis.webp",
      "img/ezio.jpg",
      "img/jerry.jpg",
      "img/maccio.jpg"
    ],
    mieClassi: "bordo"
  },
  methods: {
    next(){
      (this.counter >= (this.immagini.length-1)) ? this.counter = 0 : this.counter++;
    },
    prev(){
      (this.counter <= 0) ? this.counter = 3 : this.counter--;
    },
    questaFoto(indice){
      this.counter == indice;
    }
  }
})
