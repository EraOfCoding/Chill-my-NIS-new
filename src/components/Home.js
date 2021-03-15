import React from 'react'
import '../style/home.css'

function Home() {
    return(
        <div className="home">
            <div className="landing">
                <h1>Chill my NIS</h1>
                <h4>~Chill with other NIS students~</h4>
            </div>
            <h1 id="have-fun">Ready to have fun?</h1>
            <a onClick={() => window.open('https://discord.gg/h3zyDku')}>Then join!</a>
            <div className="benefits">
                <div>
                    <h2>Convinience</h2>
                    <p>
                    All needed stuff is there. Channels like#bot-commands, #game-zone, #counting, #spam are very useful
                    </p>
                </div>
                <div>
                    <h2>Entertainment</h2>
                    <p>
                    You can play games, listen to music, do programming here! There are many things to do!
                    </p>
                </div>
                <div>
                    <h2>Wild streaming</h2>
                    <p>
                    You can start  a stream or watch a stream of other members very easily. Just join voice and have fun!
                    </p>
                </div>
            </div>
            <div className="quote-container">
                <h5 id="quote">"Toxicity doesn't make you cool. It makes you Mug"</h5>
                <h6>~ Era Tzu, Art of Chill</h6>
            </div>
        </div>
    )
}

export default Home