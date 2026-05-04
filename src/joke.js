import request from "request-promise";

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com",
    headers: {
        Accept: "application/json",
        "User-Agent": "Writing JavaScript action GitHub Skills excercise"
    },
    json: true
};

export default async function getJoke() {
    try {
        const response = await request(options);
        return response.joke;
    } catch (error) {
        console.error(error);
        return "No joke for you today!";
    }
}

