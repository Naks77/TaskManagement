const mix = require('laravel-mix');

/*
|----------------------------------------------------------------------------
| Mix Asset Management
|----------------------------------------------------------------------------
|
|Mix provides a clean, fluent API for defining some webpack build steps
|for your laravel applications. By default, we are compiling the CSS
|file for the applicarion as well as bundling up all the JS files.
|
*/

mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css', {
      //
   });
