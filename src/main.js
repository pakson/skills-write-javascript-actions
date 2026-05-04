import getJoke from "./joke.js";
import * as core from "@actions/core";

async function run() {
    try {
        const joke = await getJoke();
        console.log(joke);
        core.setOutput("joke", joke);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
