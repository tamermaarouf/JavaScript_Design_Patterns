let cats = function(){
    this.name = ko.observable('Tabby');
    this.clickCount = ko.observable(0);


    this.imgSrc = ko.observable('img/1413379559_412a540d29_z.jpg');

    this.cats = ko.observableArray(['Cornish Rex', 'Ragdoll', 'Toyger', 'Cat four', 'Cat five']);

    this.title = ko.computed(function () {
        let title;
        let clicks = this.clickCount();
        if (clicks <= 10) {
            title = 'Newborn';
        } else if (clicks < 50) {
            title = 'infant';
        } else if (clicks < 100) {
            title = 'Child';
        }
        return title;
    }, this);

}

let viewModel = function () {
    this.currentCat = ko.observable( new cats() );

    this.incrementCounter = function () {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };
};
ko.applyBindings(new viewModel());