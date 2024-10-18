import {useState, useEffect} from 'react';
import './App.css';
import Confetti from 'react-confetti';

const shuffleDeck = (deck) => {
    const newDeck = [];

    while (deck.length > 0) {
        const randomId = Math.floor(Math.random() * deck.length);

        newDeck.push(deck[randomId]);
        deck.splice(randomId, 1);
    }

    return newDeck;
};

const createDeck = () => {
    const deck = [];
    const images = ['🌻', '🐽', '🦖', '🐳'];

    for (let i = 1; i < images.length + 1; i++) {
        const card = {id: i.toString(), value: images[i - 1]};
        const twin = {id: i + '*', value: images[i - 1]};
        deck.push(card);
        deck.push(twin);
    }

    return shuffleDeck(deck);
};

function Card({card, onClick, isFlipped}) {
    const handleClick = () => {
        if (!isFlipped) {
            onClick(card);
        }
    };

    return <button onClick={handleClick}>{isFlipped ? card.value : 'X'}</button>;
}

function App() {
    const [cards, setCards] = useState([]);
    const [counter, setCounter] = useState(0);
    const [flipped, setFlipped] = useState([]);
    const [matched, setMatched] = useState([]);

    useEffect(() => {
        setCards(createDeck());
    }, []);

    const handleClick = (card) => {
        setFlipped((prev) => [...prev, card]);

        if (flipped.length === 1) {
            if (flipped[0].value === card.value) {
                setMatched((prev) => [...prev, ...flipped, card]);
            }
            setTimeout(() => {
                setFlipped([]);
            }, 500);
        }

        if (!flipped.includes(card) && !matched.includes(card)) {
            setCounter((prev) => prev + 1);
        }
    };

    const handleReload = () => {
        setCards(createDeck());
        setCounter(0);
        setFlipped([]);
        setMatched([]);
    };

    return (
        <>
            {matched.length === cards.length && <Confetti />}
            <div id="playhead">
                <div id="counter">Nombre de coups : {counter}</div>
                <div>
                    <a href="#" onClick={handleReload}>
                        reload()
                    </a>
                </div>
            </div>
            <div id="playground">
                {cards.map((card, index) => {
                    return <Card key={index} card={card} onClick={handleClick} isFlipped={flipped.includes(card) || matched.includes(card)}></Card>;
                })}
            </div>
        </>
    );
}

export default App;
