import { Contact } from "./contact.js";

class contactBook{

    #contacts;

    constructor(){
        this.#contacts = new Array();
    }

    // generateID(){
    //     while(idUnique == false){
    //         id++;
    //         for(let curr = 0; curr < this.#contacts.length; curr++){

    //         }
    //     }
    // }


    addContact(newContact)
    {
        //let newContact = new Contact;
        //---------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------
        function generateID()
        {
            let idUnique = false;
            let id = 0;
            while(idUnique == false){
                idUnique = true;
                id++;

                for(let curr = 0; curr < this.#contacts.length; curr++){
                    if(id == this.#contacts[curr].id){
                        idUnique = false;
                    }
                }
            }
            return id;
        }
        //---------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------
        newContact.id = generateID();
        this.#contacts.push(newContact);
    }

    getContact(num){
        return this.#contacts[num];
    }




    //removeContacts(place, quantity);

}




let a = new contactBook();
let b = new Contact();
a.addContact(b);
console.log(a.getContact(0).id);

