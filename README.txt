This project is a landing page for a shoe company. 
The page uses white, grays, and blacks for its colors.
The project uses HTML5, CSS3, JavaScript (ES6), jQuery.js, and React.js.

ShoeCompany.html:
- simple index page that uses many script tags to incorprorate React.js 
- script tag at bottom that manipulates the DOM through ReactDOM.render()
- also contains few lines of jQuery with querySelector

images (folder):
- contains images for web page

Shoe.css:
- CSS styling that uses shadows, flex box, and other general css concepts. 

Navbar.js:
- A navigation bar react component.
- Uses 2 flex containers for the Navbar.

ShoeCard.js: 
- A react component to display all kinds of shoes. 
- Uses props to maniuplate each instance of a ShoeCard react component.
- All ShoeCard components are the same 
    but can easily be changed by passing different properties in MainContent.js.

MainContent:
- A react component to display the main part of the page.
- Uses <ShoeCard /> calls to render shoe components and with different properties.

Footer.js:
- A footer react component.
- Like the Navbar, the Footer component also uses 2 flex containers. 
- The first flex container contains 3 flex containers with flex direction of column.
