'use strict';

const newWrap = document.querySelector('.new_wrap');
const selector = document.querySelector('.selector_input');
const addBtn = document.querySelector('#add');

function DomElement(height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    
    newWrap.style.cssText = `background-color:${bg};width:${width};height:${height};font-size:${fontSize}`;
};

DomElement.prototype.createBlock = function() {
    selector.addEventListener('change', function() {
        const selectorValue = selector.value;
        const div = document.createElement('div');
        const p = document.createElement('p');
        const divSlice = selectorValue.slice(1);
        div.innerHTML = 'div с классом ' + divSlice;
        p.innerHTML = 'параграф с id ' + divSlice;
        if (selectorValue.charAt(0) == '.') {
            div.classList.add(divSlice);
            newWrap.append(div);
    
        } else if (selectorValue.charAt(0) == '#') {
            p.setAttribute('id', divSlice);
            newWrap.append(p);
        }
    });
};

function block1(selector, height, width, bg, fontSize) {
    DomElement.apply(this, arguments)
};

block1.prototype = Object.create(DomElement.prototype);
block1.prototype.constructor = block1;


let newBlock = new block1('100px', '100px', 'red', '20px');

newBlock.createBlock();
