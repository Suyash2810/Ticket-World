class UserInterface {
    constructor() {
        this.init();
    }

    init() {
        this.selectCategories();
    }

    selectCategories() {
        const categoriesList = eventBrite.getCategoriesAPI();
    }
}
