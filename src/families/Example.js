// These 3 variables will show up in the invitation message
export const giftIdeaLimit = 3
export const priceLimit = 30
export const invitationResponseDeadline = undefined // 'Tuesday, the 15th' // (will show ASAP if left as undefined)

// This variable will show up in the match message as the day you'll exchange gifts
export const giftSwapDate = 'Sunday, the 20th'

const STEVE = 'Steve'
const DENISE = 'Denise'
const LARRY = 'Larry'
const SUSIE = 'Susie'
const LUKE = 'Luke'

const households = {
    [LARRY]: [LARRY, DENISE],
    [STEVE]: [STEVE],
    [SUSIE]: [SUSIE],
    [LUKE]: [LUKE],
}

export const people = [
    {
        name: LARRY,
        number: '+15555555',
        pronoun: 'He',
        household: households[LARRY],
        gift: 'A fancy hat'
    },
    {
        name: DENISE,
        number: '+15555555',
        pronoun: 'She',
        household: households[LARRY],
        gift: 'A pair of shoes, A pair of socks, A pair of pants'
    },
    {
        name: STEVE,
        number: '+15555555',
        pronoun: 'He',
        household: households[STEVE],
        gift: 'A videogame, a book, a movie'
    },
    {
        name: SUSIE,
        number: '+15555555',
        pronoun: 'She',
        household: households[SUSIE],
        gift: 'a gift card for a massage, a gift card for a manicure, a gift card for a pedicure'
    },
    {
        name: LUKE,
        number: '+15555555',
        pronoun: 'He',
        household: households[LUKE],
        gift: ''
    },
]