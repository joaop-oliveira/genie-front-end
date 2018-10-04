// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
/*
*
*  Comando customizado de authenticação para os testes em cypress e2e
*
*/
Cypress.Commands.add('login', (usuario, senha, modulo) => {
  cy.request({
    url: 'http://10.7.155.94/webvelit/api/shared/auth',
    method: 'GET',
    headers: { usuario, senha, modulo },
  }).then(response => {
    expect(response.body).to.have.property('token');
    console.log(response.body.token);
    cy.window().then(win => {
      win.sessionStorage.setItem('erpToken', response.body.token);
    });
  });
});

/*
*
* ************************* ************************* ************************* */

/*
*
*  Comando customizado de authenticação para os testes em cypress e2e
*
*/

Cypress.Commands.add('getToken', () =>
  cy.window().then(win => {
    const token = win.sessionStorage.getItem('erpToken');
    return token;
    console.log('token ======>> ', token);
  })
);

/*
*
* ************************* ************************* ************************* */

/*
*
*  Comando customizado de authenticação para os testes em cypress e2e
*
*/

Cypress.Commands.add('callUrl', { prevSubject: true }, (token, url, method, headers) => {
  console.log('token ======>> ', token);
  return fetch(url, {
    method,
    body: {},
    headers: {
      Accept: 'application/json, text/plain, */*',
      token,
      parametros: JSON.stringify(headers),
    },
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.error(error);
    });
});

/*
*
* ************************* ************************* ************************* */

/*
*
*  Comando customizado de Correção ortografica para os testes em cypress e2e
*
*/

Cypress.Commands.add('testApi', { prevSubject: true }, (data, property) => {
  expect(data).to.have.property(property);
});

/*
*
* ************************* ************************* ************************* */

/*
*
*  Comando customizado de Correção ortografica para os testes em cypress e2e
*
*/
Cypress.Commands.add('checkOrth', { prevSubject: true }, ($element, data) => {
  const phrase = $element.text().replace('*', '');
  const formattedPhrase = phrase
    .toLowerCase()
    .split(' ')
    .sort();
  const dic = formattedPhrase.map(word => {
    cy.readFile(`cypress/fixtures/${word.charAt(0)}.txt`)
      .then(file => {
        file = file.split('\n');
        return file;
      })
      .then(dic => {
        const match = dic.filter(dictionaryWord => dictionaryWord === word).sort()[0];
        expect(match).to.equals(word);
      });
  });
});
//
//
// -- This is a child command --

//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
