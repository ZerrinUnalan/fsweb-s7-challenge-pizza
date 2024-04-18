beforeEach(() => {
  cy.visit("http://localhost:5173/");

  cy.contains("ACIKTIM").click();
});

it("FORMU DOLDUR VE GÖNDER", () => {
  // kafana göre boyut
  cy.get("#sizeTEST input[type=radio]")
    .should("be.visible")
    .then(($radios) => {
      const radios = $radios.toArray();
      const randomRadio = Cypress._.sample(radios);
      cy.wrap(randomRadio).check();
    }); // kafana göre hamur
  cy.get('[data-cy="pastry"]')
    .should("be.visible")
    .then(($select) => {
      const options = $select.find("option").toArray();
      const randomOption = Cypress._.sample(options);
      const value = randomOption.value;
      cy.get('[data-cy="pastry"]').select(value);
    });
  // kafana göre 6 adet fazladan malzeme

  cy.get("#checkboxes input[type=checkbox]")
    .should("be.visible")

    .then(function ($items) {
      return Cypress._.sampleSize($items.toArray(), 5);
    })
    .should("have.length", 5)
    .click({ multiple: true });
  cy.get("#checkboxes input[type=checkbox]:checked").should("have.length", 5);
  // İsim yaz
  cy.get('[data-cy="name"]').type("Zerrin Ünalan");
  // Not yaz
  cy.get('[data-cy="note"]').type("Karım hamile hızlı getirebilir misiniz?");

  // sipariş ver butonuna tıkıtık
  cy.get('[data-cy="order-button"]').click();
  // Form submit edildiğinde doğrula
  cy.url().should("include", "/success");
});
