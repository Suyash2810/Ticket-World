class event_Brite{
    
    constructor(){
        this.token_authentication = 'MSNWHMORIZCPIYNABE7K';
    }
    
    
    //getting the categories from the API
    
    getCategoriesAPI(){
        const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_authentication}`);
    }
    
    
}