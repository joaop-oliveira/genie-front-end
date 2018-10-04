/*
*
*   This is a test on cypress!!
*   To see the documentation please visit cypress.io/guides
*
*/

describe('Hello World Test', () => {
  it('Makes the login and authenticate', () => {
    cy.login('ANDRE', 'a', 'FORNECEDOR').as('login');
  });

  it('Visits the page and sees Hello World message hurraaaayy!', () => {
    cy.visit('webvelit/fornecedor/fornecedor/cadastrar');
    cy.get('[data-cy=input_clif_cgc_cpf]').type('00105937112113').should($el => {
      expect($el.val()).to.equals('00105937112113');
    });
  });
});
