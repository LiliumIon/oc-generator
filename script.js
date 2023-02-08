const randomWord = num => {
    return Math.floor(Math.random() * num);
}

const appearance = {
    hair: ['black', 'brown', 'blonde', 'red', 'green', 'purple', 'blue', 'white'],
    eyes: ['black', 'brown', 'blue', 'green', 'hazel'],
    skin: ['pale', 'medium', 'dark']
}
let array = [];
for (let prop in appearance) {
    array.push(appearance[prop][randomWord(appearance[prop].length)]);
}
console.log(`Your character has ${array[0]} hair, ${array[1]} eyes, and ${array[2]} skin.`);
/* console.log(`Hair Color: ${randomWord(appearance.hair)}
Eye Color: ${randomWord(appearance.eyes)}
Skin Color: ${randomWord(appearance.skin)}`); */