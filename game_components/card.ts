import { Value } from "./values"

class Card {
    private name: string
    private value: Value

    constructor(name: string, value: Value) {
        this.name = name
        this.value = value
    }

    public getValue(): Value {
        return this.value
    }

    public getName(): string {
        return this.name
    }
}

export default Card
