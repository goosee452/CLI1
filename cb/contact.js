class Contact{
    #id;
    #name;
    #phones;
    comment;
    #birthday;

    //methods-----------------------------------------------------------------
    //------------------------------------------------------------------------

    constructor(){
        this.#phones = new Array();
    }

    set birthday(birthday){
        this.#birthday = new Date(birthday);
    }

    get birthday(){
        return this.#birthday;
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

    get phones(){
        return this.#phones;
    }

    set phones(phones){
        this.#phones = phones;
    }

    addPhone(phone){
        const phonePattern = new RegExp('\\+375 (29|44) [0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]');
        if(phone.length == 17 && phonePattern.test(phone) == true){
            this.#phones.push(phone);
            return true;
        }
        else{
            return false;
        }
    }

    removePhones(pos, quant){
        this.#phones.splice(pos, quant);
    }

    // setPhone(value, num){
    //     if(num > 0 && num < this.#phones.length){
    //         this.#phones[num] = value;
    //     }
    // }

    set comment(comment){
        this.comment = comment;
    }
}

export {Contact};
