absurd.component('TryIt', {
	css: {
		'.content-container': {
			'-w-trs': 'all 800ms',
			'-w-trstf': 'cubic-bezier(.15,.76,.29,.94)',
			maw: '100%'
		},
		'.doc-home': {
			d: 'n'
		}
	},
	ready: function(is, dom) {
		if(is.appended('.jsbin-widget')) {
			this.delay(800, function() {
				this.populate();
				dom('.jsbin-widget iframe').el.style.height = '600px';
			})
		}
	}
})();

absurd.component('TryItTempaltes', {
	html: '[data-absurd-component="tryit-templates"]',
	css: { '.tryit-templates': { d: 'b' } },
	templates: [
		{ url: 'http://jsbin.com/paqegexe/199/edit?js,output', label: 'CSS preprocessing' },
		{ url: 'http://jsbin.com/paqegexe/203/edit?js,output', label: 'HTML preprocessing' },
		{ url: 'http://jsbin.com/paqegexe/204/edit?js,output', label: 'Template engine' },
		{ url: 'http://jsbin.com/paqegexe/4/edit?js,output', label: 'Client-side component' }
	],
	ready: function() {
		this.populate();
	}
})();