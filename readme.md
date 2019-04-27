# Courier Api System

Github: https://github.com/iammadab/courier_api
Heroku: https://courierapi.herokuapp.com/

Specification: https://github.com/iammadab/courier_api/blob/master/specification.md

### Packages Used
* Third Party
  * express
  * mongoose
  * body-parser
  * cors
* My Modules
  * lazy-error
  * validator

## Code Structure / Patterns

For better organization, I divided the application into resources and each resource has corresponding actions that act on it.

Each resource has its own folder.
Each action is a seperate file in that resource folder.

Now for the actions, inside each file I splitted it into two functions.
* One to handle the route (route)
* One to handle the functionality (fn)

The route function depends on the functionality function. I did this because based on experience some of functionalities require other functionalities to be called first and if I don't the only point of access to a functionality is trhough a route, I won't be able to reuse functionality

I also use a validator at the start of each route to make sure that I get the correct values before I pass them down to my functions. This makes my code cleaner because my functions don't have to care about whether the data is in the right format or not. The validator takes care of that.

