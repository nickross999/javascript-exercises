const findTheOldest = function(peopleArray) {
    let indexOfOldestPerson = 0;
    let ageOfOldestPerson = 0;
    for (let i = 0; i < peopleArray.length; i++){
        if (!("yearOfDeath" in peopleArray[i])){
            if (2024 - peopleArray[i].yearOfBirth > ageOfOldestPerson){
                indexOfOldestPerson = i;
                ageOfOldestPerson = 2024 - peopleArray[i].yearOfBirth;
                }    
        }

        else if (peopleArray[i].yearOfDeath - peopleArray[i].yearOfBirth > ageOfOldestPerson){
            indexOfOldestPerson = i;
            ageOfOldestPerson = peopleArray[i].yearOfDeath - peopleArray[i].yearOfBirth;
        }
    }
    return peopleArray[indexOfOldestPerson];
};

// Do not edit below this line
module.exports = findTheOldest;
