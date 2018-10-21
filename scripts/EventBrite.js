class eventBrite {

    constructor() {
        this.token_authentication = 'MSNWHMORIZCPIYNABE7K';
        this.sortBy = 'date';
    }


    //getting the categories from the API

    async queryingAPI(name, category1) {
        const EventResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${name}&sort_by=${this.sortBy}&categories=${category1}&token=${this.token_authentication}`);
    }


    async getCategoriesAPI() {
        const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_authentication}`);

        //Converting the categoriesResponse as JSON

        const categoriesData = await categoriesResponse.json();

        return {
            categoriesData
        }
    }
}
