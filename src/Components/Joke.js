import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Joke = props => {
    const [isVisible, setVisibility] = useState(false);
    const [setup, setSetup] = useState("");
    const [punchline, setPunchline] = useState("");

    const getJoke = e => {
        axios.get("https://official-joke-api.appspot.com/random_joke")
            .then(res => {
                setSetup(res.data.setup);
                setPunchline(res.data.punchline);
                setVisibility(false);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getJoke();
    }, []);

    return (
        <div>
            <p>{setup}</p>
            <p>
                {
                    isVisible ? <em>{punchline}</em> : <em>...</em>
                }
            </p>
            <button onClick={e => setVisibility(!isVisible)}>
                {
                    isVisible ? "Hide Punchline" : "Show Punchline"
                }
            </button>
            <button onClick={getJoke}>Get a better joke</button>
        </div>
    );
}

export default Joke;