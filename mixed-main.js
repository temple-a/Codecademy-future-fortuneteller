//Mixed Messages portfolio project
//output randomised message based on the following possible options: 
//name, surname, profession, spouse, number of children/pets, cause and age of death

const firstNames = ['Amalthea', 'Bilbo', 'Chiron', 'Dionysus', 'Echo', 'Freya', 'Groot',
'Hera', 'Ivy', 'Jacinda', 'Kronos', 'Lyra', 'Mulan', 'Niobe', 'Ozymandias', 'Phaedra', 
'Quintilius', 'Rikki', 'Smeagol', 'Thor', 'Ulysses', 'Vesper', 'Wio-wani', 'Yue'];
const surnames = ['Lightyear', 'Charioteer', 'Celestian', 'Lunar', 'Solar', 'Andromedan'];
const professions = ['spacewalker', 'pilot', 'geneticist', 'robot programmer', 'miner', 'non-Earth lifeform anthropologist', 'microbiologist', 'spacecraft engineer'];
const homePlanet = ['Venus', 'Titan', 'Earth', 'Mars'];
const spouses = ['Buzz', 'Thor', 'Loki', 'Princess Yue', 'Diana the Huntress', 'Kaguya', 'Phoebus', 'Data', 'Mal'];
const causeOfDeath = ['dragon fire', 'the Black Plague', 'radiation', 'an alien virus', 'an asteroid', 'a blond moment', 'Baby Yoda'];

const chooseFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
const chooseSurname = surnames[Math.floor(Math.random() * surnames.length)];
const chooseHomePlanet = homePlanet[Math.floor(Math.random() * homePlanet.length)];
const chooseProfession = professions[Math.floor(Math.random() * professions.length)];
const chooseSpouse = spouses[Math.floor(Math.random() * spouses.length)];
const ageOfDeath = Math.floor(Math.random() * (300 - 80) + 80);
const chooseDeath = causeOfDeath[Math.floor(Math.random() * causeOfDeath.length)];

const chooseKids = () => {
    let kids = [];
    let numOfKids = Math.floor(Math.random() * 5);
    for (let i=0; i<numOfKids; i++) {
        let kidName = firstNames[Math.floor(Math.random() * firstNames.length)];
        if (kids.includes(kidName)) {
            kidName = firstNames[Math.floor(Math.random() * firstNames.length)];
        }
        kids.push(kidName);
        }
    return kids;
};

const nameKids = kidList => {
    let kidString = '';
    if (kidList.length > 1) {
        kidString = kidList.length + ' children named ';
    }
    if (kidList.length == 1) {
        kidString = kidList.length + ' child named ';
    }
    
    for (let i=0; i<kidList.length; i++) {
        kidString += kidList[i];
        if (i < kidList.length - 2) {
            kidString += ', ';
        } else if (i == kidList.length - 2) {
            kidString += ' and ';
        }
    }
    if (kidList.length >= 1) {
        return kidString;
    } else {
        return 'no children'
    }
}

const choosePets = () => {
    let pets = [];
    let numOfPets = Math.floor(Math.random() * 10);
    let possiblePets = ['spacecat', 'storybot', 'moonpig', 'Venus salamander'];
    while (pets.length < numOfPets) {
        pet = Math.floor(Math.random() * 4);
        pets.push(possiblePets[pet]);
    }
    return pets;
}

const countPets = (petList) => {
    let includedPets = [];
    if (petList.includes('Venus salamander')) {
        let numSalamanders = petList.filter(item => item==='Venus salamander').length;
        includedPets.push(numSalamanders, ' Venus salamander');
    }
    if (petList.includes('spacecat')) {
        let numSpacecats = petList.filter(item => item==='spacecat').length;
        includedPets.push(numSpacecats, ' spacecat');
    }
    if (petList.includes('storybot')) {
        let numStorybots = petList.filter(item => item==='storybot').length;
        includedPets.push(numStorybots, ' storybot');
    }
    if (petList.includes('moonpig')) {
        let numMoonpigs = petList.filter(item => item==='moonpig').length;
        includedPets.push(numMoonpigs, ' moonpig');
    }
    
    let petString = 'You will have the following pets: ';
    for (let i=0; i<includedPets.length; i++) {
        petString += includedPets[i];
        if (typeof includedPets[i] == 'string' && includedPets[i-1] > 1) {
            petString += 's';
        } 
        if (i<includedPets.length-3 && i%2 !== 0) {
            petString += ', ';
        } else if (i == includedPets.length - 3) {
            petString += ' and ';
        }
    }
    if (includedPets.length >= 1) {
        return petString;
    } else {
        return 'You will have no pets :(.';
    }
    
};

const tellMyFortune = () => {
    return `**Your Future Life**
Your name will be ${chooseFirstName} ${chooseSurname} of ${chooseHomePlanet}.
You will marry ${chooseSpouse} and the two of you will have ${nameKids(chooseKids())}.
${countPets(choosePets())}.
You will have a career as a ${chooseProfession}.
You will live to the age of ${ageOfDeath}, when you will be killed by ${chooseDeath}.`;
}

console.log(tellMyFortune());
    

 