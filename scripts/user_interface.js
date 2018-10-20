class UserInterface {
    constructor() {
        this.init();
    }

    init() {
        this.selectCategories();
    }

    selectCategories() {
        const categoriesList = eventbrite.getCategoriesAPI()
            .then(data =>{
                const Data = data.categoriesData.categories;
                const categoriesSelect = document.querySelector('#category');

                Data.forEach(function (Category) {
                    const option = document.createElement('option');
                    option.value = Category.id;

                    option.appendChild(document.createTextNode(Category.name));
                    option.style.backgroundColor = '#fff';
                    categoriesSelect.appendChild(option);
                })
            })
            .catch(error => {
                console.log("Error");
            });
    }
}
