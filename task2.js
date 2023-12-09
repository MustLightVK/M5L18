let rex = {
    animal: 'dog',
    makeSound: function(){
        console.log('Гав Гав');
    }
};

let charlie = {
    animal: 'dog',
    runFast : function() {
        console.log('Я умею быстро бегать');
    }
}

let martin = {
    animal: 'dog'
}

charlie.__proto__= rex;
martin.__proto__= charlie;

console.log(rex);
rex.makeSound();
console.log("");

console.log(charlie);
charlie.runFast();
charlie.makeSound();
console.log("");

console.log(martin);
martin.makeSound();
martin.runFast();
