function Book(Author, Title,pages,Read) {
  this.Author = Author;
  this.Title = Title;
  this.pages = pages;
  this.Read=Read;
  this.info = function() {
    console.log(this.Author)
    console.log(this.Title)
    console.log(this.pages)
    console.log(this.Read);
    };
}

const book1= new Book ("Jk Rowling", "Harry Potter","88","yes");
//const book2= new Book ("Taylor", "Red");

console.log(book1.info());
//book2.sayName();
