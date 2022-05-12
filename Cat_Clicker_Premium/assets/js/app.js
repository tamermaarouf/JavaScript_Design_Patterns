// ------------------------MODEL--------------------------------//
const model = {
  currentCat: null,
  Cats: [
    {
      title: "Cornish Rex",
      Size: "Small to medium, with males weighing 6 to 9 pounds and females weighing 5 to 7 pounds",
      Coat: " Short, extremely soft and silky",
      src: "https://live.staticflickr.com/5227/5616777560_d745f938a9_z.jpg",
      count: 0,
    },
    {
      title: "Ragdoll",
      Size: "Medium weighing 10 to 15 pounds",
      Coat: "Semi-long, plush, silky",
      src: "https://live.staticflickr.com/65535/51649693392_468c8cf0a1_z.jpg",
      count: 0,
    },
    {
      title: "Toyger",
      Size: "Medium, with males weighing 10 to 15 pounds and females weighing 7 to 10 pounds",
      Coat: "Short, plush, soft ",
      src: "https://live.staticflickr.com/2624/3892070704_b101db0c7d_z.jpg",
      count: 0,
    },
    {
      title: "Cat four",
      Size: "Small to medium, with males weighing 6 to 9 pounds and females weighing 5 to 7 pounds",
      Coat: " Short, extremely soft and silky",
      src: "https://live.staticflickr.com/5227/5616777560_d745f938a9_z.jpg",
      count: 0,
    },
    {
      title: "Cat five",
      Size: "Small to medium, with males weighing 6 to 9 pounds and females weighing 5 to 7 pounds",
      Coat: " Short, extremely soft and silky",
      src: "https://live.staticflickr.com/5227/5616777560_d745f938a9_z.jpg",
      count: 0,
    },
  ],
};

// ------------------------octopus--------------------------------//

const octopus = {
  init: function () {
    model.currentCat = model.Cats[0];
    catListView.init();
    catView.init();
  },
  getCurrentCat: function () {
    return model.currentCat;
  },
  getCats: function () {
    return model.Cats;
  },
  setCurrentCat: function (cat) {
    model.currentCat = cat;
  },
  // increments the counter for the currently-selected cat
  incrementCounter: function () {
    model.currentCat.count++;
    catView.render();
  },
};

// ------------------------VIEW--------------------------------//

const catView = {
  init: function () {
    // store pointers to our DOM elements for easy access later
    this.catElem = document.getElementById("cat");
    this.catName = document.getElementById("cat_name");
    this.catImageElem = document.getElementById("cat_img");
    this.catCount = document.getElementById("cat_count");

    // on click, increment the current cat's counter
    this.catImageElem.addEventListener("click", function () {
      octopus.incrementCounter();
    });

    // render this view (update the DOM elements with the right values)
    this.render();
  },
  render: function () {
    // update the DOM elements with values from the current cat
    const currentCat = octopus.getCurrentCat();
    this.catName.textContent = currentCat.title;
    this.catImageElem.src = currentCat.src;
    this.catCount.textContent = currentCat.count;
  },
};

const catListView = {
  init: function () {
    this.catList = document.querySelector("ul");
    this.render();
  },
  render: function () {
    // get the cats we'll be rendering from the octopus
    this.Cats = octopus.getCats();
    this.catList.innerHTML = "";
    // Let's loop over the Cats in our array
    this.Cats.forEach((cat) => {
      // We're creating a DOM element for the Cat
      let liCat = document.createElement("li");
      liCat.textContent = cat.title;
      // ... and when we click, the value of `cat`
      // on click, setCurrentCat and render the catView
      // (this uses our closure-in-a-loop trick to connect the value
      //  of the cat variable to the click event function)
      liCat.addEventListener(
        "click",
        (function (CatCopy) {
          let htmlContent = "";
          return function () {
            octopus.setCurrentCat(CatCopy);
            catView.render();
          };
        })(cat)
      );
      this.catList.appendChild(liCat);
    });
  },
};

// go octopus!
octopus.init();
