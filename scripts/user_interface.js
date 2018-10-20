class UserInterface {
    constructor() {
        this.init();
    }

    init() {
        this.selectCategories();
    }

    selectCategories() {
        const categoriesList = eventbrite.getCategoriesAPI()
        .then(function(data){
            console.log(data);
        });
    }
}
