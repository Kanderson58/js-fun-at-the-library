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
     // returns array of shelves labeled by genre to be used in the loop as the number of times to loop through and check each shelf
    var shelfGenres = Object.values(this.library.shelves)
     // [ 'fantasy', 'fiction', 'nonFiction' ]
    for (var i = 0; i < shelfGenres.length; i++) {
      // var thisShelf = shelfGenres[i][]
      var theTitle = shelfGenres[i][i].title
      if (theTitle === bookTitle) {
        return `Yes, we have ${bookTitle}`
      } else {
        return `Sorry, we do not have ${bookTitle}`
      }
      // The Fifth Season
    }
    // returns keys of all genres within the shelf object as an array, then looks at only the i index of that array and returns one individual genre/key based on the iteratoin of the for loop




//     console.log(Object.keys(this.library.shelves)[Object.values(this.library.shelves)])
   
//     var shelfGenres = Object.keys(this.library.shelves)
// // [ 'fantasy', 'fiction', 'nonFiction' ]
//     var shelfContents = Object.values(this.library.shelves)
//     // [ [ { title: 'The Fifth Season', genre: 'fantasy' } ], [], [] ]
//     for (var i = 0; i < shelfGenres.length; i++) {
//       if (shelfGenres[i].includes(bookTitle)) {
//         return `Yes, we have ${bookTitle}`
//       } else {
//         return `Sorry, we do not have ${bookTitle}`
//       }
//     }
  }
}


module.exports = Librarian;