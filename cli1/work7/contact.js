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

    // getPhone(num){
    //     if(num > 0 && num < this.#phones.length){
    //         return this.#phones[num];
    //     }
    // }

    get phones(){
        return this.#phones;
    }

    addPhone(phone){
        const phonePattern = new RegExp('/+375 (29|44) [0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]');//+375
        if(phone.length == 17){
            this.#phones.push(phone);
        }
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

export {Contact};