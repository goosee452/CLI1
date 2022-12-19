//console.log(1);

class Contact{
    #id;
    #name;
    #phones;
    comment;

    //methods-----------------------------------------------------------------
    //------------------------------------------------------------------------

    constructor(){
        this.#phones = new Array();
    }

    get id(){
        return this.#id;
    }

    set id(id){
        this.#id = id;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }

    getPhone(num){
        if(num > 0 && num < this.#phones.length){
            return this.#phones[num];
        }
    }

    addPhone(phone){
        this.#phones.push(phone);
    }

    removePhones(pos, quant){
        this.#phones.splice(pos, quant);
    }

    setPhone(value, num){
        if(num > 0 && num < this.#phones.length){
            this.#phones[num] = value;
        }
    }

    set comment(comment){
        this.comment = comment;
    }
}

// let contacts = new Array(2);
// contacts[0] = new Contact();
// contacts[1] = new Contact();

// contacts[1].name = 'Jimmy';
// contacts[1].id = '123ifg456_o';
// contacts[1].addPhone('+375 29 567-89-02');
// contacts[1].addPhone('+375 34 555-22-11');
// contacts[1].comment = 'dumb as fuck';

// console.log(contacts[1]);

export {Contact};