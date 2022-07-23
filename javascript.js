let myLibrary = [
  {author:'ali',title:'boss', pages:'0',id:'0'},
  {author:'hussain',title:'noob', pages:'1',id:'0'}
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
Book.prototype.Isread=function(){
  this.isread===0 ? this.isread===1:this.isread===0;
}

function addBookToLibrary() {
  const newbook= new Book;
  //take user input
  myLibrary.push(newbook);
}
function displayBook(book){
  const display=document.querySelector('.display');
  const author=document.createElement('div');
  author.textContent=book.author;
  const title=document.createElement('div');
  title.textContent=book.title;
  const pages=document.createElement('div');
  pages.textContent=book.pages;
  display.appendChild(author);
  display.appendChild(title);
  display.appendChild(pages);
  //create isread
  const remove=document.createElement('button');
  remove.setAttribute("buttonid",`${book.id}`)
  remove.classList.add('remove');
  remove.textContent='remove';
  display.appendChild(remove);
  //add read button

}
function displayBooks(){
  for(let i=0;i<myLibrary.length;i++){
    myLibrary[i].id=`${i}`;
    displayBook(myLibrary[i]);
  }
}
//newbook.addEventListener('click',form)//function form allows user input
displayBooks();
const removebuttons=document.querySelectorAll('.remove')
removebuttons.forEach((button)=>
button.addEventListener('click',()=>{
let buttonid = button.getAttribute("buttonid");
myLibrary.splice(buttonid,1)
displayBooks();}
))
