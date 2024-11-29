import { Value } from "./values"
import Card from "./card"

class Hand {
    private cards: Card[]

    constructor() {
        this.cards = []
    }

    public addCard(card: Card): void {
        this.cards.push(card)
    }

    public getCards(): Card[] {
        return this.cards
    }

    public getHandValue(): number {
        let handValue: number = 0
        let aceCount: number = 0

        this.cards.forEach(card => {
            if (card.getValue() == Value.ACE) {
                aceCount++
            }

            handValue += card.getValue()
        })

        while (handValue > 21 && aceCount > 0) {
            handValue -= 10
            aceCount--
        }

        return handValue
    }

    public clearHand(): void {
        this.cards = []
    }

    public toString(): string {
        let handString: string = ""
        for (let i = 0; i < this.cards.length; i++) {
            handString += this.cards[i].getName() + " "
        }
        return handString = handString + `(${this.getHandValue()})`
    }

    public toObfuscatedString(): string {
        let handString: string = "?? "
        for (let i = 1; i < this.cards.length; i++) {
            handString += this.cards[i].getName() + " "
        }
        return handString
    }
}

export default Hand