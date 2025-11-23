// Load engine
const ChemEngine = new ChemistryEngine();

// Parse formula
ChemEngine.parseFormula("H2SO4");  

// Balance reaction
ChemEngine.balance("H2 + O2 -> H2O");  

// Calculate molar mass
ChemEngine.molarMass("NaCl");  

// Stoichiometry
ChemEngine.stoichiometry("2 H2 + O2 -> 2 H2O", { H2: 4 });