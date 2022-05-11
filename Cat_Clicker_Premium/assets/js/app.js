
// ------------------------MODEL--------------------------------//
const model = {
    currentCat: null,
    Cats: [
    {
      title: 'Cornish Rex',
      Size: 'Small to medium, with males weighing 6 to 9 pounds and females weighing 5 to 7 pounds',
      Coat: ' Short, extremely soft and silky', 
      src: 'https://live.staticflickr.com/5227/5616777560_d745f938a9_z.jpg',
      count: 0
    },
    {
      title: 'Ragdoll',
      Size: 'Medium weighing 10 to 15 pounds',
      Coat: 'Semi-long, plush, silky', 
      src: 'https://live.staticflickr.com/65535/51649693392_468c8cf0a1_z.jpg',
      count: 0
    },
    {
      title: 'Toyger',
      Size: 'Medium, with males weighing 10 to 15 pounds and females weighing 7 to 10 pounds',
      Coat: 'Short, plush, soft ', 
      src:'https://live.staticflickr.com/2624/3892070704_b101db0c7d_z.jpg',
      count: 0
    },
    {
      title: 'Cat four',
      Size: 'Small to medium, with males weighing 6 to 9 pounds and females weighing 5 to 7 pounds',
      Coat: ' Short, extremely soft and silky', 
      src:'https://live.staticflickr.com/5227/5616777560_d745f938a9_z.jpg',
      count: 0
    },
    {
      title: 'Cat five',
      Size: 'Small to medium, with males weighing 6 to 9 pounds and females weighing 5 to 7 pounds',
      Coat: ' Short, extremely soft and silky', 
      src:'https://live.staticflickr.com/5227/5616777560_d745f938a9_z.jpg',
      count: 0
    },
  ]
  };
  
  // ------------------------octopus--------------------------------//
  
  const octopus = {
  init: function(){
    model.currentCat = model.Cats[0];
    catListView.init();
    catView.init();
  },
    getCurrentCat: function() {
      return model.currentCat;
    },
    getCats: function() {
        return model.Cats;   
    },
    setCurrentCat: function(cat){
      model.currentCat = cat;
      model.currentCat.count++;
    }  
  };
  
  
  // ------------------------VIEW--------------------------------//
  
  const catView = {
        init: function(){
          this.currentCat = octopus.getCurrentCat();
          this.asideDetails = document.querySelector('.cat');
          this.render();        
        },
        render: function(){
          this.asideDetails.innerHTML = '';
          let htmlContent = '';
          htmlContent = `<h2 class="card-text">Name: ${this.currentCat.title}</h2>
          <img class="card-img" src='${this.currentCat.src}'/>
          <span class="text-muted">${this.currentCat.count}</span>`;
          this.asideDetails.insertAdjacentHTML('beforeend', htmlContent);          
        }
  };
  
  const catListView = {
  init: function(){
    this.catList = document.querySelector('ul');
    this.Cats = octopus.getCats();
    this.render();
  },
  render: function(){
          // Let's loop over the Cats in our array
          this.Cats.forEach( cat => {
            // We're creating a DOM element for the Cat
            let liCat = document.createElement('li');
            liCat.textContent = cat.title;
            liCat.classList.add('nav-item');
            // ... and when we click, the value of `cat`
            liCat.addEventListener('click', (function(CatCopy) {
               let htmlContent = '';
               return function() {
                 octopus.setCurrentCat(CatCopy);
                 catView.init();
               }
               })(cat));
            this.catList.appendChild(liCat);        
          });
        }
  }
  
  
  
  octopus.init();
  