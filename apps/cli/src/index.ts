#!/usr/bin/env bun
import { Command } from "commander";

const program = new Command();

program.name("mycli").description("CLI application").version("1.0.0");

program
  .command("hello")
  .description("Say hello")
  .argument("<name>", "Name to greet")
  .action((name: string) => {
    console.log(`Hello, ${name}!`);
  });

program.parse();
