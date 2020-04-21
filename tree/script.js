const addBtn = document.querySelector('.add');
let = tree = document.getElementById('tree'),
   added = document.createElement('li'),
   elementClear = document.querySelectorAll('li'), 
   wrap = document.querySelector('.wrap');




//расскрывающийся список

tree.onclick = function() {
   if(section.style.display == "block") {
      section.style = "display: none";
   }
   else{
      section.style = "display: block"; timeVar = 1;
   };   
}



//удаление, добаление элеметв в список

wrap.addEventListener('click', (evt) => {
   if (evt.target.tagName === "LI"){
      evt.target.remove();
      }        
   });

   let count = 0;
addBtn.addEventListener('click', () => {
   count++;
   elementClear = wrap.querySelectorAll('li');
   let element = document.createElement('li');
   element.textContent = prompt('введите название'); 
   wrap.append(element);
})

