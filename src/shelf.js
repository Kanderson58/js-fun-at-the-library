function shelfBook (bookTitle, shelf) {
  if (shelf.length <= 2) {
    return shelf.unshift(bookTitle);
  }
}

function unshelfBook (bookTitle, shelf) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) { 
      return shelf.splice(i, 1);
    }
  }
}

function listTitles (shelf) {
  var total = []
    for (i = 0; i < shelf.length; i++) {
      total.push(shelf[i].title);
  }
  return total.join(", ");
}

function searchShelf (shelf, bookTitle) {
  if (listTitles(shelf).includes(bookTitle)) {
    return true;
  } else {
    return false;
  }
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};