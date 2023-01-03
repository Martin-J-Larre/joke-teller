const btn = document.getElementById('btn');
const audioElement = document.getElementById('audio');


const test = (joke) => { 
    VoiceRSS.speech({
        key: '42dc47d8b22740028e66c57dd526b09e',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}
const getJokes = async () => { 
    const apiURL ='https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&idRange=0-150';
    let joke = '';

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`
        } else {
            joke = data.joke;
        }
        console.log("Joke", joke);
    } catch (err) {

        console.log("Error",err);
    }
    test(joke)
}
getJokes();
