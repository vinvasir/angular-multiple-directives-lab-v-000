function ContactController() {
    var vm = this;

    this.contacts = [{
        name: 'Bob',
        phone: '0123458690'
    },{
        name: 'Tim',
        phone: '3934203242'
    },{
        name: 'Ross',
        phone: '0684059433'
    }];

    this.removeContact = function (index) {
        this.contacts.splice(index, 1);
    }

    this.addContact = function(){
        vm.contacts.push(
                { name: this.name,
                  phone: this.phoneNumber
                }
        )
        this.name = "";
        this.phoneNumber = "";
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);