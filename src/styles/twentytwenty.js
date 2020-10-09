export default `
/* ------------------------------------------- */

/*	Twenty Twenty Editor Styles — Block Editor
/* ------------------------------------------- */

:root {
	--wp--preset--color--primary: #cd2653;
	--wp--preset--color--background: #f5efe0;
	--wp--preset--color--foreground: #000;
	--wp--preset--font-size--small: 20px;
	--wp--preset--font-size--normal: 22px;
	--wp--preset--font-size--large: 37px;
	--wp--preset--font-size--huge: 50px;
	--wp--preset--line-height--normal: 1.8;
	--wp--preset--line-height--heading: 1.4;
	--wp--preset--font-weight--normal: normal;
	--wp--preset--font-weight--heading: 700;

	--wp--preset--color--black: #000;
	--wp--preset--color--cyan-bluish-gray: #abb8c3;
	--wp--preset--color--light-green-cyan: #7bdcb5;
	--wp--preset--color--luminous-vivid-amber: #fcb900;
	--wp--preset--color--luminous-vivid-orange: #ff6900;
	--wp--preset--color--pale-cyan-blue: #8ed1fc;
	--wp--preset--color--pale-pink: #f78da7;
	--wp--preset--color--vivid-cyan-blue: #0693e3;
	--wp--preset--color--vivid-green-cyan: #00d084;
	--wp--preset--color--vivid-purple: #9b51e0;
	--wp--preset--color--vivid-red: #cf2e2e;
	--wp--preset--color--white: #fff;
	--wp--preset--font-size--small: 13;
	--wp--preset--font-size--normal: 16;
	--wp--preset--font-size--medium: 20;
	--wp--preset--font-size--large: 36;
	--wp--preset--font-size--huge: 48;
	--wp--preset--gradient--blush-bordeaux: linear-gradient(
		135deg,
		rgb( 254, 205, 165 ) 0%,
		rgb( 254, 45, 45 ) 50%,
		rgb( 107, 0, 62 ) 100%
	);
	--wp--preset--gradient--blush-light-purple: linear-gradient(
		135deg,
		rgb( 255, 206, 236 ) 0%,
		rgb( 152, 150, 240 ) 100%
	);
	--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(
		135deg,
		rgb( 74, 234, 220 ) 0%,
		rgb( 151, 120, 209 ) 20%,
		rgb( 207, 42, 186 ) 40%,
		rgb( 238, 44, 130 ) 60%,
		rgb( 251, 105, 98 ) 80%,
		rgb( 254, 248, 76 ) 100%
	);
	--wp--preset--gradient--electric-grass: linear-gradient(
		135deg,
		rgb( 202, 248, 128 ) 0%,
		rgb( 113, 206, 126 ) 100%
	);
	--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(
		135deg,
		rgb( 122, 220, 180 ) 0%,
		rgb( 0, 208, 130 ) 100%
	);
	--wp--preset--gradient--luminous-dusk: linear-gradient(
		135deg,
		rgb( 255, 203, 112 ) 0%,
		rgb( 199, 81, 192 ) 50%,
		rgb( 65, 88, 208 ) 100%
	);
	--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(
		135deg,
		rgba( 252, 185, 0, 1 ) 0%,
		rgba( 255, 105, 0, 1 ) 100%
	);
	--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(
		135deg,
		rgba( 255, 105, 0, 1 ) 0%,
		rgb( 207, 46, 46 ) 100%
	);
	--wp--preset--gradient--midnight: linear-gradient(
		135deg,
		rgb( 2, 3, 129 ) 0%,
		rgb( 40, 116, 252 ) 100%
	);
	--wp--preset--gradient--pale-ocean: linear-gradient(
		135deg,
		rgb( 255, 245, 203 ) 0%,
		rgb( 182, 227, 212 ) 50%,
		rgb( 51, 167, 181 ) 100%
	);
	--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(
		135deg,
		rgb( 238, 238, 238 ) 0%,
		rgb( 169, 184, 195 ) 100%
	);
	--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(
		135deg,
		rgba( 6, 147, 227, 1 ) 0%,
		rgb( 155, 81, 224 ) 100%
	);
}

body {
	--wp--style--color--link: var( --wp--preset--color--primary );

	background: var( --wp--preset--color--background );
	color: var( --wp--preset--color--foreground );
	letter-spacing: -0.015em;
	-moz-font-smoothing: antialiased;
	-webkit-font-smoothing: antialiased;
}

body > * {
	font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica,
		sans-serif;
	font-size: var( --wp--preset--font-size--normal );
	font-weight: var( --wp--preset--font-weight--normal );
}

@supports ( font-variation-settings: normal ) {
	body > * {
		font-family: 'Inter var', -apple-system, BlinkMacSystemFont,
			'Helvetica Neue', Helvetica, sans-serif;
	}
}

.block-editor-default-block-appender
	textarea.block-editor-default-block-appender__content {
	color: inherit;
	font-family: inherit;
	font-size: inherit;
}

.block-editor-block-list__empty-block-inserter
	.block-editor-inserter__toggle:not( :hover ):not( :focus ),
.block-editor-default-block-appender
	.block-editor-inserter
	.block-editor-inserter__toggle:not( :hover ):not( :focus ) {
	color: inherit;
}

/* Fonts ------------------------------------- */

/*
 * Chrome renders extra-wide &nbsp; characters for the Hoefler Text font.
 * This results in a jumping cursor when typing in both the Classic and block
 * editors. The following font-face override fixes the issue by manually
 * inserting a custom font that includes just a Hoefler Text space replacement
 * for that character instead.
 */
@font-face {
	font-family: NonBreakingSpaceOverride;
	src: url(        data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMoAA0AAAAACDQAAALTAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGh4GYACCahEICjx3CywAATYCJANUBCAFhiEHgWwbXQfILgpsY+rQRRARwyAs6uL7pxzYhxEE+32b3aeHmifR6tklkS9hiZA0ewkqGRJE+H7/+6378ASViK/PGeavqJyOzsceKi1s3BCiQsiOdn1r/RBgIJYEgCUhbm/8/8/h4saPssnTNkkiWUBrTRtjmQSajw3Ui3pZ3LYDPD+XG2C3JA/yKAS8/rU5eNfuGqRf4eNNgV4YAlIIgxglEkWe6FYpq10+wi3g+/nUgvgPFczNrz/RsTgVm/zfbPuHZlsuQECxuyqBcQwKFBjFgKO8AqP4bAN9tFJtnM9xPcbNjeXS/x1wY/xU52f5W/X1+9cnH4YwKIaoRRAkUkj/YlAAeF/624foiIDBgBmgQBeGAyhBljUPZUm/l2dTvmpqcBDUOHdbPZWd8JsBAsGr4w8/EDn82/bUPx4eh0YNrQTBuHO2FjQEAGBwK0DeI37DpQVqdERS4gZBhpeUhWCfLFz7J99aEBgsJCHvUGAdAPp4IADDCAPCEFMGpMZ9AQpTfQtQGhLbGVBZFV8BaqNyP68oTZgHNj3M8kBPfXTTC9t90UuzYhy9ciH0grVlOcqyCytisvbsERsEYztiznR0WCrmTksJwbSNK6fd1Rvr25I9oLvctUoEbNOmXJbqgYgPXEHJ82IUsrCnpkxh23F1rfZ2zcRnJYoXtauB3VTFkFXQg3uoZYD5qE0kdjDtoDoF1h2bulGmev5HbYhbrjtohQSRI4aNOkffIcT+d3v6atpaYh3JvPoQsztCcqvaBkppDSPcQ3bw3KaCBo1f5CJWTZEgW3LjLofYg51MaVezrx8xZitYbQ9KYeoRaqQdVLwSEfrKXLK1otCWOKNdR/YwYAfon5Yk8O2MJfSD10dPGA5PIJJQMkah0ugMJiv6x4Dm7LEa8xnrRGGGLAg4sAlbsA07sAt76DOsXKO3hIjtIlpnnFrt1qW4kh6NhS83P/6HB/fl1SMAAA==        )
			format( 'woff2' ),
		url(        data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUQAA0AAAAACDQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE9AAAABwAAAAchf5yU0dERUYAAATYAAAAHAAAAB4AJwAbT1MvMgAAAaAAAABJAAAAYJAcgU5jbWFwAAACIAAAAF4AAAFqUUxBZ2dhc3AAAATQAAAACAAAAAgAAAAQZ2x5ZgAAApAAAAAyAAAAPL0n8y9oZWFkAAABMAAAADAAAAA2Fi93Z2hoZWEAAAFgAAAAHQAAACQOSgWaaG10eAAAAewAAAAzAAAAVC7TAQBsb2NhAAACgAAAABAAAAAsAOQBAm1heHAAAAGAAAAAHQAAACAAWQALbmFtZQAAAsQAAAF6AAADIYvD/Adwb3N0AAAEQAAAAI4AAADsapk2o3jaY2BkYGAA4ov5mwzj+W2+MnCzXwCKMNzgCBSB0LfbQDQ7AxuI4mBgAlEAFKQIRHjaY2BkYGD3+NvCwMDBAALsDAyMDKhAFAA3+wH3AAAAeNpjYGRgYBBl4GBgYgABEMnIABJzAPMZAAVmAGUAAAB42mNgZlJhnMDAysDCKsKygYGBYRqEZtrDYMT4D8gHSmEHjgUFOQwODAqqf9g9/rYwMLB7MNUAhRlBcsxBrMlASoGBEQAj8QtyAAAAeNrjYGBkAAGmWQwMjO8gmBnIZ2NA0ExAzNjAAFYJVn0ASBsD6VAIDZb7AtELAgANIgb9AHjaY2BgYGaAYBkGRgYQSAHyGMF8FgYPIM3HwMHAxMDGoMCwQIFLQV8hXvXP//9AcRCfAcb///h/ygPW+w/vb7olBjUHCTCyMcAFGZmABBO6AogThgZgIUsXAEDcEzcAAHjaY2BgECMCyoEgACZaAed42mNgYmRgYGBnYGNgYAZSDJqMgorCgoqCjECRXwwNrCAKSP5mAAFGBiRgyAAAi/YFBQAAeNqtkc1OwkAUhU/5M25cEhcsZick0AwlBJq6MWwgJkAgYV/KAA2lJeUn+hY+gktXvpKv4dLTMqKycGHsTZNv7px7z50ZAFd4hYHjdw1Ls4EiHjVncIFnzVnc4F1zDkWjrzmPW+NNcwGlzIRKI3fJlUyrEjZQxb3mDH2fNGfRx4vmHKqG0JzHg6E0F9DOlFBGBxUI1GEzLNT4S0aLuTtsGAEUuYcQHkyg3KmIum1bNUvKlrjbbAIleqHHnS4iSudpQcySMYtdFiXlAxzSbAwfMxK6kZoHKhbjjespMTioOPZnzI+4ucCeTVyKMVKLfeAS6vSWaTinuZwzyy/Dc7vaed+6KaV0kukdPUk6yOcctZPvvxxqksq2lEW8RvHjMEO2FCl/zy6p3NEm0R9OFSafJdldc4QVeyaaObMBO0/5cCaa6d9Ggyubxire+lEojscdjoWUR1xGOy8KD8mG2ZLO2l2paDc3A39qmU2z2W5YNv5+u79e6QfGJY/hAAB42m3NywrCMBQE0DupWp/1AYI7/6DEaLQu66Mrd35BKUWKJSlFv1+rue4cGM7shgR981qSon+ZNwUJ8iDgoYU2OvDRRQ99DDDECAHGmGCKmf80hZSx/Kik/LliFbtmN6xmt+yOjdg9GztV4tROnRwX/Bsaaw51nt4Lc7tWaZYHp/MlzKx51LZs5htNri+2AAAAAQAB//8AD3jaY2BkYGDgAWIxIGZiYARCESBmAfMYAAR6AEMAAAABAAAAANXtRbgAAAAA2AhRFAAAAADYCNuG        )
			format( 'woff' );
}

/* Structure --------------------------------- */

.wp-block {
	max-width: 610px;
}

.wp-block[data-align='wide'] .wp-block[data-align='wide'],
.wp-block[data-align='full'] .wp-block[data-align='wide'] {
	max-width: 1200px;
}

.wp-block
	.wp-block[data-type='core/group']:not( [data-align='full'] ):not( [data-align='wide'] ):not( [data-align='left'] ):not( [data-align='right'] ),
.wp-block
	.wp-block[data-type='core/cover']:not( [data-align='full'] ):not( [data-align='wide'] ):not( [data-align='left'] ):not( [data-align='right'] ) {
	margin-left: auto;
	margin-right: auto;
	max-width: 610px;
}

.wp-block .wp-block[data-align='full'] {
	margin-left: 0;
	margin-right: 0;
}

*[data-align='right'] .wp-block-edit,
*[data-align='left'] .wp-block-edit {
	max-width: 50%;
}

.wp-block[data-align='wide'] {
	max-width: 1200px;
}

.wp-block[data-align='full'] {
	max-width: none;
}

.editor-rich-text__tinymce,
.editor-rich-text__tinymce.mce-content-body {
	line-height: var( --wp--preset--line-height--normal );
}

/* Font Families ------------------------------ */

p,
ol,
ul,
dl,
dt {
	font-family: NonBreakingSpaceOverride, 'Hoefler Text', Garamond,
		'Times New Roman', serif;
	letter-spacing: normal;
}

.editor-post-title__block .editor-post-title__input,
.wp-block h1,
.wp-block h2,
.wp-block h3,
.wp-block h4,
.wp-block h5,
.wp-block h6,
.has-drop-cap:not( :focus )::first-letter,
cite,
figcaption,
.wp-caption-text {
	font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica,
		sans-serif;
}

@supports ( font-variation-settings: normal ) {
	.editor-post-title__block .editor-post-title__input,
	.wp-block h1,
	.wp-block h2,
	.wp-block h3,
	.wp-block h4,
	.wp-block h5,
	.wp-block h6,
	.has-drop-cap:not( :focus )::first-letter,
	cite,
	figcaption,
	.wp-caption-text {
		font-family: 'Inter var', -apple-system, BlinkMacSystemFont,
			'Helvetica Neue', Helvetica, sans-serif;
	}
}

/* Colors ------------------------------------ */

/* CUSTOM COLORS */

.has-primary-color,
.wp-block-button__link.has-primary-color {
	color: var( --wp--preset--color--primary );
}

.has-primary-background-color,
.wp-block-button__link.has-primary-background-color {
	background-color: var( --wp--preset--color--primary );
}

.has-foreground-color,
.wp-block-button__link.has-foreground-color {
	color: var( --wp--preset--color--foreground );
}

.has-foreground-background-color,
.wp-block-button__link.has-foreground-background-color {
	background-color: var( --wp--preset--color--foreground );
}

.has-background-color,
.wp-block-button__link.has-background-color {
	color: var( --wp--preset--color--background );
}

.has-background-background-color,
.wp-block-button__link.has-background-background-color {
	background-color: var( --wp--preset--color--background );
}

/* GENERAL COLORS */

.has-black-background-color {
	background-color: var( --wp--preset--color--foreground );
	color: #fff;
}

.has-white-background-color {
	background-color: #fff;
	color: var( --wp--preset--color--foreground );
}

.has-black-color {
	color: var( --wp--preset--color--foreground );
}

.has-white-color {
	color: #fff;
}

/* Typography -------------------------------- */

.editor-block-list__layout a {
	color: var( --wp--preset--color--primary );
	text-decoration: underline;
}

a:focus,
a:hover {
	text-decoration: none;
}

.editor-post-title__block .editor-post-title__input,
.wp-block h1,
.wp-block h2,
.wp-block h3,
.wp-block h4,
.wp-block h5,
.wp-block h6 {
	font-feature-settings: 'lnum';
	font-variant-numeric: lining-nums;
	font-weight: var( --wp--preset--font-weight--heading );
	letter-spacing: -0.0415625em;
	line-height: var( --wp--preset--line-height--heading );
	margin: 40px 0 25px;
}

.editor-post-title__block .editor-post-title__input,
h1.wp-block {
	font-size: 84px;
	font-weight: bolder;
	line-height: 1.138888889;
}

h2.wp-block {
	font-size: 48px;
}

h3.wp-block {
	font-size: 40px;
}

h4.wp-block {
	font-size: 32px;
}

h5.wp-block {
	font-size: 24px;
}

h6.wp-block {
	font-size: 18px;
	letter-spacing: 0.03125em;
	text-transform: uppercase;
}

li,
p,
p.wp-block-paragraph {
	line-height: 1.4;
}

/* POST TITLE */

.wp-block.editor-post-title__block {
	max-width: 1000px;
}

.editor-post-title__block .editor-post-title__input {
	margin: 0;
	text-align: center;
}

/* DROP CAP */

.has-drop-cap:not( :focus )::first-letter {
	color: var( --wp--preset--color--primary );
	font-size: 5.1em;
	font-weight: var( --wp--preset--font-size--huge );
	margin: 0.05em 0.1em 0 0;
}

/* Monospace --------------------------------- */

code,
kbd,
pre,
samp {
	font-family: monospace;
}

kbd,
pre,
samp {
	border-radius: 0;
	font-size: 0.75em;
	padding: 4px 6px;
}

pre {
	border-color: #dcd7ca;
	border-radius: 0;
	line-height: var( --wp--preset--line-height--normal );
	padding: 1em;
}

/* Custom Text Sizes ------------------------- */

p.has-large-font-size.editor-rich-text__tinymce,
p.has-large-font-size.editor-rich-text__tinymce.mce-content-body,
p.has-larger-font-size.editor-rich-text__tinymce,
p.has-larger-font-size.editor-rich-text__tinymce.mce-content-body {
	line-height: 1.4;
}

p.has-small-font-size {
	font-size: 0.842em;
}

p.has-normal-font-size,
p.has-regular-font-size {
	font-size: 1em;
}

p.has-medium-font-size {
	font-size: 1.1em;
}

p.has-large-font-size {
	font-size: 1.25em;
}

p.has-larger-font-size {
	font-size: 1.5em;
}

/* Post Media -------------------------------- */

figure {
	margin: 0;
}

.alignleft,
.alignright {
	margin-bottom: 1.2em;
	max-width: 260px;
}

.wp-caption .alignleft,
.wp-caption .alignright {
	margin-bottom: 0;
}

.alignleft {
	margin-right: 1em;
}

.alignright {
	margin-left: 1em;
}

figcaption {
	color: #6d6d6d;
	font-size: 15px;
	font-weight: 500;
	line-height: 1.2;
	margin-top: 5px;
	text-align: inherit;
}

/* Forms ------------------------------------- */

fieldset {
	border: 2px solid #dcd7ca;
	padding: 20px;
}

legend {
	font-size: 0.85em;
	font-weight: 700;
	padding: 0 10px;
}

label {
	font-size: 15px;
	font-weight: 600;
}

/* Block: Base Margins ---------------------- */

/* Block: Shared Widget Styles -------------- */

ul.wp-block-archives,
ul.wp-block-categories,
ul.wp-block-latest-posts,
ul.wp-block-categories__list {
	font-family: inherit;
	list-style: none;
	margin: 40px 0;
	padding-left: 0;
}

ul.wp-block-categories__list ul {
	margin: 0;
}

ul.wp-block-archives li,
ul.wp-block-categories li,
ul.wp-block-latest-posts li,
ul.wp-block-categories__list li {
	color: #6d6d6d;
	line-height: var( --wp--preset--line-height--normal );
	margin: 5px 0 0 0;
}

ul.wp-block-archives li li,
ul.wp-block-categories li li,
ul.wp-block-categories__list li li,
ul.wp-block-latest-posts li li {
	margin-left: 20px;
}

.wp-block-archives li > a,
.wp-block-categories li > a,
.wp-block-latest-posts li > a {
	font-weight: 700;
	text-decoration: none;
}

.wp-block-archives li > a:focus,
.wp-block-archives li > a:hover,
.wp-block-categories li > a:focus,
.wp-block-categories li > a:hover,
.wp-block-latest-posts li > a:focus,
.wp-block-latest-posts li > a:hover {
	font-weight: 700;
	text-decoration: none;
}

.wp-block-archives.aligncenter,
.wp-block-categories.aligncenter {
	text-align: center;
}

.wp-block-latest-comments time,
.wp-block-latest-posts time {
	color: #6d6d6d;
	font-size: 0.7em;
	font-weight: 600;
	letter-spacing: normal;
	line-height: var( --wp--preset--line-height--normal );
	margin-top: 0.15em;
}

/* Block: Table ------------------------------ */

.wp-block-table {
	border-collapse: collapse;
	border-spacing: 0;
	empty-cells: show;
	font-size: var( --wp--preset--font-size--normal );
	margin-bottom: 1.1em;
	width: 100%;
}

.wp-block-table,
.wp-block-table * {
	border-color: #dcd7ca;
}

.wp-block-table tr {
	border: none;
}

.wp-block-table caption {
	background: #dcd7ca;
	text-align: center;
}

.wp-block-table th,
.wp-block-table td {
	line-height: 1.4;
	margin: 0;
	overflow: visible;
	padding: 0;
}

.wp-block-table .wp-block-table__cell-content {
	padding: 0.5em;
}

.wp-block-table thead {
	vertical-align: bottom;
	white-space: nowrap;
	text-align: inherit;
}

.wp-block-table th {
	font-weight: 700;
	text-align: inherit; /* Prevents the header from being centered by default*/
}

.wp-block-table th.has-text-align-center {
	text-align: center;
}

.wp-block-table th.has-text-align-right {
	text-align: right;
}

.wp-block-table th.has-text-align-left {
	text-align: left;
}

/* STYLE: STRIPES */

.wp-block-table.is-style-stripes {
	border: 1px solid #dcd7ca;
}

.wp-block-table.is-style-stripes tbody tr:nth-child( odd ) {
	background: #dcd7ca;
}

/* Block: Separator -------------------------- */

hr.wp-block-separator {
	border-top: 1px solid #6d6d6d;
	color: #6d6d6d;
	margin: 30px 0;
}

hr.wp-block-separator:not( .is-style-wide ):not( .is-style-dots ) {
	max-width: 100%;
}

hr.wp-block-separator:not( .is-style-dots ) {
	background: linear-gradient(
		to left,
		currentColor calc( 50% - 16px ),
		transparent calc( 50% - 16px ),
		transparent calc( 50% + 16px ),
		currentColor calc( 50% + 16px )
	);
	background-color: transparent !important;
	border: none;
	height: 1px;
	overflow: visible;
	position: relative;
}

.wp-block-separator.has-background:not( .is-style-wide ):not( .is-style-dots ) {
	height: 1px;
}

hr.wp-block-separator:not( .is-style-dots )::before,
hr.wp-block-separator:not( .is-style-dots )::after {
	background: currentColor;
	content: '';
	display: block;
	height: 16px;
	position: absolute;
	top: calc( 50% - 8px );
	transform: rotate( 22.5deg );
	width: 1px;
}

hr.wp-block-separator::before {
	left: calc( 50% - 5px );
}

hr.wp-block-separator::after {
	right: calc( 50% - 5px );
}

/* STYLE: DOTS */

hr.wp-block-separator.is-style-dots::before {
	font-size: 32px;
	font-weight: 700;
	letter-spacing: 1em;
	padding-left: 1em;
}

/* Block: Quote ------------------------------ */

blockquote {
	margin: 0;
}

.wp-block-quote {
	border-color: var( --wp--preset--color--primary );
	border-style: solid;
	border-width: 0 0 0 2px;
	margin: 20px 0;
	padding: 5px 0 5px 20px;
}

.wp-block-quote.has-text-align-center,
.wp-block-quote[style*='text-align:center'],
.wp-block-quote[style*='text-align: center'] {
	border-width: 0;
	padding: 5px 0;
}

.wp-block-quote.has-text-align-right,
.wp-block-quote[style*='text-align:right'],
.wp-block-quote[style*='text-align: right'] {
	border-width: 0 2px 0 0;
	padding: 5px 20px 5px 0;
}

cite,
.wp-block-quote__citation,
.wp-block-quote cite,
.wp-block-quote footer {
	color: #6d6d6d;
	font-size: 14px;
	font-weight: 600;
	line-height: var( --wp--preset--line-height--heading );
}

.wp-block-quote p {
	color: inherit;
	font-weight: 400;
	margin: 0 0 20px 0;
}

.wp-block-quote.is-style-large {
	border: none;
	padding: 0;
}

.wp-block-quote.is-style-large p {
	font-family: inherit;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	letter-spacing: -0.035714286em;
	line-height: 1.285714286;
}

.wp-block-quote.is-style-large .wp-block-quote__citation,
.wp-block-quote.is-style-large cite,
.wp-block-quote.is-style-large footer {
	font-size: 16px;
}

/* Block: Code, Verse and Preformatted ------- */

.wp-block-code {
	color: inherit;
}

.wp-block-code,
.wp-block-preformatted pre,
.wp-block-verse pre {
	border: 1px solid #dcd7ca;
	border-radius: 0;
	padding: 30px;
}

.wp-block-freeform.block-library-rich-text__tinymce pre,
.wp-block-preformatted pre,
.wp-block-code .block-editor-plain-text,
.wp-block-verse pre {
	background: transparent;
	color: inherit;
	font-family: monospace;
	font-size: 14px;
}

/* Block: Cover ------------------------------ */

.wp-block-cover-image .wp-block-cover__inner-container,
.wp-block-cover .wp-block-cover__inner-container {
	margin: 0 auto;
	width: calc( 100% - 40px );
}

.wp-block[data-type='core/cover'][data-align='right'],
.wp-block[data-type='core/cover'][data-align='left'] {
	height: auto;
	max-height: none;
}

.wp-block[data-type='core/cover'][data-align='left'] .wp-block-cover {
	text-align: left;
}

.wp-block[data-type='core/cover'][data-align='right'] .wp-block-cover {
	text-align: right;
}

.wp-block[data-type='core/cover'][data-align='right']
	.block-editor-block-list__block-edit,
.wp-block[data-type='core/cover'][data-align='left']
	.block-editor-block-list__block-edit {
	float: none;
	margin-left: 0;
	margin-right: 0;
	max-width: 100%;
}

.wp-block-cover-image .wp-block-cover-image-text,
.wp-block-cover-image .wp-block-cover-text,
.wp-block-cover-image h2,
.wp-block-cover .wp-block-cover-image-text,
.wp-block-cover .wp-block-cover-text,
.wp-block-cover h2 {
	max-width: 100%;
}

.wp-block-cover a {
	color: inherit;
}

/* Block: Shared Media Styles ---------------- */

.wp-block[data-type*='core-embed'][data-align='full'] figcaption,
.wp-block[data-type='core/image'][data-align='full'] figcaption,
.wp-block[data-type='core/gallery'][data-align='full'] .blocks-gallery-caption {
	padding: 0 14px;
}

/* Block: Paragraph -------------------------- */

/* Block: Pullquote -------------------------- */

.wp-block-pullquote {
	border: none;
	color: inherit;
	padding: 0;
	position: relative;
	text-align: center;
}

.wp-block-pullquote::before {
	background: #fff;
	border-radius: 50%;
	color: var( --wp--preset--color--primary );
	content: '”';
	display: block;
	font-size: 62px;
	font-weight: 500;
	line-height: 1.2;
	margin: 0 auto 15px auto;
	text-align: center;
	height: 44px;
	width: 44px;
}

.wp-block .wp-block-pullquote p {
	font-family: inherit;
	font-size: 28px;
	font-weight: 700;
	line-height: 1.178571429;
	letter-spacing: -0.041785714em;
	margin-bottom: 20px;
}

.wp-block .wp-block-pullquote p:last-child {
	margin-bottom: 0;
}

.wp-block .wp-block-pullquote p,
.wp-block-pullquote.is-style-solid-color blockquote > .block-editor-rich-text p,
.wp-block[data-type='core/pullquote'][data-align='right'] .editor-rich-text p,
.wp-block[data-type='core/pullquote'][data-align='left'] .editor-rich-text p {
	font-size: 28px;
}

.wp-block[data-type='core/pullquote'][data-align='right'],
.wp-block[data-type='core/pullquote'][data-align='left'] {
	height: auto;
	max-height: none;
}

.wp-block[data-type='core/pullquote'][data-align='left'] .wp-block-pullquote,
.wp-block[data-type='core/pullquote'][data-align='left']
	.wp-block-pullquote.is-style-solid-color
	blockquote {
	text-align: left;
}

.wp-block[data-type='core/pullquote'][data-align='right'] .wp-block-pullquote,
.wp-block[data-type='core/pullquote'][data-align='right']
	.wp-block-pullquote.is-style-solid-color
	blockquote {
	text-align: right;
}

.wp-block[data-type='core/pullquote'][data-align='right']
	.block-editor-block-list__block-edit,
.wp-block[data-type='core/pullquote'][data-align='left']
	.block-editor-block-list__block-edit {
	float: none;
	margin-left: 0;
	margin-right: 0;
	max-width: 100%;
}

.wp-block[data-type='core/pullquote'][data-align='right']
	.block-editor-block-list__block-edit
	.wp-block-pullquote::before {
	margin-right: 0;
}

.wp-block[data-type='core/pullquote'][data-align='left']
	.block-editor-block-list__block-edit
	.wp-block-pullquote::before {
	margin-left: 0;
}

.wp-block[data-type='core/pullquote'][data-align='right']
	.is-style-solid-color::before {
	right: 20px;
	transform: translateY( -50% );
}

.wp-block[data-type='core/pullquote'][data-align='left']
	.is-style-solid-color::before {
	left: 20px;
	transform: translateY( -50% );
}

.wp-block-pullquote__citation,
.wp-block-pullquote cite,
.wp-block-pullquote footer {
	color: #6d6d6d;
	font-size: 16px;
	font-weight: 500;
	margin-top: 12px;
	text-transform: none;
}

/* STYLE: SOLID COLOR */

.wp-block-pullquote.is-style-solid-color {
	padding: 30px 20px;
	position: relative;
}

.wp-block-pullquote.is-style-solid-color::before {
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateY( -50% ) translateX( -50% );
}

.wp-block-pullquote.is-style-solid-color blockquote {
	max-width: 100%;
	text-align: center;
}

.wp-block-pullquote.is-style-solid-color .wp-block-pullquote__citation,
.wp-block-pullquote.is-style-solid-color .wp-block-pullquote cite,
.wp-block-pullquote.is-style-solid-color .wp-block-pullquote footer {
	color: inherit;
}

/* Block: Verse ------------------------------ */

.wp-block-verse pre,
pre.wp-block-verse {
	font-size: 0.75em;
}

/* Block: Button ----------------------------- */

.wp-block-button__link,
.wp-block-file__button {
	background: var( --wp--preset--color--primary );
	border-radius: 0;
	color: #fff;
	font-size: 15px;
	font-weight: 600;
	letter-spacing: 0.0333em;
	line-height: var( --wp--preset--line-height--heading );
	padding: 1.1em 1.44em;
	text-transform: uppercase;
}

.wp-block-button .wp-block-button__link.mce-content-body {
	line-height: 1.1;
}

/* BUTTON STYLE: OUTLINE */

.is-style-outline .wp-block-button__link {
	background: none;
	border-color: currentColor;
	color: var( --wp--preset--color--primary );
	padding: calc( 1.1em - 2px ) calc( 1.44em - 2px );
}

/* BUTTON STYLE: SQUARED */

.is-style-squared .wp-block-button__link {
	border-radius: 0;
}

/* Block: Latest Comments -------------------- */

.wp-block-latest-comments {
	font-family: inherit;
	margin-left: 0;
}

.wp-block-latest-comments li.wp-block-latest-comments__comment {
	font-size: inherit;
	margin-bottom: 20px;
}

.wp-block-latest-comments li.wp-block-latest-comments__comment:last-child {
	margin-bottom: 0;
}

.wp-block-latest-comments__comment-meta,
.wp-block-latest-comments__comment-excerpt {
	margin-left: 0 !important;
}

.wp-block-latest-comments__comment-meta {
	font-weight: 700;
}

.wp-block-latest-comments__comment-meta a {
	text-decoration: none;
}

.wp-block-latest-comments__comment-meta a:focus,
.wp-block-latest-comments__comment-meta a:hover {
	text-decoration: none;
}

/* HAS AVATAR */

.wp-block-latest-comments.has-avatars .wp-block-latest-comments__comment {
	display: flex;
}

.wp-block-latest-comments.has-avatars img.avatar {
	flex-shrink: 0;
	margin: 5px 15px 0 0;
}

/* HAS EXCERPT */

.wp-block-latest-comments__comment-excerpt {
	margin: 0;
}

.wp-block-latest-comments__comment-excerpt p {
	font-family: inherit;
	font-size: 0.7em;
	margin: 10px 0 0;
}

/* Block: Latest Posts ----------------------- */

ul.wp-block-latest-posts:not( .is-grid ) li {
	margin-top: 15px;
}

/* STYLE: GRID */

.wp-block-latest-posts.is-grid li {
	border-color: #dcd7ca;
}

ul.wp-block-latest-posts.is-grid li {
	border-style: solid;
	border-width: 2px 0 0;
	line-height: var( --wp--preset--line-height--heading );
	margin: 20px 16px 16px 0;
	padding-top: 12px;
}

.wp-block-latest-posts__post-excerpt {
	font-size: 0.95em;
	line-height: 1.4;
	margin-top: 15px;
}

/* Block: Shortcode -------------------------- */

.wp-block-shortcode textarea {
	color: #191e23;
}

/* Block: Embed ------------------------------ */

.wp-block-embed {
	margin-bottom: 30px;
	margin-top: 30px;
}

.wp-block[data-type*='core-embed'][data-align='center'] * {
	margin-left: auto;
	margin-right: auto;
}

/* Block: File ------------------------------- */

.wp-block-file {
	background: none;
	padding: 0;
}

.wp-block-file__content-wrapper {
	align-items: center;
	display: flex;
	justify-content: space-between;
}

.wp-block-file .wp-block-file__textlink {
	color: var( --wp--preset--color--primary );
	font-weight: 700;
	text-decoration: none;
}

.wp-block-file .wp-block-file__textlink:focus,
.wp-block-file .wp-block-file__textlink:hover {
	text-decoration: underline;
}

.wp-block-file .wp-block-file__button {
	font-size: 14px;
	padding: 1em 1.25em;
}

/* Block: Image ------------------------------ */

.wp-block-image {
	margin-bottom: 30px;
	margin-top: 30px;
}

.wp-block-image.is-resized {
	margin-left: auto;
	margin-right: auto;
}

/* Block: Group ------------------------------ */

.wp-block-group.has-background {
	padding: 20px;
}

.wp-block-group .wp-block[data-type='core/heading']:first-child * {
	margin-top: 0;
}

.wp-block[data-type='core/group']
	> .editor-block-list__block-edit
	> div
	> .wp-block-group.has-background
	> .wp-block-group__inner-container
	> .editor-inner-blocks
	> .editor-block-list__layout
	> .wp-block[data-align='full'],
.wp-block[data-type='core/group'][data-align='full']
	> .editor-block-list__block-edit
	> div
	> .wp-block-group.has-background
	> .wp-block-group__inner-container
	> .editor-inner-blocks
	> .editor-block-list__layout
	> .wp-block[data-align='full'] {
	margin-left: 0;
	width: 100%;
}

/* Block: Paragraph -------------------------- */

/*	X.	Media Queries
/* ------------------------------------------- */

@media ( min-width: 480px ) {
	/* STRUCTURE */

	.wp-block[data-align='right'] {
		margin-right: 0;
	}

	.wp-block[data-align='left'] {
		margin: 0;
	}

	/* BLOCK: COVER */

	.wp-block[data-type='core/cover'][data-align='left'] [data-block],
	.wp-block[data-type='core/cover'][data-align='right'] [data-block] {
		margin-top: 0;
	}

	.wp-block[data-type='core/cover'][data-align='right']
		.block-editor-block-list__block-edit {
		float: right;
		margin-left: 20px;
		max-width: 260px;
	}

	.wp-block[data-type='core/cover'][data-align='left']
		.block-editor-block-list__block-edit {
		float: left;
		margin-right: 20px;
		max-width: 260px;
	}

	.wp-block[data-type='core/cover'][data-align='right']
		.wp-block-pullquote::before {
		margin-right: 0;
	}

	.wp-block[data-type='core/cover'][data-align='left']
		.wp-block-pullquote::before {
		margin-left: 0;
	}

	/* BLOCK: PULL QUOTE */

	.wp-block[data-type='core/pullquote'][data-align='right'],
	.wp-block[data-type='core/pullquote'][data-align='left'] {
		height: 0;
		max-width: 260px;
	}

	.wp-block[data-type='core/pullquote'][data-align='left'] [data-block],
	.wp-block[data-type='core/pullquote'][data-align='right'] [data-block] {
		margin-top: 0;
	}

	.wp-block[data-type='core/pullquote'][data-align='right']
		.block-editor-block-list__block-edit {
		float: right;
		margin-left: 20px;
		max-width: 260px;
	}

	.wp-block[data-type='core/pullquote'][data-align='left']
		.block-editor-block-list__block-edit {
		float: left;
		margin-right: 20px;
		max-width: 260px;
	}

	.wp-block[data-type='core/pullquote'][data-align='right']
		.wp-block-pullquote::before {
		margin-right: 0;
	}

	.wp-block[data-type='core/pullquote'][data-align='left']
		.wp-block-pullquote::before {
		margin-left: 0;
	}
}

@media ( min-width: 600px ) {
	/* BLOCK: SHARED MEDIA STYLES */

	.wp-block[data-type*='core-embed'][data-align='full'] figcaption,
	.wp-block[data-type='core/image'][data-align='full'] figcaption,
	.wp-block[data-type='core/gallery'][data-align='full']
		.blocks-gallery-caption {
		padding: 0 45px;
	}

	/* BLOCK: COLUMNS */

	.wp-block[data-type='core/column'] h1,
	.wp-block[data-type='core/column'] h2,
	.wp-block[data-type='core/column'] h3,
	.wp-block[data-type='core/column'] h4,
	.wp-block[data-type='core/column'] h5,
	.wp-block[data-type='core/column'] h6 {
		margin: 35px 0 20px 0;
	}

	/* BLOCK: PULLQUOTE */

	.wp-block[data-type='core/pullquote'][data-align='right']
		.block-editor-block-list__block-edit {
		margin-right: -30px;
	}

	.wp-block[data-type='core/pullquote'][data-align='left']
		.block-editor-block-list__block-edit {
		margin-left: -30px;
	}
}

@media ( min-width: 700px ) {
	/* STRUCTURE */

	> * {
		font-size: 21px;
	}

	/* FORMS  */

	fieldset {
		padding: 30px;
	}

	legend {
		padding: 0 15px;
	}

	/* BLOCK: BASE MARGINS */

	/* BLOCK: BUTTON */

	.wp-block-button__link,
	.wp-block-file__button {
		font-size: 17px;
	}

	/* BLOCK: CODE */

	.wp-block-preformatted pre,
	.wp-block-code .block-editor-plain-text,
	.wp-block-verse pre {
		font-size: 16px;
	}

	/* BLOCK: COLUMNS */

	.wp-block-column {
		font-size: 16px;
	}

	/* BLOCK: COVER */

	.wp-block-cover-image .wp-block-cover__inner-container,
	.wp-block-cover .wp-block-cover__inner-container {
		width: calc( 100% - 80px );
	}

	/* BLOCK: GROUP */

	.wp-block:not( [data-align='wide'] ):not( [data-align='full'] )
		div:not( [class*='__inner-container'] )
		.wp-block-group.has-background,
	.wp-block
		div[class*='__inner-container']
		.wp-block[data-align='wide']
		.wp-block-group.has-background,
	.wp-block
		div[class*='__inner-container']
		.wp-block[data-align='full']
		.wp-block-group.has-background {
		padding: 40px;
	}

	.wp-block[data-align='wide'] .wp-block-group.has-background,
	.wp-block[data-align='full'] .wp-block-group.has-background {
		padding: 80px;
	}

	/* BLOCK: LATEST POSTS */

	/* BLOCK: PULLQUOTE */

	.wp-block .wp-block-pullquote p,
	.wp-block-pullquote.is-style-solid-color
		blockquote
		> .block-editor-rich-text
		p,
	.wp-block[data-type='core/pullquote'][data-align='right']
		.editor-rich-text
		p,
	.wp-block[data-type='core/pullquote'][data-align='left']
		.editor-rich-text
		p {
		font-size: 48px;
	}

	.wp-block-pullquote__citation,
	.wp-block-pullquote cite,
	.wp-block-pullquote footer {
		margin-top: 20px;
	}

	.wp-block[data-type='core/pullquote'][data-align='wide']
		.wp-block-pullquote::before,
	.wp-block[data-type='core/pullquote'][data-align='full']
		.wp-block-pullquote::before {
		font-size: 113px;
		height: 80px;
		margin-bottom: 20px;
		width: 80px;
	}

	.wp-block[data-type='core/pullquote'][data-align='wide']
		.wp-block-pullquote.is-style-solid-color,
	.wp-block[data-type='core/pullquote'][data-align='full']
		.wp-block-pullquote.is-style-solid-color {
		padding: 60px 40px 40px;
	}

	.wp-block[data-type='core/pullquote'][data-align='full']
		.wp-block-pullquote:not( .is-style-solid-color ) {
		padding-left: 10px;
		padding-right: 10px;
	}

	.wp-block[data-type='core/pullquote'][data-align='wide'] blockquote p,
	.wp-block[data-type='core/pullquote'][data-align='full'] blockquote p {
		font-size: 48px;
		line-height: 1.203125;
	}

	.wp-block[data-type='core/pullquote'][data-align='left'] p,
	.wp-block[data-type='core/pullquote'][data-align='right'] p {
		font-size: 48px;
		line-height: 1.1875;
	}

	.wp-block[data-type='core/pullquote'][data-align='left']
		.is-style-solid-color
		p,
	.wp-block[data-type='core/pullquote'][data-align='right']
		.is-style-solid-color
		p {
		font-size: 26px;
	}

	/* BLOCK: TABLE */

	table.wp-block-table {
		font-size: var( --wp--preset--font-size--normal );
	}

	/* BLOCK: SEPARATOR */

	hr.wp-block-separator {
		margin-bottom: 60px;
		margin-top: 60px;
	}
}

@media ( min-width: 1000px ) {
	/* BLOCK: COLUMNS */

	.wp-block-column {
		font-size: var( --wp--preset--font-size--normal );
	}

	/* BLOCK: SEPARATOR */

	hr.wp-block-separator {
		margin-bottom: 80px;
		margin-top: 80px;
	}

	hr.wp-block-separator.is-style-wide {
		margin-left: -70px;
		margin-right: -70px;
	}
}

@media ( min-width: 1220px ) {
	/* BLOCK: PULLQUOTE */

	.wp-block[data-type='core/pullquote'][data-align='wide']
		.wp-block-pullquote.is-style-solid-color,
	.wp-block[data-type='core/pullquote'][data-align='full']
		.wp-block-pullquote.is-style-solid-color {
		padding: 90px 40px 80px;
	}

	.wp-block[data-type='core/pullquote'][data-align='wide'] blockquote p,
	.wp-block[data-type='core/pullquote'][data-align='full'] blockquote p {
		font-size: var( --wp--preset--font-size--huge );
	}

	/* BLOCK: SEPARATOR */

	hr.wp-block-separator.is-style-wide {
		margin-left: -150px;
		margin-right: -150px;
	}
}

@media ( min-width: 1360px ) {
	/* STRUCTURE */

	.wp-block[data-align='left'],
	.wp-block[data-align='right'] {
		margin: 0 auto;
		max-width: 1220px;
	}

	/* BLOCK: PULLQUOTE */

	.wp-block[data-type='core/pullquote'][data-align='left']
		.is-style-solid-color::before,
	.wp-block[data-type='core/pullquote'][data-align='right']
		.is-style-solid-color::before {
		top: 0;
	}

	.wp-block[data-type='core/pullquote'][data-align='left'],
	.wp-block[data-type='core/pullquote'][data-align='right'] {
		margin: 0 auto;
		max-width: 1220px;
	}

	/* BLOCK: SEPARATOR */

	hr.wp-block-separator.is-style-wide {
		margin-left: -200px;
		margin-right: -200px;
	}
}
`;
