let myLibrary = [
  {author:'ali',title:'boss', pages:'0',id:'0',isread:1},
  {author:'hussain',title:'noob', pages:'1',id:'0',isread:0},
  {author:'umar',title:'manzerbigoul', pages:'2',id:'0',isread:1}
];
const newbook=document.querySelector('.newbook');
function Book(
  author='undefined',
  title='undefined',
  pages='0',
  isread=0,
  id=0
  ) {
    this.author=author;
    this.title=title;
    this.pages=pages;
    this.isread=isread;
    this.id=id;
}
function aisread(book){
  book.isread===0 ? book.isread=1:book.isread=0;
}
Book.prototype.Isread=function(){
  this.isread===0 ? this.isread=1:this.isread=0;
}


function addBookToLibrary() {
  const newbook= new Book;
  for(let i=0;i<4;i++){
    if(i===0)newbook.author=prompt("Please enter author name", "none");
    if(i===1)newbook.title=prompt("Please enter title name", "none");
    if(i===2)newbook.pages=prompt("Please enter pages name", 0);
    if(i===3)newbook.isread=prompt("Please enter  0 or 1 if read or not", 0);
  }
  //take user input
  myLibrary.push(newbook);
}
const addbook=document.querySelector('.add');
addbook.addEventListener('click', () =>{
  addBookToLibrary();
  displayBooks();}
)

function displayBook(book){
  const main=document.querySelector('.main');
  const display=document.createElement('div');
  display.classList.add('card');
  main.appendChild(display);
  const author=document.createElement('div');
  author.textContent=`author: ${book.author}`;
  author.classList.add('author');
  const title=document.createElement('div');
  title.textContent=`title: ${book.title}`;
  author.classList.add('title');
  const pages=document.createElement('div');
  pages.textContent=`pages: ${book.pages}`;
  author.classList.add('pages');
  display.appendChild(author);
  display.appendChild(title);
  display.appendChild(pages);
  //create isread
  const remove=document.createElement('button');
  remove.setAttribute("buttonid",`${book.id}`)
  remove.classList.add('remove');
  remove.textContent='remove';
  display.appendChild(remove);
  remove.addEventListener('click',()=>{
    let buttonid = remove.getAttribute("buttonid");
    myLibrary.splice(buttonid,1)
    displayBooks();
    console.log(myLibrary)});
  //add read button
  const read=document.createElement('button');
  read.setAttribute("buttonid",`${book.id}`)
  read.classList.add('read');
  read.textContent='read';
  display.appendChild(read);
  read.addEventListener('click',()=>{
    let buttonid = read.getAttribute("buttonid");
    aisread(myLibrary[buttonid]);
    if (book.isread){
      display.classList.add('isread')
    }
    else{
      display.classList.remove('isread')
    }});
    if (book.isread){
      display.classList.add('isread')
    }
    else{
      display.classList.remove('isread')
    }

}
function displayBooks(){
  const deletes=document.querySelectorAll('.card');
  deletes.forEach((button) => {
    button.remove();
  })

  for(let i=0;i<myLibrary.length;i++){
    myLibrary[i].id=`${i}`;
    displayBook(myLibrary[i]);
  }
}
//newbook.addEventListener('click',form)//function form allows user input
displayBooks();