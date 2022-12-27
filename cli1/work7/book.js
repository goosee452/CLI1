import { Contact } from "./contact.js";

class ContactBook{

    #contacts;

    constructor(){
        this.#contacts = new Array();
    }

    addContact(newContact)
    {
        //let newContact = new Contact;
        //---------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------
        function generateID(...contacts)
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

    getContact(num){
        return this.#contacts[num];
    }

    get contacts(){
        return this.#contacts;
    }

    removeContacts(place, quantity){
        if(place >= 0 && quantity >= 0 && place + quantity <= this.#contacts.length){
            this.#contacts.splice(place, quantity);
        }
    }

    
}

export {ContactBook};