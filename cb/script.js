import { Contact } from "./contact.js";
import { ContactBook } from "./book.js";
import {UI} from "./ui.js"


//main
{
let book = new ContactBook;
book.deserialise('./data.json');

let funcNames = new Array();
funcNames.push(
    'add contact',
    'remove contact',
    'add phone',
    'remove phone',
    'change name',
    'change comment',
    'display all contacts',
    'display contacts by name',
    'display contacts by phone',
    'display contact by id',
    'set birthday',
    'display contacts by birthday'
);
let functionsQuant = 12;

//_______________________________________________________________________________________________________________________________
//_______________________________________________________________________________________________________________________________
//_______________________________________________________________________________________________________________________________

let endLoop = false;
while(endLoop === false){
    console.log('Contact book.\n');
    console.log('Contact{\nname\nid\ncomment\nphones\n}\n');
    console.log('available commands: \n');
    for(let curr = 0; curr < functionsQuant; curr++){
        console.log(funcNames[curr]);
    }

    let command = UI.getInput('Enter command: \n');
    switch(command){
        case funcNames[0]:{
            UI.addContact(book);
            break;
        };
        case funcNames[1]:{
            UI.removeContact(book);
            break;
        };
        case funcNames[2]:{
            UI.addPhone(book);
            break;
        };
        case funcNames[3]:{
            UI.removePhone(book);
            break;
        };
        case funcNames[4]:{
            UI.changeName(book);
            break;
        };
        case funcNames[5]:{
            UI.changeComment(book);
            break;
        };
        case funcNames[6]:{
            UI.displayAllContacts(book);
            break;
        };
        case funcNames[7]:{
            UI.displayContactsByName(book);
            break;
        };
        case funcNames[8]:{
            UI.displayContactsByPhone(book);
            break;
        };
        case funcNames[9]:{
            UI.displayContactByID(book);
            break;
        };
        case funcNames[10]:{
            UI.setBrithday(book);
            break;
        }
        case funcNames[11]:{
            UI.displayContactsByBirthday(book);
            break;
        }

    };

    console.log('go on?(Enter NO if dont)\n');
    let go_on = UI.getInput('Enter: \n');
    if(go_on == 'NO'){
        endLoop = true;
    }
}


book.toJSON('./data.json');


}