const initialCats = [
  {
    name: "Cornish Rex",
    clickCount: 0,
    imgSrc: "https://live.staticflickr.com/5227/5616777560_d745f938a9_z.jpg",
    nicknames: ["Cornish Rex", "Ragdoll", "Toyger", "Cat four", "Cat five"]
  },
  {
    name: "Ragdoll",
    clickCount: 0,
    imgSrc: "https://live.staticflickr.com/65535/51649693392_468c8cf0a1_z.jpg",
    nicknames: ["Cornish Rex", "Ragdoll", "Toyger", "Cat four", "Cat five"]
  },
  {
    name: "Toyger",
    clickCount: 0,
    imgSrc: "https://live.staticflickr.com/2624/3892070704_b101db0c7d_z.jpg",
    nicknames: ["Cornish Rex", "Ragdoll", "Toyger", "Cat four", "Cat five"]
  },
  {
    name: "Cat four",
    clickCount: 0,
    imgSrc: "https://live.staticflickr.com/5227/5616777560_d745f938a9_z.jpg",
    nicknames: ["Cornish Rex", "Ragdoll", "Toyger", "Cat four", "Cat five"]
  },
  {
    name: "Cat five",
    clickCount: 0,
    imgSrc: "https://live.staticflickr.com/5227/5616777560_d745f938a9_z.jpg",
    nicknames: ["Cornish Rex", "Ragdoll", "Toyger", "Cat four", "Cat five"]
  }
];

let Cat = function (data) {
  this.name = ko.observable(data.name);
  this.clickCount = ko.observable(data.clickCount);
  this.imgSrc = ko.observable(data.imgSrc);

  this.nicknames = ko.observableArray(data.nicknames);

  this.title = ko.computed(function () {
    let title;
    let clicks = this.clickCount();
    if (clicks <= 10) {
      title = "Newborn";
    } else if (clicks < 50) {
      title = "infant";
    } else if (clicks < 100) {
      title = "Child";
    }
    return title;
  }, this);
};

let viewModel = function () {

  let self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach((catItem) => {
    this.catList.push(new Cat(catItem));

  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function () {
    this.clickCount(this.clickCount() + 1);
  };

  this.catListItem = function (data) {
    const index = self.currentCat().nicknames().findIndex(name => name === data);

    self.currentCat(self.catList()[index]);
  };


};

ko.applyBindings(new viewModel());
