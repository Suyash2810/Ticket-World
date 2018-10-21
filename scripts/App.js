//Instantiation of both the classes
const eventbrite = new eventBrite();
const ui = new UserInterface();

//Event listeners and variables

document.getElementById('submitBtn').addEventListener('click', (e) => {

    const eventName = document.getElementById('name_event').value;
    const category_event = document.getElementById('category').value;


    if (eventName !== '') {
        eventbrite.queryingAPI(eventName, category_event)
            .then((datas) => {
                const arrayEventsList = datas.eventsData.events;

                if (arrayEventsList.length > 0) {
                    //Printing all the received events.
                } else {
                    
                }
            })
    } else {
        ui.printErrorMessage('Add an event name or the name of the city.', 'alert alert-danger mt-4');
    }
});
