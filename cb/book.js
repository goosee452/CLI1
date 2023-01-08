import { Contact } from "./contact.js";
import {createRequire} from "module";
const require = createRequire(import.meta.url);

let fs = require('fs');

class ContactBook{

    #contacts;

    constructor(){
        this.#contacts = new Array();
    }

    addContact(newContact)
    {
        //---------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------
        function generateID(contacts)
        {
            let idUnique = false;
            let id = 0;
            while(idUnique == false){
                idUnique = true;
                id++;

                for(let curr = 0; curr < contacts.length; curr++){
                    if(id == contacts[curr].id){  
                        idUnique = false;
                    }
                }
                
            }
            return id;
        }
        //---------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------
        newContact.id = generateID(this.#contacts);
        this.#contacts.push(newContact);
    }

    get contacts()
    {
        return this.#contacts;
    }

    removeContacts(place, quantity)
    {
        if(place >= 0 && quantity >= 0 && place + quantity <= this.#contacts.length){
            this.#contacts.splice(place, quantity);
        }
    }

    getIndexByID(id)
    {
        for(let curr = 0; curr < this.#contacts.length; curr++){
            if(this.#contacts[curr].id == id){
                return curr;
            }
        }
        return -1;
    }

    getIndexesByName(name)
    {
        let indexes = new Array();
        //curr = current
        for(let curr = 0; curr < this.#contacts.length; curr++){
            if(this.#contacts[curr].name == name){
                indexes.push(curr);
            }
        }

        return indexes;
    }

    getIndexesByPhone(phone)
    {
        let indexes = new Array();
        //curr = current
        for(let currContact = 0; currContact < this.#contacts.length; currContact++)
        {
            for(let currPhone = 0; currPhone < this.#contacts[currContact].phones.length; currPhone++)
            {
                if(this.#contacts[currContact].phones[currPhone] == phone)
                {
                    indexes.push(currContact);
                }
            }
        }

        return indexes;
    }

    getContactInfo(index)
    {
        let info = '----\n';
        info += 'name: ' + this.#contacts[index].name + '\n';
        info += 'id: ' + this.#contacts[index].id + '\n';
        info += 'comment: ' + this.#contacts[index].comment + '\n';
        info += this.#contacts[index].birthday + '\n';
        info += 'phones: \n';
        for(let current = 0; current < this.#contacts[index].phones.length; current++)
        {
            info += this.#contacts[index].phones[current] + '\n';
        }
        info += '----\n';
        return info;
    }

    getIndexesByBirthday(date){
        let birthday = new Date(date);

        let indexes = new Array();
        for(let curr = 0; curr < this.#contacts.length; curr++){
            if(this.#contacts[curr].birthday.getTime() == birthday.getTime()){
                indexes.push(curr);
            }
        }

        return indexes;
    }

    toJSON(path){
        let contacts = new Array(this.#contacts.length);
        for(let curr = 0; curr < this.#contacts.length; curr++){
            contacts[curr] = {
                id: this.#contacts[curr].id,
                name: this.#contacts[curr].name,
                phones:  this.#contacts[curr].phones,
                comment: this.#contacts[curr].comment,
                birthday: this.#contacts[curr].birthday
            };
        }

        fs.writeFileSync(path, JSON.stringify(contacts));
         return (JSON.stringify(contacts));
    }

    deserialise(path){
        let data = fs.readFileSync(path, 'utf8');
        let contacts = JSON.parse(data);

        //console.log(contacts); 
        for(let curr = 0; curr < contacts.length; curr++){
            let cont = new Contact();
            cont.id = contacts[curr].id;
            cont.comment = contacts[curr].comment;
            cont.name = contacts[curr].name;
            cont.phones = contacts[curr].phones;
            cont.birthday = contacts[curr].birthday
            this.#contacts.push(cont);
            //console.log(cont.name + ' ' + cont.id + ' ' + cont.comment);
        }
    }
}

export {ContactBook};