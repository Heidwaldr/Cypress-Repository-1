class GaragePage {
    openGarage() {
      cy.contains('Garage').click();
    }
  
    addCar(brand, model, mileage) {
      cy.contains('Add car').click();
      cy.get('#addCarBrand').select(brand);
      cy.get('#addCarModel').select(model);
      cy.get('#addCarMileage').type(mileage);
      cy.contains('Add').click();
    }
  }
  
  export const garagePage = new GaragePage();