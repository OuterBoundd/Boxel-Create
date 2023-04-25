// This class mixes design patterns from jQuery and ThreeJS Editor (https://github.com/mrdoob/three.js/blob/master/editor/js/libs/ui.js)

class ElementUI {
	constructor(dom = 'div', attributes = {}) {
		this.dom = dom;
		if (typeof dom == 'string') this.dom = this.createElement(dom);
		if (attributes !== 'undefined') this.attr(null, attributes);
		if (attributes.id == null) this.attr('id', this.generateUUID());
	}

	append() {
		// Append dom elements
		for (let i = 0; i < arguments.length; i++) {
			const argument = arguments[i];
			if (argument instanceof ElementUI) { this.dom.appendChild(argument.dom); }
			else { console.error('ElementUI:', argument, 'is not an instance of ElementUI.'); }
		}
		return this;
	}

	appendTo(dom) {
		// Append DOM element to another DOM element
		dom.append(this.dom);
	}

	prependTo(dom) {
		// Prepend DOM elemen to another DOM
		dom.prepend(this.dom);
	}

	remove() {
		if (arguments.length > 0) {
			for (let i = 0; i < arguments.length; i++) {
				const argument = arguments[i];
				if (argument instanceof ElementUI) { this.dom.removeChild(argument.dom) }
				else { console.error('ElementUI:', argument, 'is not an instance of ElementUI.'); }
			}
		}
		else {
			this.dom.remove();
		}
		return this;
	}

	clear() {
		while (this.dom.children.length) {
			this.dom.removeChild(this.dom.lastChild);
		}
	}

	attr(name, value) {
		// Get or set attribute if value exists
		if (value == null) return this.dom[name];
		else if (typeof value == 'object') { // Apply multiple attributes
			for (const [key, val] of Object.entries(value)) {
				this.attr(key, val);
			}
		}
		else this.dom.setAttribute(name, value);
		return this;
	}

	addClass(name) {
		this.dom.classList.add(name);
		return this;
	}

	removeClass(name) {
		this.dom.classList.remove(name);
		return this;
	}

	css(name, value) {
		if (value == null) {
			if (typeof name == 'object') { // Set multiple styles from object
				for (const [key, val] of Object.entries(name)) {
					this.dom.style[key] = val;
				}
			}
			else return getComputedStyle(this.dom)[name]; // Else return existing style
		}
		else { // Set Non-object styling to value
			this.dom.style[name] = value;
		}
		return this;
	}

	html(html) {
		this.dom.innerHTML = html;
		return this;
	}

	text(text) {
		this.dom.textContent = text;
		return this;
	}

	generateUUID() {
		var lut = []; // Look up table
		for (var i = 0; i < 256; i++) { lut[i] = (i < 16 ? '0' : '') + (i).toString(16); }

		// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
		var d0 = Math.random() * 0xffffffff|0;
		var d1 = Math.random() * 0xffffffff|0;
		var d2 = Math.random() * 0xffffffff|0;
		var d3 = Math.random() * 0xffffffff|0;
		var uuid = lut[d0&0xff] + lut[d0>>8&0xff] + lut[d0>>16&0xff] + lut[d0>>24&0xff] + '-' + lut[d1&0xff] + lut[d1>>8&0xff] + '-' + lut[d1>>16&0x0f|0x40] + lut[d1>>24&0xff] + '-' + lut[d2&0x3f|0x80] + lut[d2>>8&0xff] + '-' + lut[d2>>16&0xff] + lut[d2>>24&0xff] +  lut[d3&0xff] + lut[d3>>8&0xff] + lut[d3>>16&0xff] + lut[d3>>24&0xff]
	
		// .toLowerCase() here flattens concatenated strings to save heap memory space.
		return uuid.toLowerCase();
	}

	createElement(name) {
		return document.createElement(name);

		// TODO: Conditionally create elements with unique behaviors
	}
}

export { ElementUI }