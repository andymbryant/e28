# Project 2
## Great British Bake-off Recipes
+ By: *Andrew Bryant*
+ Production URL: <http://e28p2.vueserver.com>

This is a website for recipes from the best television show ever: Great British Bake-off. In this version, you are automatically logged in as Jill Harvard, whose 'favorites' and 'cart items' can be seen on the recipe cards (color icons) and in Favorites/Cart views. On the Home view, filter the items by category or click them for more information.

## Pages summary
- Home
- About
- Favorites
- Cart

## SFC summary
(I am excluding the 'views' listed above)
- Masthead.vue
- Navbar.vue
- NavItem.vue
- RecipeCard.vue
- RecipeList.vue

## Server interaction
All server interaction takes place via the api module, instantiated and bound to the application in main. On mount, the application logs into the server via the /login endpoing and persists relevant user information in localStorage. This is retrieved for display in the application and when the user navigates to views that use data from the server: Favorites and Cart. When either of these is accessed, the token is retrieved from localStorage and bound to the Authorization header in an axios call, which gets the relevant information.

The Home view retrieves the recipes from the server, which is not protected.

## Outside resources
- [Font Awesome](https://fontawesome.com/icons?d=gallery)
- [Google Fonts Webpack Plugin](https://www.npmjs.com/package/google-fonts-webpack-plugin)

## Notes for instructor
This is a work-in-progress. In the next iteration, I will:
- Update styling. Fonts, colors, imagery, and layout need some love.
- Improve the Cart view. It's difficult to read, the items cannot be removed or updated in any way, the units do not add up, etc.
- Add authentication and the app functionality associated with it, such as adding favorites, adding personal recipes, logout, etc.

Thank you!
