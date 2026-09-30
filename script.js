let students =[
  {id: 1, name: 'Rio D ', program: 'BSIT'},
  {id: 2, name: 'Ms De Lunas ', program: 'BSIT'},
  {id: 3, name: ' Ms Bebot', program: 'BSIT'},
  {id: 4, name: 'Julius Aquino', program: 'BSIT'},
  {id: 5, name: 'Alexis Samontañez', program: 'BSIT'}
  
];

const createListItem = (student)=>{
  //* create element *//
  const article = document.createElement('article');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const button = document.createElement('button');


//* Add value *//
h2.innerText = student.name
p.innerText = student.program
button.innerText = 'Delete';
button.addEventListener('click',() =>{
  const newStudent = students.filter((s) => s.id !== student.id)
  students = newStudent;
  displayList();
  
});

//* add class*//
article.classList.add('list-item');

//* insert *//
article.append(h2);
article.append(p);
article.append(button);

return article;
}


const list = document.querySelector('#studentlist');

const displayList = () =>{
  list.replaceChildren();
  const studentlist = students.map((s) => createListItem(s));
  studentlist.forEach((s) => list.append(s));
}
displayList();

const form = document.querySelector('#studentForm');
const nameField = document.querySelector('#name');
const programField = document.querySelector('#program');
form.addEventListener('submit',(e) => {
  e.preventDefault();
  const name = nameField.value;
  const program = programField.value;
  const newStudent = {
    id: students.length + 1, 
    name, 
    program
  }
  students.push(newStudent);
  nameField.value = '';
  programField.value = '';
  displayList();
  
});
