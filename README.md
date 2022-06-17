# Front-End Take-Home Challenge

## Available Scripts

### Installation

In the project to install the dependencies, you can run:

### `npm install`

To run the project, you can:

### `npm start`

Runs the app in the development mode. 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Description
The Front-End Take-Home Challenge is a workflow editor that enables researchers to translate a scientific process into an application workflow. 

## Scope
The Routine Pipette Check and Calibration app checks if the pipette is dispensing the same amount of liquid each time. It provides a visual representation of an SOP as a workflow. **The requirements of the application are met as the current application has an interactive UI, provides the workflow for the procedure, captures the data, records the values in the tables and documents it.**

The users can view the routine pipette check and calibration workflow interactively. They can **add a new block and extend the workflow** from the last workflow block. The next block will be connected with edges. A new block can be added by entering the name/details of the next step of the workflow block in the provided text field and by clicking on the append workflow button. The workflow can also be **locked, fit to view and zoomed in and out.** These features make the workflow UI interactive for the users. There is also a **mini map of the workflow page** which displays the whole viewing pane.

Furthermore, **The test volumes are captured in the data table** and according to the procedure steps mentioned in the challenge document. The user can record the data a total of 5 times. **The test volume has also been made interactive**, so that for each dispense a new dispense volume can be captured in the data table.

In addition to the above mentioned points, **the application automates and documents the mean, std. deviation, precision and accuracy** using the 5 data values recorded in the data table of the weight of water.

### ***Pertinent information:***

* **Material UI** is used for developing the UI.

* **React Flow library** is used for developing the workflows.

* The state of application is managed by using the react **context API**.

* Error Handling is done using **react-error-boundary.**


### ***Future Enhancements:***
If I had more time to spend, I would have liked to enhance the solution further by adding feature such as:

* Automating the workflow by reading the procedure document file in a specific format such as a pdf document where the users add the procedure document into the system and it automatically creates workflows for them.

* Currently the users are only allowed to extend the current workflow, so **I would add a feature where they can edit the already created workflows.**

* The **deletion of the workflow components** is not covered in the scope as the task requires to have a minimal interactive feature which is covered by the extension of current flow via the UI.

* I would add the functionality to delete the workflow components and try to **find a way to drag the workflow components**.

* Add a feature that can add a workflow component anywhere in the workflow. For example: A Linked array

* Designing and improving the UI.

* Adding tests

* Improved Error Handling

### ***Time Taken:***

To develop the solution, it took me around **9 hours** because for the development of the workflow, **I did R&D to find an optimal solution for efficient and consistent workflow and found “React Flow” library.** The React flow library is suitable for our requirements as it is making the UI interactive and provides features such as:

*	Easy to use
*	Customizable
*	Fast rendering
*	Hooks and Utils
*	Plugin Components: Background, MiniMap and Controls
*	Reliable: Written in Typescript and tested with cypress

In addition to these user experience features it also includes: seamless zooming & panning, customizable node and edge types, single and multi-selection, several event handlers and more.

## Screenshots of the application

* 1)Workflow:
![Workflow](https://user-images.githubusercontent.com/67166880/174310945-d36c015e-df15-4f8b-b301-5833d7a65ed7.PNG)
* 2)Data Table & Append Workflow:
![Data Table](https://user-images.githubusercontent.com/67166880/174311804-110b3d8a-6621-4758-b6b0-33ee32b228c6.PNG)
* 3)Formula Table:
![Formula Table](https://user-images.githubusercontent.com/67166880/174311989-4c19da2f-0000-4d35-9785-a24d80aa256d.PNG)

## Useful Links

[React Flow](https://reactflow.dev/)

[Material UI](https://mui.com/)

[react-error-boundary](https://reactflow.dev/)
