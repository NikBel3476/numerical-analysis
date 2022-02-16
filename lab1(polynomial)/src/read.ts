
const readline = require('readline');
const util = require('util');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(text: string): Promise<string> {
    return new Promise(resolve =>
        rl.question(text, resolve)
    );
}

export async function read(message: string): Promise<string> {
    try {
        const answer = await question(message);
        return answer.trim();
    } catch(e) {
        console.error(e);
        rl.close();
    }
}
