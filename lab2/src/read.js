const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(text) {
    return new Promise(resolve =>
        rl.question(text, resolve)
    );
}

async function read(text) {
    try {
        const answer = await question(text);
        return answer;
    } catch(e) {
        console.error(e);
    } finally {
        rl.close();
    }
}

module.exports = read;
