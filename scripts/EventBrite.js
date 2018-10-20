class eventBrite {
    
    constructor(){
        this.token_authentication = 'MSNWHMORIZCPIYNABE7K';
    }
    
    
    //getting the categories from the API
    
   async getCategoriesAPI(){
        const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_authentication}`);
        
        //Converting the categoriesResponse as JSON
        
        const categoriesData = await categoriesResponse.json();
        
        return {
            categoriesData
        }
    }
    
    
}