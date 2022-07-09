function generateHtml(teamMembers) {
  const htmlString = teamMembers.reduce((string, employee) => {
    return (
      string +
      `\t<li> job role: ${employee.constructor.name}\n name: ${
        employee.name
      }\n ID: ${employee.id}\n email: ${
        employee.email
      }\n ${employee.render()}${employee.getFourthInput()}</li>\n`
    );
  }, "\n");

  const renderList = (list) => `<ul>${list}</ul>`;

  const list = renderList(htmlString);

  console.log(list);
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
    

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
    <body>
    ${list}
    </body>
  </html>`;
}

module.exports = generateHtml;
