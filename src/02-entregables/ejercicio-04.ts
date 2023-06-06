console.log("************** DELIVERABLE 04 *********************");

interface Book {
    title: string,
    isRead: boolean
}

export const books : Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

const isBookRead = (books: Book[], title: string) : boolean => {
    for (const key in books) {
        const currentBook = books[key];
        if (currentBook.title === title) {
            return currentBook.isRead;
        }
    }
    return false;
}

console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));