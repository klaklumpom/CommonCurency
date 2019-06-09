const inquirer = require('inquirer')
var Inputdata = [{
    type: 'input',
    name: 'MoneyType',
}]
inquirer.prompt(Inputdata).then(answers => {
    const fs = require('fs');
    let rawdata = fs.readFileSync('Common-Currency.json');
    let MoneyType = JSON.parse(rawdata);
    let totalMoney = MoneyType[answers['MoneyType']];
    if (typeof totalMoney !== "undefined") {
        console.log(`${answers['MoneyType']} is ${totalMoney['name']} (${totalMoney['symbol']})`)
    } else {
        console.log("Cannot find currency");
    }
})