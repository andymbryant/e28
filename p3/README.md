# Project 3
## Great British Bake-off Recipes
+ By: *Andrew Bryant*
+ Production URL: <http://e28p3.vueserver.com>

This is a website for recipes from the best television show ever: Great British Bake-off. In this version, you are automatically logged in as Jill Harvard, whose 'favorites' and 'cart items' can be seen on the recipe cards (color icons) and in Favorites/Cart views. On the Home view, filter the items by category or click them for more information.

## Pages summary
- Home
- About
- Favorites
- Cart
- Forbidden
- Login
- Register
- 404

## SFC summary
(I am excluding the 'views' listed above)
- Masthead.vue
- Navbar.vue
- NavItem.vue
- RecipeCard.vue
- RecipeList.vue

## Server interaction
All server interaction takes place via the api module, instantiated and bound to the application in main. On mount, the application logs into the server via the /login endpoing and persists relevant user information in localStorage. This is retrieved for display in the application and when the user navigates to views that use data from the server: Favorites and Cart. But for server authentication, axios uses the cookie set by the server on authentication.

## Outside resources
- [Font Awesome](https://fontawesome.com/icons?d=gallery)
- [Google Fonts Webpack Plugin](https://www.npmjs.com/package/google-fonts-webpack-plugin)

## Notes for instructor
Things that I wish I had time to improve:
- The app is not updating properly when login occurs (user must refresh the page). I can fix this with a forced update or a better understanding of how the components are dependent on the data that's being changed. More to do here.
- Styling! I don't like the look of the site. There is much more I can do here.
- More form validation (and styling). The auth forms (login, register) are pretty bare bones.
- Cart display. Items should be added together by type, amount, etc. Now it is just a list of everything without any styling.
- Make some of the code more efficient, less brittle. I should build new endpoints on the server to do retrieval (e.g. getFavoriteRecipes) rather than doing data formatting on responses from existing endpoints.

Thank you!
