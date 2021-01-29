const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients');

const createLi = products => {
  products.forEach(product => {
      const createNewProduct = document.createElement('li');
    
      createNewProduct.textContent = product;
      listRef.appendChild(createNewProduct);
    });
  return listRef;
  }


console.log(createLi(ingredients));
 
