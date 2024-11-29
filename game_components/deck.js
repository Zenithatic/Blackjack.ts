"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const values_1 = require("./values");
const card_1 = __importDefault(require("./card"));
const faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
const suites = ["♠", "♣", "♥", "♦"];
class Deck {
    constructor() {
        this.cards = [];
        this.resetDeck();
    }
    resetDeck() {
        // Initialize cards
        this.cards = [];
        for (let i = 0; i < faces.length; i++) {
            let value = (0, values_1.getValue)(faces[i]);
            for (let j = 0; j < suites.length; j++) {
                this.cards.push(new card_1.default(`${faces[i]}${suites[j]}`, value));
            }
        }
        // Shuffle
        for (let i = 0; i < this.cards.length; i++) {
            let randomIndex = Math.floor(Math.random() * this.cards.length);
            let temp = this.cards[i];
            this.cards[i] = this.cards[randomIndex];
            this.cards[randomIndex] = temp;
        }
    }
    dealCard() {
        return this.cards.pop();
    }
}
exports.default = Deck;
