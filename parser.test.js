import { parseFormula } from "../engine/parser.js";

describe("Parser Module", () => {
    test("Parses simple reaction", () => {
        const input = "H2 + O2 -> H2O";
        const result = parseFormula(input);

        expect(result.reactants).toEqual(["H2", "O2"]);
        expect(result.products).toEqual(["H2O"]);
    });

    test("Throws error for invalid format", () => {
        expect(() => parseFormula("InvalidFormat")).toThrow();
    });
});