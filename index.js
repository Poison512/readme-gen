// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import util from "util";
import generateMarkdown from "./Develop/utils/generateMarkdown.js";
const writeFile= util.promisify(fs.writeFile);
const generatedMarkdown = "./rm/generatedREADME.md"

const promptUser = () => {
  return inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide description of your project...'
    },
    {
      type: 'input',
      name: 'author',
      message: 'What is the authors name?',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHUb username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What commands does the user need to run?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know when using this repo...',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Names of contributers?',
    },
    {
      type: 'checkbox',
      name: 'lisence',
      message: 'What kind of lisence should your project have?',
      choices: [{ name: 'MIT'}, { name: 'BSD 2'}, { name: 'BSD 3'}, { name: 'NONE'}]
    },

  ]);
}


async function makeREADME() {
  try{
    const answers =  await promptUser();
    const generateREADME = generateMarkdown(answers);
    await writeFile(generatedMarkdown, generateREADME)
    console.log ('README has been generated!')
  }
    catch(err){
      console.log(err)
    }
    
}
makeREADME();
