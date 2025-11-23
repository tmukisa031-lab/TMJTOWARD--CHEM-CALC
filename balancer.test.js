import { balanceEquation } from "../engine/balancer.js";

describe("Balancer Module", () => {
    test("Returns parsed reaction (placeholder test)", () => {
        const parsed = {
            reactants: ["H2", "O2"],
            products: ["H2O"]
        };

        const result = balanceEquation(parsed);
        expect(result).toEqual(parsed);
    });
});