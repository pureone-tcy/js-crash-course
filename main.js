
/**
 * Template String
 */
const name = 'John';
const age = 30;
const hello = `My name is ${name} and I am ${age}`;
console.log(hello)

// Arrays
const numbers = new Array(1,2,3,4,5)
console.log(numbers)
const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
fruits.push('mangos')
fruits.unshift('strawberries')
// fruits.pop();
console.log(fruits);
 
/**
 * Object
 */
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
}
console.log(person.hobbies[1]);
console.log(person.address.street);

const { firstName, lastName, address: { city } } = person;
console.log(city)

person.email = 'john@gmail.com'
console.log(person)

const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'write blog',
    isCompleted: false
  }
]
console.log(todos);

// convert to Json string
const todoJson = JSON.stringify(todos)
console.log(todoJson);

/**
 * For
 */
for(let i = 0; i < todos.length; i++) {
  console.log(todos[i])
}
for(let todo of todos) {
  console.log(todo.id)
}

/**
 * foreach, map, filter
 */

// foreach
todos.forEach(function(todo) {
  console.log(todo.text);
});

// map
const todoText = todos.map(function(todo) {
  return todo.text;
});
console.log(todoText)

// filter & map
const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted == true;
}).map(function(todo) {
  return todo.text;
})
console.log(todoCompleted);

const x = '10';
if(x == 10) {
  console.log('x is 10');
} else {
  console.log('x is not 10');
}

/**
 * function
 */
function addNums(num1, num2) {
  return num1 + num2;
}
console.log(addNums(4, 5));

const addNums2 = (num1 = 1, num2 = 2) => num1 + num2;

console.log(addNums2(5, 5));
console.log(addNums2());

// Constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

Person.prototype.getFullYear = function() {
  return this.dob.getFullYear;
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// Instance Object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');
console.log(person1);
console.log(person2.getFullName());

/**
 * Class
 */
class Person2 {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  } 
}

/**
 * Element
 */

// console.log(window)

// Single element 
// const form = document.getElementById('my-form');
// console.log(form);

console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

// Multiple element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('li'))

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item))

const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// btn.addEventListener('mouseout', (e) => {
//   e.preventDefault();
//   document.querySelector('#my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.items')
//   .lastElementChild
//   .innerHTML = '<h1>Hello</h1>'
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(nameInput);

  if(nameInput.value === '' || emailInput === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter fileds';
    setTimeout(() => msg.remove(), 5000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li);

    // Clear filelds
    nameInput.value = '';
    emailInput.value = '';
  }
}
