import { Contact } from "./contact.js";
import { ContactBook } from "./book.js";

//console.log(46624327642345237452354235425432);

let book = new ContactBook();
let cont = new Contact();
let cont2 = new Contact();
let cont3 = new Contact();

book.addContact(cont);
book.addContact(cont2);
book.addContact(cont3);

book.removeContacts(0, 2);

console.log(book.contacts);

