import readline from 'readline/promises'
import { stdin as input, stdout as output } from 'process'

import { stage } from './arguments.js'
import { stages } from './stages.js'
import { sendTexts } from './texting.js'

const texts = stages[stage]()

console.log(texts)
console.log('\n ------------------------------------ \n')

const execute = async function () {
    const rl = readline.createInterface({ input, output });
    try {
        const answer = await rl.question('Are you sure you want to send these texts? (y/n) ');
        const a = answer.toLowerCase().trim()
        const positive = a === 'y' || a === 'yes' || a === 'yeah' || a === 'yep' || a === 'yup'
        const response = positive ? 'Excellent, off they go!' : 'Good idea, I won\'t send them.';
        console.log(response)
        if (positive) {
            await sendTexts(texts)
        }
    } catch (err) {
        console.log(`Error: `, err);
    } finally {
        rl.close();
    }
    process.exit(1);
}

execute()