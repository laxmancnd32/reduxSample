export function selectBook(book){
    //selectBook is an ActionCreator and returns an action(type and payload)
    // console.log("A book has been selected",book.title);
    return {
            type:"BOOK_SELECTED",
            payload: book
    };
}
