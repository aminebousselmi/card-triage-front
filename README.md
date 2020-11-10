# Patient Cards Triage

The goal of this project is to create a patient cards triage. This application allows a user to consult the patient cards list, filter them by name and arrythmias and change the card status from Pending or Rejected to Done and from Done to Rejected.

![alt text][screen]

[screen]: https://github.com/aminebousselmi/card-triage-front/blob/main/images/screen.png
# Features

  - users can consult the patient cards.
  - Users can edit the card status from Pending or Rejected to Done and from Done to Rejected.
  - Users can filter cards by patient name and arrythmias.

#### Sprint 1
During the first sprint I designed and developed these features : 
  - users can consult the patient cards.
  - Users can edit the card status from Pending or Rejected to Done and from Done to Rejected.

#### Sprint 2
Concerning this sprint I designed and developed these features : 
  - Users can filter cards by patient name and arrythmias.

# Installation & Usage

After downloading the project make sure you have installed all the requirements tools below:

* [React - 17.0.1] - React is a free JavaScript library developed by Facebook since 2013. The main purpose of this library is to facilitate the creation of single-page web applications.
* [Material-UI - 4.11.0] -  Material-UI is a library that uses Facebook’s react framework and exports a set of react components that follow the principals of Material Design.
* [Styled-components - 5.2.1] -  Styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier.
* [Typescript - 4.0.5] - TypeScript is a free and open source programming language developed by Microsoft that aims to improve and secure the production of JavaScript code. It is a strict syntactic superset of JavaScript.
* [Axios - 0.21.0] - Axios is a lightweight HTTP client based on the XMLHttpRequests service. It is similar to the Fetch API and is used to perform HTTP requests.
* [Jest - 5.11.5] - Jest is a JavaScript testing framework maintained by Facebook, Inc. designed and built to simplify and support large web applications.

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
```

You can now run the server using this command line : 
```sh
$ npm start
```
Please note that server is running on port 8000. you can change the port in the package.json file in the scripts section.

   [React - 17.0.1]: <https://fr.reactjs.org/>
   [Material-UI - 4.11.0]: <https://material-ui.com/>
   [Styled-components - 5.2.1]: <https://styled-components.com/>
   [Typescript - 4.0.5]: <https://www.typescriptlang.org/>
   [Axios - 0.21.0]: <https://www.npmjs.com/package/react-axios>
   [Jest - 5.11.5]: <https://jestjs.io/docs/en/tutorial-react>
 
### Components description

This section contains components description of this app.

| Component | description |
| ------ | ------ |
| Card | CardComponent contain a card informations for a single patient |
| CardList | CardListComponent contains a list of cards in one single side |
| FilterCard | FilterCardComponent is a filtering system by patient name and arrhythmias |
| Menu | A Menu component to better navigation it could be very useful if our app handle many routes  |
| Spinner | Spinner to ensure better user experience |
| ButtonContainer | ButtonContainerComponent contains the buttons to handle data from left to right side and vice-versa |

### Workspace

This is the tools I used during the development of this app :

| Workspace & Tools | Link |
| ------ | ------ |
| Visual Studio Code | [https://code.visualstudio.com/][PlDb] |
| Chrome DevTools | [https://developers.google.com/web/tools/chrome-devtools][PlGh] |
| git | [https://git-scm.com/][PlGd] |

### Conclusion

If you find a bug don't hesitate to contact me or fix it.
Want to contribute ? Great ! Please fork this project and add great features. Finally, don't forget to make a pull request :)

In order to improve this version of the project we can add a navigation system inside the card list in order to handle many cards.

I hesitated between choosing a drag and drag system or a classic card management system. The problem of drag and drog system that it's expensive in term of performance especially with react. We can migrate to this system but we must be sure that the performance is optimized.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
