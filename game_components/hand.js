"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const values_1 = require("./values");
class Hand {
    constructor() {
        this.cards = [];
    }
    addCard(card) {
        this.cards.push(card);
    }
    getCards() {
        return this.cards;
    }
    getHandValue() {
        let handValue = 0;
        let aceCount = 0;
        this.cards.forEach(card => {
            if (card.getValue() == values_1.Value.ACE) {
                aceCount++;
            }
            handValue += card.getValue();
        });
        while (handValue > 21 && aceCount > 0) {
            handValue -= 10;
            aceCount--;
        }
        return handValue;
    }
    clearHand() {
        this.cards = [];
    }
    toString() {
        let handString = "";
        for (let i = 0; i < this.cards.length; i++) {
            handString += this.cards[i].getName() + " ";
        }
        return handString = handString + `(${this.getHandValue()})`;
    }
    toObfuscatedString() {
        let handString = "?? ";
        for (let i = 1; i < this.cards.length; i++) {
            handString += this.cards[i].getName() + " ";
        }
        return handString;
    }
}
exports.default = Hand;
