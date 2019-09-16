function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function() {
        return `
        <select>${this.items.map(item=> `
            <option>${item}</option>`).join('')}
        </select>`;
    }
}

const renderItem = item =>  `<option>${item}<option>`;

const renderItem = function (item) {
    return `<option>${item}<option>`;
};

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
    this.src = src;

    this.render = function() {
        return `<img src="${this.src}" />`
    }
}

HtmlImageElement.prototype = new HTMLElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;