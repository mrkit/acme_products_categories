var data = {
  "Foo Category": [
    {
      "name": "foo 1",
      "id": 1
    },
    {
      "name": "foo 2",
      "id": 2
    }
  ],
  "Bar Category": [
    {
      "name": "bar 1",
      "id": 1
    },
    {
      "name": "bar 2",
      "id": 2
    }
  ],
  "Joe's Category": [
    {
      "name": "stuff 1",
      "id": 1
    },
    {
      "name": "stuff 2",
      "id": 2
    }
  ]
}

//- getCategoryNames
//  - getProductsByCategory
//  - createProduct
//  - deleteProduct
//  - updateProduct
//  - deleteCategory
//  - createCategory


function getCategoryNames () { 
  return Object.keys(data);
}

function getProductsByCategory (category) {
  // var categoryNames = getCategoryNames();

  // var matchedArray = categoryNames.filter(function(el){
  //     if(data[el] === data[category]){
  //         return true;
  //     }
 
  // });  
     return data[category];
}

function createCategory(name){
  data[name] = [];
  console.log("category created!")
}

function createProductInCategory(category, product){
  var newProductId = data[category].length;
  data[category][newProductId] = { id: newProductId, "name": product};
  console.log("product created!");
}

module.exports = { 
  getCategoryNames: getCategoryNames,
  getProductsByCategory: getProductsByCategory,
  createProductInCategory
}