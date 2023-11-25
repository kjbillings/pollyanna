import * as families from './families/index.js'
import { familyName } from './arguments.js'
import { generatePollyannaList } from './matches.js'
import { getinvitationMessage, getmatchMessage } from './message-text.js'

const family = families[familyName]

export const stages = {
    invitation: () => {
        const {
            people,
            giftIdeaLimit,
            priceLimit,
            invitationResponseDeadline,
        } = family
        const texts = []
        people.forEach((person) => {
            const number = person.number
            const message = getinvitationMessage(person, giftIdeaLimit, priceLimit, invitationResponseDeadline)
            texts.push({ number, message })
        })
        return texts
    },

    match: () => {
        const { people, giftSwapDate } = family
        const {
            peopleWithGiftsByName,
            namesOfPeopleWithGifts,
        } = generatePollyannaList(people)

        const texts = []
        namesOfPeopleWithGifts.forEach((name) => {
            const person = peopleWithGiftsByName[name]
            const number = person.number
            const message = getmatchMessage(person, giftSwapDate)
            texts.push({ number, message })
        })
        return texts
    },
}