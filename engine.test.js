import { processReaction } from "../engine/engine.js";

describe("Main Engine", () => {
    test("Processes a reaction and returns structured output", () => {
        const result = processReaction("H2 + O2 -> H2O");

        expect(result.parsed).toBeDefined();
        expect(result.balanced).toBeDefined();
        expect(result.products).toBeDefined();
    });

    test("Returns error for wrong reaction format", () => {
        const result = processReaction("wrong");

        expect(result.error).toBeDefined();
    });
});