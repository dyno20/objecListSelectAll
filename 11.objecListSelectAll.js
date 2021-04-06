/*

Сделайте так, чтобы функция создания выпадающего списка могла обрабатывать не только массив объектов,
но и другие виды входящих значений, а именно:

    Массив примитивных значений типа string или number. В таком случае value и label будут равны. 
    Например: [1, 2, 'три', 'четыре', ...]
    Объект с произвольными свойствами и значениями типа string или number. 
    В таком случае каждый элемент должен формироваться из ключа (value) и значения (label) каждого 
    свойства переданного объекта. 
    Например: { value1: 'Значение 1', value2: 'Значение 2', ... }

*/

let objectList = [
    {value: '1', label: 'значение1'},
    {value: '2', label: 'значение2'},
    {value: '3', label: 'значение3'},
    {value: '4', label: 'значение4'},
];
  
let primitiveList = [1, 2, 'три', 'четыре', 5];
  
let object = {
    value1: 'Атос',
    value2: 'Портос',
    value3: 'Арамис',
    value4: 'Дартаньян',
};

  
function addOptionElem(array, num = 0) {
    let body = document.body;
    let select = body.appendChild(document.createElement("select"))
    array.forEach(function (el, index) {
       let option = document.createElement("option")
       option.value = el.value
       option.innerHTML = el.label
       select.appendChild(option)
       if (index === num) {
          option.setAttribute("selected", true)
       }
    })
    return select
 }

addOptionElem(objectList);


function formatingArr(array) {
    let result = [];
    if (typeof (array) == "object" && !Array.isArray(array)) {
       for (let key in array) {
          result.push({ value: key, label: array[key] })
       }
    } else {
       result = array.map(function (key) {
          return ({ value: key, label: key });
       })
    }
    return result
}
 
addOptionElem(formatingArr(primitiveList));
addOptionElem(formatingArr(object));
