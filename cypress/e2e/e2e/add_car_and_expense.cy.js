import { garagePage } from "../pages/GaragePage";
import { expensesPage } from "../pages/ExpensesPage";

describe('Garage and Expenses Test', () => {
  before(() => {
    cy.visit('/');
    cy.get('input[formcontrolname=email]').type(Cypress.env('email'));
    cy.get('input[formcontrolname=password]').type(Cypress.env('password'));
    cy.contains('Sign In').click();
  });

  it('should add car and expense', () => {
    garagePage.openGarage();
    garagePage.addCar('Audi', 'A4', '120000');
    expensesPage.addExpense('Gasoline', '50', '2000');
  });
});