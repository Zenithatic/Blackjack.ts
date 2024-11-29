import { Value, getValue } from "./values"
import Card from "./card"
const faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"]
const suites = ["♠", "♣", "♥", "♦"]

class Deck {
    private cards: Card[]

    constructor() {
        this.cards = []
        this.resetDeck()
    }

    public resetDeck() {
        // Initialize cards
        this.cards = []
        for (let i = 0; i < faces.length; i++) {
            let value: Value = getValue(faces[i])

            for (let j = 0; j < suites.length; j++) {
                this.cards.push(new Card(`${faces[i]}${suites[j]}`, value))
            }
        }

        // Shuffle
        for (let i = 0; i < this.cards.length; i++) {
            let randomIndex = Math.floor(Math.random() * this.cards.length)
            let temp = this.cards[i]
            this.cards[i] = this.cards[randomIndex]
            this.cards[randomIndex] = temp
        }
    }

    public dealCard(): Card {
        return this.cards.pop()!
    }
}

export default Deck