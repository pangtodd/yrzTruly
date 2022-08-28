# YoursTruly (yrztruly.com)

#### By Todd Pangilinan

A react app to help you say that special thing to that not-so-special someone.

## Technologies Used

* React
* JavaScript
* NPM
* HTML
* CSS

## Description:
At the workplace, has someone passed you an evelope with a birthday card and you draw a blank on what to say? Maybe you notice how creative Bob's note was, and you feel pressure to write something witty. Instead of agonizing over what to say or worse, just signing your name with a lame, "happy birthday", you can visit Yours Truly (yrztrly.com) for some inspiration. 

Yours Truly is a web app that maintains a database of messages for common greeting cards. It allow users to browse differ catagories and get messages they can borrow or modify to help get that card signed fast- with a memorable message that will make them seem like they actually care. It is a React-based app that (hopefully) provides authentication and users CRUD functionality.

The following user stories were considered in planning this app:

* As a user, I want to see suggestions on what I could write in someone's card.
* As a user, I want to be able to add suggesitions to the database.
* As a user, I want to be able to upvote suggestions I like and downvote suggesions I don't.
* As a user, I want to be able to log in and flag suggestions as inappropriate.
* As a user, I want to be able to log in and provide a suggestion.
* As a user, I want to be able to see different suggestions based on the tone of message I want, and the relationship I have to the person.
* As an admin, I want to full CRUD access to messages.

## diagram of the app

![TBD, y'all!]()

## Setup/Installation Requirements

* If you don't have Git installed on your machine, follow these [instructions.](https://www.learnhowtoprogram.com/introduction-to-programming/getting-started-with-intro-to-programming/git-and-github)
* Via your terminmal, navigate to the directory you want to store my files in.
* Clone my git hub directory by typing or cutting pasting: "git clone https://github.com/pangtodd/exchange_rate.git" into your terminal.
* open files in a code editor of your choice.
* NOTE: this project was created in a Mac environment. There may be minor changes if you use a PC.
* open terminal or bash, and navigate to the root level of the project, enter "npm install".
* After the dependencies have been loaded, in the terminal, run "npm run start". This should bring up a browswer to localhost3000 and start the app.
* hopefully I'll get this project deployed, but we'll see!

## Research & Planning Log
* Friday, 8/26: repossible website names. Seems like yrztruly.com is available.
* Saturday, 8/27: light research on hosting: Saw article that Heroku was closing. Already have a Nefliy account, [this article](https://www.freecodecamp.org/news/how-to-deploy-a-react-application-to-netlify-363b8a98a985/) might be useful if I get to that point.
* Saturday, 8/27: API research:
  * Celebrity birthdays:
    * API ninja: https://api-ninjas.com/api/celebrity
    * someone scraped famousbirdays.com and made an API https://github.com/daxeel/CelebInfo-API
    * Wikipedia interface...might be helpful for both this day in history, births, and deaths for a particular day (https://api.wikimedia.org/wiki/API_reference/Feed/On_this_day)
  * day in history
    * see the wikipeida interface.
* Saturday, 8/27: did the homework RE: Firebase/Firestore, in case a SQL database might work better, started looking into connecting React with Ruby. Seems like you mainly just set up your DB and then set it up as an API. Links:
  * https://www.microverse.org/blog/how-to-connect-ruby-on-rails-with-react-to-create-responsive-apps
  * https://medium.com/swlh/how-to-use-rails-backend-with-react-frontend-8cc81302eb63
* Saturday, 8/27: more videos about connecting DB to React (this one uses Firebase):
  * https://www.youtube.com/watch?v=HVdMhKN2ng4
* Saturday, 8/27: Spent some time planning priorities:
    * figure out database. We're covering this in class this section, but preparing some plan b stuff just in case.
    * figure out authentication, that will be importat for offering CRUD functionality. In this week's lesson!
    * Once I know how to do those things, should be able to start building a bare-bones site with MVP.
    * after that, lay in MVPs as time permits.
* Saturday, 8/27: started researching authentication, even though we'll be covering it in class, started with [this article](https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications)
    


## Known Bugs 
* As of 8/27/2022, no known bugs
* email pang.todd@gmail.com if you notice any problems or have feedback

## License

[MIT](https://opensource.org/licenses/MIT)
Copyright (c) Todd Pangilinan 

## Contact Information
pang.todd@gmail.com