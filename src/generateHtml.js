function generateHtml(teamMembers) {
  const htmlString = teamMembers.reduce((string, employee) => {
    return (
      string +
      `<div class="flex flex-wrap w-1/3">
           <div class="w-full p-2 md:p-2">
             <div class="flex justify-center">
                <div class="employee-card block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                  <h4 class="text-white text-2xl leading-tight font-medium mb-4">${employee.getName()}</h4>
                  <h6 class="text-white text-xl leading-tight font-medium mb-4">${employee.getRole()}</h6>
                  ${employee.getRoleImg()}
                  <p class="text-white text-lg text-base mt-4 mb-4">ID: ${employee.getId()}</p>
                  <p class="text-white text-lg text-base mt-4 mb-4">Email: ${employee.renderEmailMailtoStart()}${employee.getEmail()}${employee.renderEmailMailtoEnd()}</p>
                  <p class="text-white text-lg text-base mt-4">${employee.render()}</p>
                </div>
              </div>
            </div>
          </div>`
    );
  }, "");

  const employeeData = renderEmployeeData(htmlString);

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
      <link rel="stylesheet" href="./dist/style.css" />
      <title>Document</title>
    </head>
    <body>
      <header class="relative w-full flex flex-wrap items-center justify-between py-10 shadow-lg">
        <div class="container-fluid w-full flex flex-wrap items-center justify-around px-6">
          <div class="container-fluid">
            <h1 class="text-xl">My Team</h1>
          </div>
        </div>
      </header>
      <section class="overflow-hidden text-gray-700">
        <div class="container px-5 py-20 mx-auto lg:pt-12 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2 justify-center">
            ${employeeData}  
          </div>  
        </div>
      </section>
      <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
    </body>
  </html>`;
}
const renderEmployeeData = (employeeData) => `${employeeData}`;

module.exports = generateHtml;
