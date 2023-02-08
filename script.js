const randomWord = words => {
    return words[Math.floor(Math.random() * words.length)];
}

const appearance = {
    hair: ['black', 'brown', 'blonde', 'red', 'dyed'],
    eyes: ['black', 'brown', 'blue', 'green', 'hazel'],
    skin: ['pale', 'medium', 'dark']
}
console.log(`Hair Color: ${randomWord(appearance.hair)}
Eye Color: ${randomWord(appearance.eyes)}
Skin Color: ${randomWord(appearance.skin)}`);