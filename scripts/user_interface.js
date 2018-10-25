class UserInterface {
    constructor() {
        this.init();
    }

    init() {
        this.selectCategories();

        this.result = document.getElementById('result');
    }

    displayEventsList(events) {
        let HTMLeventTemplate = '';

        events.forEach(eventInformation => {
//            HTMLeventTemplate += `
//                <div class="col-md-4 mt-4">
//                    <div class="card">
//                        <div class="card-body">
//                            <img class="img-fluid mb-2" src="${eventInformation.logo !== null ? eventInformation.logo.url:''}">
//                        </div>
//                        <div class="card-body">
//                            <div class="card-text">
//                                <h2 class="text-center card-title">${eventInformation.name.text}</h2>
//                                <p class="lead text-info">Event Information :</p>
//                                <p class="text-center">${eventInformation.description.text.substring(0,200)} ...</p>
//                                <span class="badge badge-primary">Capacity: ${eventInformation.capacity}</span>
//                                <span class="badge badge-secondary">Date and Time : ${eventInformation.start.local}</span>
//
//                                <a href="${eventInformation.url}" targets="_blank" class="btn btn-primary btn-block mt-4"> Get tickets </a>
//                            </div>
//                        </div>
//                    </div>
//                </div>
//            `;
            
            HTMLeventTemplate += `                
                <div class="col-md-4 col-md-offset-1" id="columnCards">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                            <img class="img-fluid mb-2" width="400px" height="200px" src="${eventInformation.logo !== null ? eventInformation.logo.url:''}">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1">
                            <h3 class="text-center" id="displayInformation">${eventInformation.name.text}</h3>
                            <p class="text-center text-info" id="displayInformation">Event Information :</p>
                            <p class="text-center" id="displayInformation">${eventInformation.description.text.substring(0,200)}...</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                            <span class="badge badge-primary" id="span1">Capacity: ${eventInformation.capacity}</span>
                            <span class="badge badge-secondary" id="span2">Date and Time : ${eventInformation.start.local}</span>
                            <br><br>
                            <a href="${eventInformation.url}" targets="_blank" class="btn btn-primary btn-block mt-4" id="tickets"> Get tickets </a>
                        </div>
                    </div>
                </div>`;
            
        });

        this.result.innerHTML = HTMLeventTemplate;
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
