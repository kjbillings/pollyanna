import * as families from './families/index.js'

const familyNames = Object.keys(families)
export const warnings = () => {
    const stage = process.argv[2]
    const family = process.argv[3]
    let hasError = false

    if (!stage) {
        console.error('You must provide a stage name as the first argument: invite | match')
        hasError = true
    }
    if (!family) {
        console.error('You must provide a family name as the second argument: ' + familyNames.join(' | '))
        hasError = true
    }
    if (hasError) {
        console.log({ArgsReceived: {
            stage,
            family,
        }})
        process.exit(1)
    }
}

warnings()

export const stage = process.argv[2]
export const familyName = process.argv[3]
