# Ticket World

## Introduction

This is a project which displays the events from the EventBrite Rest API. The events so being displayed are being 
filtered by the category and the name of the event being specified.
When one chooses the right event corresponding to a category a list of events will be displayed.
The cards so displayed will have :
```
1. The image of the event. 
2. Heading providing the name of the event.
3. A small description of what the event is all about.
4. The capacity depicting whether the tickets are available or are booked.
5. A link directing to the site for booking the tickets for the respective event.
```
Therefore based on the events one can select for which to book the tickets.

In the project I have added two more pages which tell about myself and my other projects.

### Prerequisites
For running the project successfully one will need a source code editor with a powerful developing tool.
I preferably use Visual Studio Code. Atom, Brackets or any other will also work.

Make sure that the editor has a live server available.

Also one will have to make an account at [Eventbrite](https://www.eventbrite.com/developer/v3/). The steps to make an account and use the token to make the project work are listed below.

### Steps


#### Creating the account and creating the app.

```
1. Click on the sign-in option at the top of the page.
2. Go back to the page opened before and now again click on your sign-in profile. Click on account settings.
3. On the page opened on the left pane click on App Management.
4. Now click on Create New App button at the top right corner.
5. Now fill the necessary information and in the Application URL follow the steps listed in the next section.
6. Give a name to your application and give a description for why do you want to use it.
7. After agreeing the terms and conditions click on 'CREATE KEY' option.

```

#### Setting the Application URL


```
1. Open the project in the source editor.
2. Go to the main index.html file of the project.
3. Open the file in browser using the live server of the source code.
4. Copy the url of the page that has opened in the browser.
5. Paste it in the field.  
```

#### Using the token 


```
1. Open the same page where you created the new app for your account.
2. Click on 'Show Client Secret and OAuth Token'.
3. From the list that appears there'll be an option as 'Your personal OAuth token'.
4. Copy the toke that has been provided.
5. Open the project and go to eventBrite.js file.
6. On line 4, assign the token value to token authentication variable.
7. Great your work is done here.
```

## Running the program

Open the main index.html file in the source editor and in the field enter the name for which you want to search the event and from the categories available in the dropdown select your respective category.

Click on 'Search' button to search for the following category.
A list of column cards will appear to choose from.


## Authors

* **Suyash Awasthi** - *Initial work* - [suyash2810](https://github.com/suyash2810)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Suyash2810/Ticket-World/blob/master/LICENSE) file for details

