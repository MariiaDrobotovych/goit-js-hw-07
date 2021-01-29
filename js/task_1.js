const categoriesRef = document.querySelectorAll('#categories > li.item');
const quantityOfCategories = [...categoriesRef].length;
console.log(`В списке ${quantityOfCategories} категории.`) 


const liListRef = document.querySelectorAll('ul#categories > li.item');

[...liListRef].forEach(li => {
  const titleRef = li.querySelector('h2').innerText;
  const length = li.querySelectorAll('ul > li').length;

  console.log(`${titleRef}: ${length}`);
}); 

