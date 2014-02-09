# Organic CSS framework

That's a concept which is initially introduced [here](http://davidwalsh.name/starting-css). The idea is to follow the [Atomic design principle](http://bradfrostweb.com/blog/post/atomic-web-design/), but while writing CSS.

## Atoms

As you probably know the atom is the basic building block of matter. In the context of CSS this is a property and its value:

	font-size: 20px;

The framework has dozen of predefined atoms which are at your disposal. They are actually identical to the [Emmet CSS snipets for Sublime Text 2](http://peters-playground.com/Emmet-Css-Snippets-for-Sublime-Text-2/). It's a huge collection and you are actually able to write CSS really fast. Here are few of them:

	fz: 24px -> font-size: 24px
	d: ib -> display: inline-block
	fl: l -> float: left
	td: n -> text-decoration: none

So, in AbsurdJS you are able to write:

	{
	    nav: {
	        mar: 0,
	        pad: 0,
	        lis: 'n',
	        'ul li': {
	            fl: 'l',
	            fw: 'b'
	        }
	    }
	}

The result is:

	nav {
	  margin: 0;
	  padding: 0;
	  list-style: none;
	}
	nav ul li {
	  float: left;
	  font-weight: bold;
	}

It's even more interesting if you write in `.css` files. You just have to pass them through the preprocessor.

	.container {
		d: b;
		mar: 0;
		pad: 10px 0 0 0;
		-w-trs: all 200ms;
		bg: #ff0;
	}
	.container:hover {
		bg: #ff9;
	}

At the end the output is:

	.container {
	  display: block;
	  margin: 0;
	  padding: 10px 0 0 0;
	  transition: all 200ms;
	  -webkit-transition: all 200ms;
	  background: #ff0;
	}
	.container:hover {
	  background: #ff9;
	}

Find out the full list of the available atoms [here](/pages/css-preprocessing/organic-css/atoms).

## Molecules

Once you try combining atoms you are starting writing a molecule. The purpose of the molecules is to simplify common tasks, like creating gradients, defining animations and so on. Here are some of the most common used:

### size

	nav: {
        size: '100px/200px'
    }

    // compiles to:
	nav {
	  	width: 100px;
	  	height: 200px;
	}

### cf

	ul: {
        cf: 'both'
    }

    // compiles to
    ul:before, ul:after {
		content: " ";
		display: table;
		clear: both;
	}

### grid

	'section.container': {
		grid: '3/div'
	}

	// compiles to
	section.container:before, section.container:after {
		content: " ";
		display: table;
		clear: both;
	}
	section.container div {
		float: left;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		width: 33.33%;
	}

AbsurdJS also includes [animate.css](http://daneden.github.io/animate.css/) code snippets. This simplifies the process of animating by providing ready-to-use variants.

	button: {
		animate: 'bounce'
	}

	// compiles to
	@keyframes bounce {
		0%, 20%, 50%, 80%, 100% {
		  transform: translateY(0);
		  -webkit-transform: translateY(0);
		}
		40% {
		  transform: translateY(-30px);
		  -webkit-transform: translateY(-30px);
		}
		60% {
		  transform: translateY(-15px);
		  -webkit-transform: translateY(-15px);
		}
	}
	@-webkit-keyframes bounce {
		0%, 20%, 50%, 80%, 100% {
		  transform: translateY(0);
		  -webkit-transform: translateY(0);
		}
		40% {
		  transform: translateY(-30px);
		  -webkit-transform: translateY(-30px);
		}
		60% {
		  transform: translateY(-15px);
		  -webkit-transform: translateY(-15px);
		}
	}
	button {
	  animation-duration: 1s;
	  -webkit-animation-duration: 1s;
	  animation-fill-mode: both;
	  -webkit-animation-fill-mode: both;
	  animation-name: bounce;
	  -webkit-animation-name: bounce;
	}

A full list of the available animation types could be seen [here](http://daneden.github.io/animate.css/). You may use `flipInX`, `slideInRight` or `rollOut`.

All the available molecules are available [here](/pages/css-preprocessing/organic-css/molecules).