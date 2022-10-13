# YoursTruly (yrztruly.com) Planning/Progress Log

#### By Todd Pangilinan

A react app to help you say that special thing to that not-so-special someone.



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
* Tues, 9/6 & Weds, 9/7: started building framework of App, mainly following Epicodus lessons.
* Thurs, 9/8: continuing build/following lessons. 
    * Got to adding an image and decided to trying style components to control banner image size. [This stackOverflow helped](https://stackoverflow.com/questions/60717004/how-to-change-image-src-using-props-with-styled-component-and-react), showed how you could provide a default prop value in the case a src prop isn't passed when in use.
* Fri, 9/9: continuing build, planning on having basic skeleton built out, then will create branch before switching to hooks. Hopefully will get to that point by Sunday.
* Tues, 9/13: got details portion up and running, as well as shared form.
* Weds, 9/14: got CRU functionality.
* Thurs, 9/15: switched projects to hooks.
* Mon, 9/19: got full CRUD working. Started working on Firebase. 
* Tues, 9/20: completed hooks and initial firebase connection under "hooks" branch. merged that to main branch once it was working, and created a save point branch of "preAuth".
* Thurs, 9/22: connected app to firebase. Looking into how to handle roles- I want to have three tiers- unathenticated user (can request/read single greetings), authenticated user (can request/read single greetings, can create suggestion, maybe can up/down vote), admin with full CRUD ability. Looking into how to set up authorization, not well covered in cirriculum. Seems like I need to have custom claims and provide auth token. this video was a good starting point (need to re-watch):  https://www.youtube.com/watch?v=3hj_r_N0qMs

* Fri, 9/23: Decided to try to figure out the checkboxes. started Checkbox branch, and looking into how it works...following links are helpful, but trying to figure out if it's over kill or not:

http://react.tips/checkboxes-in-react/

https://www.robinwieruch.de/react-checkbox/

https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/

* Sunday, 9/25: research, not a lot of coding. Decided to keep working on checkboxes and fell down a rabbit hole. Seems like I should have a controlled form/fields. Here's what I watched:

https://www.youtube.com/watch?v=IkMND33x0qQ

https://www.youtube.com/watch?v=IsnOTmB88tE

https://www.youtube.com/watch?v=-KBS93RlUCY

read:

https://medium.com/programming-essentials/how-to-manage-a-checkbox-with-react-hooks-f8c3d973eeca

https://stackoverflow.com/questions/68962452/how-can-i-get-the-value-of-the-checkbox-to-be-saved-in-the-firestore/68963758?noredirect=1#comment121880466_68963758

* Monday, 9/26 : more research, started to at least put some code in. Talked over process with instructor Christy at class, got some good feedback/advice.
* Tuesday, 9/27 : implemented the checkboxes, merged checkbox branch to main.
* Weds, 9/28 : established API branch, going to try to get a page/feature that pulls API information of the day's celebrity birthdays. This site has the right kind of birthdays, but only returns today's birthdays: 

https://celebritybucks.com/developers/birthdays/JSON

* Thurs, 9/29 : figured out dropdown component, started building landing page.
* Friday, 9/30 : continued building landing page.
* Sunday, 10/2 : Ugh, realzied I needed data to be stored in Firestore insde of arrays (were strings). Refactored inputs and displays to work correctly.
* Monday, 10/3 : double ugh. I thought I need to make a database querry to get a random entry back...realized I can just use state. Could have kept strings. Anyway, refactored everythign to work. Figured out methods to filter entries via user input and how to display it on landing page.
* Tuesday, 10/4 : Spent a lot of time figuring out how to get a user's display name entred into Firebase. Finally got it working. Now need to figure out how to add it automatically to a new entry.
* Weds, 10/5: figured out how to automatically add username to entry, also got it to display on entries. Now working on getting "approved" field in new sign up form...then need to figure out how to get an admin vs. signed in user.
* Thurs, 10/6: Decided to scrap the admin user for the time being...too complicated for my timeframe if I'm going to continue with firebase authoriziation (which I am). Worked on Navbar and conditional rendering which quickly turned into using Context for keeping track of authorizaiton. Got that working with the help of this article:

https://lo-victoria.com/introduction-to-react-context-api-with-firebase-authentication

* Fri, 10/7: did a lot of conditional rendering with buttons (ie, if you're logged in, you can see certain buttons.) Also re-worked the general flow of GreetingControl. Still have an issue with the home button not working the way I want. Might need to refactor that into something a little different. Also strongly considering putting a filter control at the top of Greeting list. Priorities for tomorrow are:
1) styling- prob try 
2) deploying
3) tweaking/adding features
* Sat, 10/8: Did a lot of work on the Navbar to get it working the way I wanted. Ended up moving it out of the Header and into the other components (easier to manage props.). Also created search filter for greeting list. Started styling/working with MUI.
* Sun, 10/9: Finished "styling" (more to go...more to learn abotu MUI). Made some tweaks to the navbar to make it more functional. Started to try to deploy it, ran out of time before presentations.
*Monday, 10/10: Got it deployed to Firebase. Connected it to the custom domain, but the https stuff is gonna take a while. That was most of the day- played with some images, but ultimately didn't add. Minor tweaks/thinking about what next. Def want to refactor some elements to be more modular (dropdown menu, buttons). Also want to add some more features.
* Tues, 10/11: refactored the dropdown menu/filter into a reusable compoent. Made a few text tweaks. Working on buttons next.
* Weds, 10/12: added a timestamp attribute when a new entry is added. Trying to figure out how to change all old entries...but scared I might blow up the database. Looking into local emulator product from firebase.



## Known Bugs 
* As of 10/09/2022, no known bugs
* email pang.todd@gmail.com if you notice any problems or have feedback

## License

[MIT](https://opensource.org/licenses/MIT)
Copyright (c) Todd Pangilinan 

## Contact Information
pang.todd@gmail.com