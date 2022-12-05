const { addBook } = require("./Library")

class Librarian {
  constructor(librarianName, worksAt) {
    this.name = librarianName;
    this.library = worksAt;
  }
  greetPatron(patronName, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${patronName}!`;
    } else {
      return `Hello, ${patronName}!`;
    }
  }

  findBook(bookTitle) {
    var shelfGenres = Object.values(this.library.shelves);
    for (var i = 0; i < shelfGenres.length; i++) {
      var theTitle = shelfGenres[i][i].title;
      if (theTitle === bookTitle) {
        for (var j = 0; j < theTitle.length; j++) {
          var theTitleArray = shelfGenres[i];
          theTitleArray.splice(j, 1);
          return `Yes, we have ${bookTitle}`;
        }
      } else {
        return `Sorry, we do not have ${bookTitle}`;
      }
    }
  }

  calculateLateFee (numOfDays) {
    return Math.ceil(.25 * numOfDays);
  }

}

module.exports = Librarian;