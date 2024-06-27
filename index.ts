import chalk from "chalk";
import inquirer from "inquirer";
let mybalance = 20000
let mypincode = 171999

console.log(chalk.bold.blue("WELL COME"));
console.log(chalk.italic.red("please enter your ATM card"));
// console.log(chalk.bold.blue("my balance is 20000"));
// console.log(chalk.bold.red("my pin code is 12345"));

// CODING //
let language = await inquirer.prompt([                
{                  
 name:"language",
 message:"plaese select a language",
 type: "list",
 choices:["urdu","english"],
},
{
    name: "id card",
    message:"kindly 'enter yiur id card(your name)",
    type:"input",
}])
let code = await inquirer.prompt([

{
    name:"mypin",
    message:"kindly enterr your pin code",
    type: "number"
},
]);  

if(code.mypin === mypincode ){           // store condition
    console.log(chalk.bold.blue("your pincoden is correct"))
    let accounttype = await inquirer.prompt([
        {
            name: "account",
            message: "select your account",
            type: "list",
            choices: ["current account", "saving account"]
        }
    ]);
    let operationAns =await inquirer.prompt([
       {
        name :"operation",
        message:"select your transaction",
        type:"list",
        choices:["withdraw", "checkbalanac"],
       } 
    ]);
    if (operationAns.operation === "withdraw"){
        let withdraw = await inquirer.prompt([
            {
                name: "amount",
                message:"please select your amount",
                type:"list",
                choices:["10000",  "25000", "1000"]
            }
        ]);
if(withdraw.amount > mybalance){
    console.log(chalk.red.bold("insufficient balance"));
}
mybalance -= withdraw.amount;
console.log(`'your remaning balance is:', ${mybalance}`)

    }else if (operationAns.operation === "checkbalance"){
        console.log(`your current balance is ${mybalance}`);
    }
    }
else {
    console.log(chalk.bold.green("Oops! your pin code is incorrect"))
}  ;   
   console.log(chalk.green.bold("THANK YOU"));   
   
