const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('http://')
]

for (let element of elements) 
 element.render();