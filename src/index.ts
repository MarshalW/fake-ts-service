import { program } from "commander";

export const Hello = (name: string) => `Hello ${name}`;

program.option("--first").option("-s, --separator <char>");

program.parse();

console.log("fake ts service OK.");
