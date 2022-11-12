# Recipe App (React)

## Login
- Email: mail@mail.com
- Password: 123


## Table of contents

- [Overview](#overview)
  - [Description](#description)
  - [Project Skeleton](#project-skeleton)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)


## Overview

### Description
This project aims to view recipes and content using the Edamam Recipe Search Api. There is a search feature according to the entered word.The application is started with the login page. The login page background is  using a random image. On the login page, mail and password are stored in localstorage by default. It checks the password from localstorage with the e-mail entered, if it is correct, it redirects to the home page, and if it is wrong, it gives an alert.  This project uses "<i>styled-components</i>".



### Project Skeleton

```
recipe-app (folder)
       public(folder)
           |----index.html 
       src (folder)
           |----app.js 
           |----app.css 
           |----index.js
           |----index.css 
           assets (folder)
                |----food-truck.gif
                |----loading.gif
                |----paper-bag.gif
           components (folder)
                header (folder)
                      |----Form.jsx
                      |----Header.jsx
                      |----Header.styled.jsx
                
                navbar (folder)
                      |----Navbar.jsx
                      |----Navbar.styled.jsx
           pages (folder)
                about (folder)
                      |----About.jsx
                      |----About.styled.jsx
                contact (folder)
                      |----Contact.jsx
                      |----Contact.styled.jsx
                details (folder)
                      |----Details.jsx
                      |----Details.styled.jsx
                home (folder)
                      |----Home.jsx
                      |----Home.styled.jsx
                      |----RecipeCard.jsx
                login (folder)
                      |----Login.jsx
                      |----Login.styled.jsx
           router (folder)
                |----AppRouter.jsx
               
```

### Screenshot

<p align="center">
<a href="https://reactjs-recipe-appv1.vercel.app/"><img src="movie.gif" alt="screenshot" width="100%"></a>
</p>


### Links

- Live: [Live Website](https://reactjs-recipe-appv1.vercel.app/)


### Built with

- REACT.JS
- JAVASCRİPT
- HTML5
- Styled-Components
- Responsive Design
- React-router-dom
- React-icons
- Axios
