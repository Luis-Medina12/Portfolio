# This is my portfolio project that will be deployed using GitHub Pages

It consists of (at this point) 3 pages: About Me, Target App, and Saurian App. I consider these two projects my most interesting, so they will remain center stage while other projects will be placed in a drop-down menu. 

## Target Better Price App

This application will take in 3 variables from the user and use them to determine where the user can find their product the cheapest/closest. The purpose of this application is to help the user save money when wanting to buy big ticket items from Target and wanting to save some money at the same time. Eventually, the application will have the ability to take in multiple products and find stores with all/most products within the given distance.

This application will leverage 2 APIs: a Target API meant to search for locations/products, and a Tax-rate API to determine the effective tax rate at each location.

## Saurian Translator

This application will take an input from the user, and then translate it to/from the fictional language Saurian. The application can partially identify proper nouns and will eventually have the ability to let the user identify proper nouns. 

The Saurian language comes from a video game called Star Fox Adventures. A language created to be spoken by the inhabitants of an all-dinosaur planet simply called Dinosaur Planet. The language itself is a simple cipher language.

## What I've Learned

Working on this project I've gained a further understanding of developing the front end of applications. Specifically, how to use the React Router to switch between each page. 

Something I'm still working on is centralizing the different styles of each page, as currently they are a bit scattered. I am also continuously learning how to make the pages themselves look more concise and pretty for the user. 

## Issues I've ran into along the way

#### On the Target App
The project is mostly functional at this point but I’m having issues with the speed at which it calls the APIs and the usage of google maps. On the API side, the program is exceeding the call time limit of the Target API resulting in errors. One possible solution is to set an interval between calls, or simply create a file containing pre-determined data. I may go down the pre-determined data route as it will make it easier to demo the project. On the google maps side, I have been unable to determine what is causing it to error out and subsequently crash the program, so until then it will simply display the list of the results. 


#### On the Saurian App
This project has been easy to work with due to the simple nature of it. Most of the issues I ran into were UI/UX related and were inevitably resolved by further expanding my knowledge of front-end development. At some point I would like to make the UI on the input box and buttons to be a bit "prettier", but for now the simple layout works.

#####(04/23/23)
I have completed the partial noun recognition, but not withotu encountering a few issues. Thinking of a way to avoid detection of capitalized words at the beginning of a sentance was the biggest challenge. It turns out  I was overthinking the whole thing and a simple if statement solved the issue.
