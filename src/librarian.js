const { addBook } = require("./Library")

class Librarian {
  constructor(librarianName, worksAt) {
    this.name = librarianName
    this.library = worksAt
  }
  greetPatron(patronName, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${patronName}!`
    } else {
      return `Hello, ${patronName}!`
    }
  }
  // function addBook (libraryName, bookTitle) {
  //   libraryName.shelves[bookTitle.genre].push(bookTitle);
  // }


  // function checkoutBook (libraryName, bookTitle, bookGenre) {
  //   var accessObject = libraryName.shelves[bookGenre];
  //   for (i = 0; i < accessObject.length; i ++) {
  //     if (accessObject[i].title === bookTitle) {
  //       accessObject.splice(accessObject.indexOf(bookTitle), 1);
  //       return `You have now checked out ${bookTitle} from the ${libraryName.name}`;
  //     }
  //   }
  //     return `Sorry, there are currently no copies of ${bookTitle} available at the ${libraryName.name}`;
    
  // }


  findBook(bookTitle) {
    var shelfGenres = Object.values(this.library.shelves)
    for (var i = 0; i < shelfGenres.length; i++) {
      var theTitle = shelfGenres[i][i].title
      if (theTitle === bookTitle) {
        for (var j = 0; j < theTitle.length; j++) {
          var theTitleArray = shelfGenres[i]
          theTitleArray.splice(theTitle.indexOf(bookTitle), 1);
          return `Yes, we have ${bookTitle}`;
        }
      } else {
        return `Sorry, we do not have ${bookTitle}`
      }
    }
  }

  calculateLateFee (numOfDays) {
    return Math.ceil(.25 * numOfDays);
  }

}


module.exports = Librarian;