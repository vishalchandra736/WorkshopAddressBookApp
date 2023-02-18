class Contact {

    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else
            throw "Incorrect Name";
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp("^[0-9]{2}\\s{1}[7-9]{1}[0-9]{9}$");
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        } else {
            throw "PHONE NUMBER is Invalid!";
        }
    }

    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = RegExp('^[a-zA-Z0-9#,&]{4,}$');
        if (addressRegex.test(address)) {
            this._address = address;
        } else {
            throw "ADDRESS is Invalid!";
        }
    }

    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }

    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        let zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
        if (zipRegex.test(zip)) {
            this._zip = zip;
        } else {
            throw "ZIP is Invalid!";
        }
    }

    toString() {
        return `id ${this.id} \nName ${this.name} \nPhone Number ${this.phoneNumber} \nAddress ${this.address} \nCity ${this.city} \nState ${this.state} \nZip  ${this.zip}`;
    }

}