const nextJest = require("next/jest");

/** nextJest é uma factory function 
 * que cria uma configuração Jest para o Next 
 * */

const createJestConfig = nextJest()

const jestConfig = createJestConfig({
    moduleDirectories: ["node_modules", "<rootDir>"]
});

module.exports = jestConfig;