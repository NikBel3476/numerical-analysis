
const readline = require('readline');
const util = require('util');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = util.promisify(rl.question).bind(rl);

export async function read(message: string): Promise<string> {
    try {
        const answer = await question(message);
        return answer.trim();
    } catch(e) {
        console.error(e);
        rl.close();
    }
}
