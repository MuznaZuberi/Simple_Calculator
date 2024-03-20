//Let's Create A Simple Calculator

import inquirer from "inquirer";
import chalk from "chalk";


let Calculator = await inquirer.prompt([


{
	name: "num1",
	type: "number",
	message: "Enter your first_number? ",
},




{
	name: "num2",
	type: "number",
	message: "Enter your second_number? ",
},





{
	name: "Operators",
	type: "list",
	message: "Choose one operator ? ",
	choices: ["Addition", "Sutraction", "Multiplication", "Division"],
},



]);



if(Calculator.Operators == "Addition"){
	console.log(chalk.green("Addition", Calculator.num1 + Calculator.num2));

}
else if(Calculator.Operators == "Sutraction"){
	console.log(chalk.green("Sutraction", Calculator.num1 - Calculator.num2));
}

else if(Calculator.Operators == "Multiplication"){
	console.log(chalk.green("Multiplication", Calculator.num1 * Calculator.num2));
}

else if(Calculator.Operators == "Division"){
	console.log(chalk.green("Division", Calculator.num1 / Calculator.num2));
}

else{
	console.log("Please enter a valid number!")
}



