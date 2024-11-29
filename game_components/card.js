"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Card {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    getName() {
        return this.name;
    }
}
exports.default = Card;
