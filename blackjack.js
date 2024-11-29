"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deck_1 = __importDefault(require("./game_components/deck"));
const hand_1 = __importDefault(require("./game_components/hand"));
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// intialize balance and data
let balance = 1000;
let deck = new deck_1.default();
let userHand = new hand_1.default();
let dealerHand = new hand_1.default();
let breakGame = false;
console.log("=== Welcome to Blackjack ===");
// main game loop
while (true) {
    // check if user has gone broke
    if (balance <= 0) {
        console.log("You have gone broke! Game over.");
        break;
    }
    // ask if user wants to cash out
    console.log("Enter Y if you would like to cash out, or any other key to continue playing.");
    let cashOut = prompt("> ").toUpperCase();
    if (cashOut === "Y") {
        break;
    }
    // ask how much the user would like to bet
    console.log("How much would you like to bet? You have " + balance + " dollars.");
    let bet = parseInt(prompt("> "));
    if (Number.isNaN(bet) || bet < 0 || bet > balance) {
        console.log("Please enter a valid number. In your balance range.");
        continue;
    }
    // initialize deck and hands
    deck.resetDeck();
    userHand.clearHand();
    dealerHand.clearHand();
    // deal cards
    userHand.addCard(deck.dealCard());
    dealerHand.addCard(deck.dealCard());
    userHand.addCard(deck.dealCard());
    dealerHand.addCard(deck.dealCard());
    console.log(`Your hand: ${userHand.toString()}, Dealer hand: ${dealerHand.toObfuscatedString()}`);
    // user hit and stand cycle
    breakGame = false;
    while (true) {
        console.log("Would you like to hit or stand? (H/S)");
        let action = prompt("> ").toUpperCase();
        if (action === "H") {
            userHand.addCard(deck.dealCard());
            console.log(`Your hand: ${userHand.toString()}, Dealer hand: ${dealerHand.toObfuscatedString()}`);
            if (userHand.getHandValue() > 21) {
                console.log("You busted!");
                balance = balance - bet;
                breakGame = true;
                break;
            }
        }
        else if (action === "S") {
            break;
        }
        else {
            console.log("Please enter a valid action.");
        }
    }
    if (breakGame) {
        continue;
    }
    // dealer hit and stand cycle
    while (true) {
        if (dealerHand.getHandValue() < 17) {
            dealerHand.addCard(deck.dealCard());
        }
        else {
            break;
        }
    }
    console.log(`Your hand: ${userHand.toString()}, Dealer hand: ${dealerHand.toString()}`);
    // determine winner
    if (dealerHand.getHandValue() > 21) {
        console.log("Dealer busted! You win!");
        balance = balance + bet;
    }
    else if (userHand.getHandValue() > dealerHand.getHandValue()) {
        console.log("You win!");
        balance = balance + bet;
    }
    else if (userHand.getHandValue() == dealerHand.getHandValue()) {
        console.log("Tie!");
    }
    else {
        console.log("You lose!");
        balance = balance - bet;
    }
}
