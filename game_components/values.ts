enum Value {
    "ACE" = 11,
    "TWO" = 2,
    "THREE" = 3,
    "FOUR" = 4,
    "FIVE" = 5,
    "SIX" = 6,
    "SEVEN" = 7,
    "EIGHT" = 8,
    "NINE" = 9,
    "TEN" = 10,
    "JACK" = 10,
    "QUEEN" = 10,
    "KING" = 10
}

function getValue(symbol: string): Value {
    switch (symbol) {
        case "A":
            return Value.ACE;
        case "2":
            return Value.TWO;
        case "3":
            return Value.THREE;
        case "4":
            return Value.FOUR;
        case "5":
            return Value.FIVE;
        case "6":
            return Value.SIX;
        case "7":
            return Value.SEVEN;
        case "8":
            return Value.EIGHT;
        case "9":
            return Value.NINE;
        case "T":
            return Value.TEN;
        case "J":
            return Value.JACK;
        case "Q":
            return Value.QUEEN;
        case "K":
            return Value.KING;
        default:
            throw new Error("Invalid card symbol");
    }
}

export { Value, getValue }