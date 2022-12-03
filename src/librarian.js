const { addBook } = require("./Library")

class Librarian {
  constructor(librarianName, worksAt, patronName, bookTitle, bookGenre) {
    this.name = librarianName
    this.library = worksAt
    this.book = bookTitle
    this.genre = bookGenre
  }
  greetPatron(patronName, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${patronName}!`
    } else {
      return `Hello, ${patronName}!`
    }
  }
  findBook(bookTitle) {
    if (this.book === bookTitle) {
      return `Yes, we have ${bookTitle}`
    // } else {
    //   return `Sorry, we do not have ${bookTitle}`
    }
  }
}


module.exports = Librarian;