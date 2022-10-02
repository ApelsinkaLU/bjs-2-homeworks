/*jshint esversion: 7 */

// Задание 1

class PrintEditionItem {                                 
    constructor(name, releaseDate, pagesCount) {           // Создали базу для книг
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount; 
        this._state = 100;
        this.type = null;
    }

   set state(state) {                                      // Следим за состаянием книг
        if (state > 100) {
            this._state = 100;

        } else if (state < 0) {
            this._state = 0;

        } else {
            this._state = state;
        }
   }

   get state() {                                           // Читаем значение state
    return this._state;
   }

   fix() {                                                 // Лечим книги
    this.state = this.state * 1.5;
   }
}

class Magazine extends PrintEditionItem {                  // Создали журнал
    constructor (name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {                       // Создали книгу с автором
    constructor (author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {                              // Создали новеллу, фантастику и детектив
    constructor (author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "novel";
        this.author = author;
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "fantastic";
        this.author = author;
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "detective";
        this.author = author;
    }
}



// Задание 2

class Library {                                     // Создали библиотеку
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {                                 // Проверяем киги на состояние
        if (book._state > 30) {
            this.books.push(book);
        } else {
            console.log(`Книга '${book.name}' в плохом состоянии. Пожалуйста, почините ее.`);
        }
    }

    findBookBy(type, value) {                       // Поиск по типу, автору и тд
        if (this.books.find(e => e[type] === value)) {
            return this.books.find(e => e[type] === value);
        } else {
            return null;
        }
    }

    giveBookByName(bookName) {                      // Выдаем или оставляем книгу
        if (this.books.find(e => e.name === bookName)) {
            const deleteBook = this.books.find(e => e.name === bookName);
            this.books.splice(this.books.findIndex(e => e.name === bookName), 1);
            return deleteBook;
        } else {
            return null;
        }
    }
}



