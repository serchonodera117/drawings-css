let myCharacter = 'pinillo'
let defaultCharacter = 'Onodera'
let characters = {
    'bocchi' : 'maid',
    'kayolica': 'student',
    'gisselle': 'protagonist'
}


let asigned = characters[myCharacter] || defaultCharacter
console.log(asigned)