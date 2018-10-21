class UserInterface {
    constructor() {
        this.init();
    }

    init() {
        this.selectCategories();
    }

    selectCategories() {
        const categoriesList = eventbrite.getCategoriesAPI()
            .then(data => {
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

    printErrorMessage(errorMessage, classname) {

        const div = document.createElement('div');
        div.className = classname;
        div.appendChild(document.createTextNode(errorMessage));

        //Inserting into the html

        const searchD = document.querySelector('#searching_events');

        searchD.appendChild(div);

        //Removing the alert message after sometime of display

        setTimeout(function () {
            searchD.removeChild(div);
            removeAlertClass();
        }, 3000);
    }


    removeAlertClass() {
        const alert = document.querySelector('.alert');

        if (alert) {
            alert.remove();

        }
    }
}
