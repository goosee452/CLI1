import { Contact } from "./contact.js";
import { ContactBook } from "./book.js";
import requirejs from "requirejs";
//import PromptSync from "prompt-sync";  
import {createRequire} from "module";
const require = createRequire(import.meta.url);

let prompt = require('readline-sync');
class UI{

    static addContact(contactBook){
        let newContact = new Contact;
        contactBook.addContact(newContact);
    }

    static displayContactByID(contactBook){
        let id;
        id = +prompt.question('enter id: \n');
        let index = contactBook.getIndexByID(id);
        if(index === -1){
            console.log('There is no such id\n');
            return 0;
        }
        console.log(contactBook.getContactInfo(index));
    }

    static removeContact(contactBook){
        let id;
        id = +prompt.question('enter id: \n');
        let index = contactBook.getIndexByID(id);
        if(index === -1){
            console.log('There is no such id\n');
            return 0;
        }
        contactBook.contacts.splice(index, 1);
    }


    static addPhone(contactBook){
        let id;
        id = +prompt.question('enter id: \n');
        let index = contactBook.getIndexByID(id);
        if(index === -1){
            console.log('There is no such id\n');
            return 0;
        }

        let phone;
        phone = prompt.question('enter phone: \n');
        if(contactBook.contacts[index].addPhone(phone) === false){
            console.log('Phone invalid\n');
        }
    }


    static removePhone(contactBook){
        let id;
        id = +prompt.question('enter id: \n');
        let index = contactBook.getIndexByID(id);
        if(index === -1){
            console.log('There is no such id\n');
            return 0;
        }

        let phoneIndex = +prompt.question('enter phone index: \n');
        if(phoneIndex < 0 || phoneIndex > contactBook.contacts[index].phones.length){
            console.log('Phone index invalid\n');
            return 0;
        }
        else{
            contactBook.contacts[index].phones.splice(phoneIndex, 1);
        }
    }

    static changeName(contactBook){
        let id;
        id = +prompt.question('enter id: \n');
        let index = contactBook.getIndexByID(id);
        if(index === -1){
            console.log('There is no such id\n');
            return 0;
        }   

        let name = prompt.question('enter name: \n');
        contactBook.contacts[index].name = name;
    }

    static changeComment(contactBook){
        let id;
        id = +prompt.question('enter id: \n');
        let index = contactBook.getIndexByID(id);
        if(index === -1){
            console.log('There is no such id\n');
            return 0;
        }  

        let comment = prompt.question('enter comment: \n');
        contactBook.contacts[index].comment = comment;
    }

    static displayAllContacts(contactBook){
        let output = '';
        //curr = current
        for(let curr = 0; curr < contactBook.contacts.length; curr++){
            output += contactBook.getContactInfo(curr);
        }
        console.log(output);
    }

    static displayContactsByName(contactBook){
        let name = prompt.question('enter name: \n');
        let indexes = contactBook.getIndexesByName(name);
        for(let curr = 0; curr < indexes.length; curr++){
            console.log(contactBook.getContactInfo(indexes[curr]));
        }
    }

    static displayContactsByPhone(contactBook){
        let phone = prompt.question('enter phone: \n');
        let indexes = contactBook.getIndexesByPhone(phone);
        for(let curr = 0; curr < indexes.length; curr++){
            console.log(contactBook.getContactInfo(indexes[curr]));
        }
    }

    static getInput(phrase){
        let input = prompt.question(phrase);
        return input;
    }

    static setBrithday(contactBook){
        let id;
        id = +prompt.question('enter id: \n');
        let index = contactBook.getIndexByID(id);
        if(index === -1){
            console.log('There is no such id\n');
            return 0;
        }   

        let birthday = prompt.question('Enter birthday: \n');
        contactBook.contacts[index].birthday = birthday;
    }

    static displayContactsByBirthday(contactBook){
        let birthday = prompt.question('Enter birthday: \n');
        let indexes = contactBook.getIndexesByBirthday(birthday);
        for(let curr = 0; curr < indexes.length; curr++){
            console.log(contactBook.getContactInfo(indexes[curr]));
        }
    }
}


export {UI};
