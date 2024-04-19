import inquirer from "inquirer";

async function fetch() {
  const data = await inquirer.prompt({ name: "dat", type: "input" });
  return data.dat;
}

console.log(fetch());
