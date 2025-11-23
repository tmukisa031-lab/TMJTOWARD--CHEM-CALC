// Formula parser
export function parseFormula(input) {
    // Simple parser: splits reactants and products
    const [reactants, products] = input.split("->").map(side => side.trim().split("+").map(e => e.trim()));
    if (!reactants || !products) throw new Error("Invalid reaction format. Use 'A + B -> C'");
    return { reactants, products };
}