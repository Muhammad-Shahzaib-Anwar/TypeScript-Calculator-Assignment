import inquirer from "inquirer"

const questions = await inquirer.prompt([
    {
        type:"number",
        name:"num1",
        message:"Enter your 1st number",
    },
    {
        type:"number",
        name:"num2",
        message:"Enter your 2nd number",
    },
    {
        type:"list",
        name:"operator",
        message:"Select the operator",
        choices:["+","-","*","/"]
    },
]);
//console.log(questions);
let calculationResult=Calculator(questions.num1,questions.operator,questions.num2);
console.log(questions.num1,questions.operator,questions.num2 +" = "+ calculationResult);

function Calculator(num1:number,operator:string,num2:number){
    let result:number=0;
    if(operator=="+"){result= num1+num2;}
    else if(operator=="-"){result= num1-num2;}
    else if(operator=="*"){result= num1*num2;}
    else if(operator=="/"){result= num1/num2;}
    return result;
}
