Test task
developer: Valentyna Baranova
Time spent on execution: 20 hours.

The application must use Redux
to install the library, depending on the package manager, use:
$ yarn add redux react-redux redux-thunk redux-devtools-extension
$ npm install redux react-redux redux-thunk redux-devtools-extension

Data for display is taken from the JSONPlaceholder service. The axios library is used to obtain data. https://www.npmjs.com/package/axios
to install the library, depending on the package manager, use:
$ yarn add axios
$ npm install axios

To display data in tabular form, the react-data-table-component library is used, which requires the styled-components library
to install the library, depending on the package manager, use:
$ yarn add styled-components react-data-table-component
$ npm install styled-components react-data-table-component

The react-modal component is used to display the table field settings dialog
to install the library, depending on the package manager, use:
$ yarn add react-modal
$ npm install react-modal

To display icons
$ yarn add react-icons
$ npm install react-icons


Drag and drop is used to adjust the table fields

How it works:
The application takes user data from the JSONPlaceholder service and displays them in the form of a table. (unfortunately, the service allows you to receive only 10 user records, so pagination is impossible, but pagination is functionally provided).
To define the fields of the table to be displayed, there is a window for settings. Where you can drag and drop to set the fields that will be displayed. Predictive field search. Defined fields are displayed by default, but the list of fields can be changed.
It should be noted that the logic assumes that at least one field should be in the table.

To install and work with the application, you need to copy it to a disk, open it with a development environment such as VS Code, and execute the command in the console depending on the package manager:
npm install
yarn add

To start the project in the console, execute the command depending on the package manager:
npm start
yarn start

To get the version for deployment in the console, execute the command depending on the package manager:
npm build
yarn build
Upload the received build folder to the server.