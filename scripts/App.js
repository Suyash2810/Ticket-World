//Instantiation of both the classes
const eventbrite = new eventBrite();
const ui = new UserInterface();

//Event listeners and variables

document.getElementById('submitBtn').addEventListener('click', (e) => {
    const resultwell = document.querySelector('.backimage');
    resultwell.style.display = 'block';
    const eventName = document.getElementById('name_event').value;
    const category_event = document.getElementById('category').value;


    if (eventName !== '') {
        eventbrite.queryingAPI(eventName, category_event)
            .then((datas) => {
                const arrayEventsList = datas.eventsData.events;

                if (arrayEventsList.length > 0) {
                    //Printing all the received events.
                    ui.displayEventsList(arrayEventsList);
                } else {
                    //Printing a message as there are no events found for the selected options.
                    ui.printErrorMessage('Oops! No results found.', 'alert alert-danger mt-4');
                }
            })
    } else {
        ui.printErrorMessage('Add an event name or the name of the city.', 'alert alert-danger mt-4');
    }
});
