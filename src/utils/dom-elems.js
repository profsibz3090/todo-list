import images from "./images";

export function pElem(text,className) {
   const p = document.createElement('p');
   p.innerText = text;
   className !== undefined && p.classList.add(className);
   return p;
}

export function divElem(className) {
    const div = document.createElement('div');
    className !== undefined && div.classList.add(className);
    return div;
}

export function labelElem(id,text) {
   const label = document.createElement('label');
   label.for = id;
   label.innerText = text;
   return label;
}

export function textFieldElem(id, placeholder) {
   const input = document.createElement('input');
   input.placeholder = placeholder;
   input.style.cssText = 'font-size: inherit;';
   input.id = id;
   return input;
}

export function imageElem(src, alt,className) {
   const image = document.createElement('img');
   image.src = src;
   image.alt = alt;
   className !== undefined && image.classList.add(className);
   return image;
}

export function addElement(text, className, onclicked) {
   // const wrapper = className === undefined? divElem() : divElem(className);
   const wrapper1 = divElem(className);
   const image = imageElem(images.plusIcon, 'add-icon', 'add-icon');
   wrapper1.append(image, text);
   wrapper1.addEventListener('click', onclicked);
   // wrapper.append(wrapper1);
   return wrapper1;
}

export function buttonElem(text, className, callback) {
   const button = document.createElement('button');
   button.classList.add(className);
   button.innerText = text;
   button.style.cssText = 'font-size: inherit';
   callback !== null && button.addEventListener('click', callback);
   return button;
}

export function radioElem(id, name, onclicked) {
   const checkbox= document.createElement('input');
   checkbox.type = 'checkbox';
   checkbox.id = id;
   checkbox.name = name;
   onclicked === undefined? null : checkbox.addEventListener('click', onclicked);
   return checkbox;
}

export function textAreaElem(id,placeholder,className) {
   const textarea = document.createElement('textarea');
   if(placeholder !== undefined) textarea.innerText = placeholder;
   textarea.id = id;
   className !== undefined && textarea.classList.add(className);
   return textarea;
}

export function selectElem(id,name, options = []) {
   const select = document.createElement('select');
   select.name = name;
   select.id = id;
   const items = options.map(item => {
       const option = document.createElement('option');
       option.value = item.value;
       option.innerText = item.name;
       return option;
   });
   select.append(...items);
   return select;
}

function dialogElem() {
   const dialog = document.createElement('dialog');
   const p = pElem('hello world');
   dialog.append(p);
   return dialog;
}