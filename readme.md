# Routing Practice! 🐰

![:image](http://www.alice-in-wonderland.net/wp-content/uploads/1book41.jpg)

Let's practice routing HTTP requests with our server.

Write a node application that uses the express module to 
route the following requests and return valid HTTP responses.

# Setup

```
$ npm init -f
$ npm install --save express
$ touch server.js
```

### Welcome

> route the following requests 

When a user visits the root of your application 
the user should see...
- the text "Hello and Welcome!" and a 
- link with the text "Right this way"

When a user clicks on "Right this way"
- the URL should change to "/rabbit_hole" and 
the user should see...
- the text "I'm running late!" and a
- link with the text "Off with their head!"

When a user clicks on "Off with their head!"
- the URL should change to "/off_with_their?part=head" and
the user should see...
- "Off with their head!"

If a user changed the URL in the url bar to "/off_with_their?part=[ANY]" 
for example "/off_with_their?part=pants" 
then the user should see...
- "Off with their pants!"

When a user visits "/characters/hatter"
the user should see...
- the text "have a cuppa"

When the user visits "/characters/queen"
then the URL should change to "/off_with_their?part=head"
and the user should see...
- "Off with their head!"

When the user visits "/elevator" then
- they should see an input field and
- they should see a button that says "Go!"

When the user enters a number (let's say 5) in the input field and
- clicks "Go!"
- the url should change to "/floor?number=5"
- and the user should see "Floor number 5"

When the user visits "/characters/cheshire_cat" then
- they should see an input form and radio buttons
- and the buttons should say "show" and "hide"
- and a button that says "submit"

When a user selects "show" and clicks "submit"
- then a POST request should be sent to "/dumb_waiter"
- and then we should redirect to "/curious?visit=show"
- and we should see the text "=^..^="

When a user selects "hide" and clicks "submit"
- then a POST request should be sent to "/dumb_waiter"
- and then we should redirect to "/curious?visit=hide"
- and we should see the text ":)"

# Resources and Readings

- Static files in Express https://expressjs.com/en/starter/static-files.html
- HTML Forms and POST requests?! https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
- Request data in the body of a request?! https://expressjs.com/en/api.html#req.body
- Anatomy of an HTTP transaction https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
- Express is middleware!? http://expressjs.com/en/guide/using-middleware.html

