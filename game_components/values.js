"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Value = void 0;
exports.getValue = getValue;
var Value;
(function (Value) {
    Value[Value["ACE"] = 11] = "ACE";
    Value[Value["TWO"] = 2] = "TWO";
    Value[Value["THREE"] = 3] = "THREE";
    Value[Value["FOUR"] = 4] = "FOUR";
    Value[Value["FIVE"] = 5] = "FIVE";
    Value[Value["SIX"] = 6] = "SIX";
    Value[Value["SEVEN"] = 7] = "SEVEN";
    Value[Value["EIGHT"] = 8] = "EIGHT";
    Value[Value["NINE"] = 9] = "NINE";
    Value[Value["TEN"] = 10] = "TEN";
    Value[Value["JACK"] = 10] = "JACK";
    Value[Value["QUEEN"] = 10] = "QUEEN";
    Value[Value["KING"] = 10] = "KING";
})(Value || (exports.Value = Value = {}));
function getValue(symbol) {
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
