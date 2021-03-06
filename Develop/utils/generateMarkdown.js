export default
function generateMarkdown(data){
  return `# ${data.title}
  ${data.description}
  ## TABLE OF CONTENTS:
  * [INSTALLATION](#installation)
  * [USAGE](#usage)
  * [CONTRIBUTION](#contribution)
  * [TESTS](#test) 
  * [LISENCE](#lisence)
  * [QUESTIONS](#questions)
  ## INSTALLATION:
  OPEN CONSOLE AND RUN THE FOLLOWING TO INSTALL DEPENDENCIES:
  \`\`\`${data.installation}\`\`\`
  ### USAGE:
  ${data.usage}
  ### CONTRIBUTERS:
  ${data.contribution}
  ### LISENCE:
  THIS PROJECT IS LISENCED BY:
  ${data.lisence}
  ### QUESTIONS:
  LET ME KNOW IF YOU HAVE ANY QUESTIONS, CONTACT ME @:
  [GitHub](https://github.com/${data.username}) or 
  by email at ${data.email}
   `;
}


