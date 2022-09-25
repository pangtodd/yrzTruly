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


## Known Bugs 
* As of 8/27/2022, no known bugs
* email pang.todd@gmail.com if you notice any problems or have feedback

## License

[MIT](https://opensource.org/licenses/MIT)
Copyright (c) Todd Pangilinan 

## Contact Information
pang.todd@gmail.com