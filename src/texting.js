import { exec } from 'child_process'

const sendText = (number, message) => {
    return new Promise((resolve, reject) => {
        exec(`osascript -e 'tell application \"Messages\" to send \"${message}\" to buddy \"${number}\"'`, (err, stdout, stderr) => {
            if (err) {
                //some err occurred
                console.error(err)
                console.log(`failed to send to ${number}`)
                reject(err)
            } else {
                // the *entire* stdout and stderr (buffered)
                if (stdout) console.log(`stdout: ${stdout}`)
                if (stderr) console.log(`stderr: ${stderr}`)
                console.log(`message sent to ${number}`)
                resolve()
            }
        });
    })
}

export const sendTexts = (texts) => {
    const promises = []
    texts.forEach((text) => {
        const number = text.number
        const message = text.message
        promises.push(sendText(number, message))
    })
    return Promise.all(promises)
}