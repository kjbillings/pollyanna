export const getinvitationMessage = (person, giftIdeaLimit, priceLimit, invitationResponseDeadline) => {
    const name = person.name
    const singularGiftIdea = giftIdeaLimit === 1
    const message = `Hi ${name}!
You are invited to join our pollyanna gift exchange!
Question\: What ${singularGiftIdea ? 'is a' : 'are up to'} ${giftIdeaLimit} gift idea${singularGiftIdea ? '' : 's'} you would like to receive for pollyanna, under $${priceLimit}?

Please respond ${invitationResponseDeadline ? `by ${invitationResponseDeadline}` : 'ASAP'} so I can match you with another person and share their gift request!

Please text me back, or call if you do not want to text.
PS\: If you are not participating this time, just let me know!`
    return message
}

export const getmatchMessage = (person, giftSwapDate) => {
    const name = person.name
    const matchName = person.match.name
    const matchPronoun = person.match.pronoun
    const matchGift = person.match.gift
    const message = `Hi ${name}, here is your pollyanna!
You have been matched with ${matchName}!
${matchPronoun} would like one or more of the following gifts\:

${matchGift}

${giftSwapDate ? `We will plan to exchange gifts on ${giftSwapDate}!` : ''}
Please let me know if you have any questions!
Happy gifting!`
    return message
}