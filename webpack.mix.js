let mix = require('laravel-mix');

mix
	.sass('src/style.scss', 'dist/')
	.sass('src/style-bonus.scss', 'dist/');
