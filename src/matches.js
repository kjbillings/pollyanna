const getRandomIdx = (max) => Math.floor(Math.random() * max)

export const getPeopleWithGiftsByName = (people) => {
    const peopleWithGiftsByName = people.reduce((acc, person) => {
        if (!!person.gift) {
            acc[person.name] = person
        }
        return acc
    }, {})

    const namesOfPeopleWithGifts = Object.keys(peopleWithGiftsByName)
    const participantCount = namesOfPeopleWithGifts.length
    return {
        peopleWithGiftsByName,
        namesOfPeopleWithGifts,
        participantCount,
    }
}

export const generatePollyannaList = (people) => {
    console.log('I sure hope you added gifts for everyone participating')
    
    const {
        peopleWithGiftsByName,
        namesOfPeopleWithGifts,
        participantCount,
    } = getPeopleWithGiftsByName(people)
 
    console.log(`We have ${participantCount} people with gifts!`)
    if (participantCount % 2 !== 0) {
        throw new Error('We need an even number of participants... :(')
    }
    
    const getRandomNameOfPersonWithGifts = () => namesOfPeopleWithGifts[getRandomIdx(participantCount)]
    
    const usedNames = {}
    const getUniqueRandomNameOutsideOfPersonsHousehold = (person) => {
        let name = getRandomNameOfPersonWithGifts()
        while (usedNames[name] || person.household.includes(name)) {
            name = getRandomNameOfPersonWithGifts()
        }
        usedNames[name] = true
        return name
    }
    namesOfPeopleWithGifts.forEach((name) => {
        const person = peopleWithGiftsByName[name]
        const matchName = getUniqueRandomNameOutsideOfPersonsHousehold(person)
        peopleWithGiftsByName[name].match = peopleWithGiftsByName[matchName]
    })
    return {
        peopleWithGiftsByName,
        namesOfPeopleWithGifts,
    }
}