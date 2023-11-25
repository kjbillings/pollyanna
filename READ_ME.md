### Pollyanna Gift Exchange
A pollyanna gift exchange is a great holiday tradition! My extended family would normally (usually on Thanksgiving) write our names on a piece of paper with a few ideas of what we wanted for a gift. It could be small things under a certain price point that you wouldn't mind someone getting for you. Then on the specified date (usually Christmas for us) you get together and give the gift to the person you were matched with! It's a great time, because you never know who's gonna get you a gift!

With this little node app, you can manage a larger group gift exchange by filling out a js file with data about the family, and sending out invitations via text from your macbook!

You can even manage multiple family gift exchanges by having multiple family configuration files! 

#### Invite
Invite people to join in your gift exchange easily using the `npm run invite -- FAMILY_NAME`

#### Match
Match participants with each other randomly (as long as its not themselves they're matched to, nor anyone in their household) using the script: `npm run match -- FAMILY_NAME`... DO THIS ONLY once you've filled in a gift for each participant.

#### Disclaimer
It doesn't work with odd numbers of people. Plan to not join in the fun yourself this year, that way you can add or subtract yourself if you need another to make an even number (then you join in).

---

* Requirements:
    - Must be on a mac.
    - Must have Messages app open. (probably will need to grant permissions the first time)
    - Must be using Node 17+ (this was built on 18.13.0) (use nvm to manage multiple node versions!)

* Step 0:
    - Run `npm i` in your terminal

* Step 1: 
    - Make sure the list of family members is up to date for those you think will want to play, including their phone numbers. (no spaces, hyphens, or parens, and start with country-code (+1 if in the US))
    - Make sure you configure the fields available to a family configuration including: `people`, `giftIdeaLimit`, `priceLimit`, `invitationResponseDeadline`, and `pollyannaMeetupDate`
    - Add the family as a named export in `src/families/index.js`

* Step 2:
    - Invite everyone by running this in your terminal: `npm run invite -- FAMILY_NAME`
    - Confirm the that everything looks good, if it doesn't, go fix the data for it. Confirm it looks good by typing "yes" when asked, then pressing enter.

* Step 3:
    - People will respond with the gifts they want. Copy the string of the gift ideas and put it into their configuratino in the family file under "gift: ''"

* Step 4:
    - When you have gifts for everyone that's playing, go to your terminal and run this: `npm run match -- FAMILY_NAME`

* Step 5:
    - Confirm the that everything looks good, if it doesn't, go fix the data for it. Confirm it looks good by typing "yes" when asked, then pressing enter.'
    - All your texts will be sent, and everyone will see who they got, and what gift the person wants.

* Step 6: Have a great pollyanna!