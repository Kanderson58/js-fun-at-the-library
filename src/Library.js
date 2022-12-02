function createLibrary (libraryName) {
  var library = {
    name: libraryName,
    shelves: {fantasy: [], 
      fiction: [], 
      nonFiction: []}
  }
  return library
}

function addBook (libraryName, bookTitle) {
  return libraryName.shelves[bookTitle.genre].push(bookTitle)
}

function checkoutBook (libraryName, bookTitle, bookGenre) {
  var accessObject = libraryName.shelves[bookGenre]
  for (i = 0; i < accessObject.length; i ++) {
    if (accessObject[i].title === bookTitle) {
      accessObject.splice(accessObject.indexOf(bookTitle, 1))
      return `You have now checked out ${bookTitle} from the ${libraryName.name}`
    }
  }
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${libraryName.name}`
  
}



module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};