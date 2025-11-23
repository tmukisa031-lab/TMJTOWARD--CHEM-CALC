import { calculateProducts } from "../engine/stoichiometry.js";

describe("Stoichiometry Module", () => {
    test("Returns products (placeholder)", () => {
        const balanced = {
            products: ["H2O"]
        };

        const result = calculateProducts(balanced);
        expect(result).toEqual(["H2O"]);
    });
});