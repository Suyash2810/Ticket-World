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
            const Data =  data.categoriesData.categories;
            const categoriesSelect = document.querySelector('#category');
            
            Data.forEach(function(Category){
                const option = document.createElement('option');
                option.value = Category.id;
                option.appendChild(document.createTextNode(Category.name));
                categoriesSelect.appendChild(option);
            })
        })
        .catch(function(error)
              {
            console.log("Error");
        });
    }
}
