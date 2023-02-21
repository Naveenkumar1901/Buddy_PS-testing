describe("Sales quotation", () => {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  beforeEach(() => {
    cy.visit("https://pstest.avaniko.com/login");
    cy.get("#basic_userName").type("Manager");
    cy.get("#basic_password").type("Avan!12345");
    cy.get("button[type='submit']").click().wait(1000);
    cy.get(".hp-mr-24").click();
    cy.get(
      ".ant-drawer-body > .ant-menu > :nth-child(5) > .ant-menu-submenu-title > .ant-menu-title-content"
    ).click();
    cy.get("a[href='/salesquotation']").click().wait(1000);
  });

  it("Create sales quote from opportuntity with existing customer", () => {
    cy.xpath("//a[@class='hp-float-right hp-mt-xs-16']//span[1]").click();
    cy.get("#basic_customerCode").click().type("Naveen");
    cy.get(
      "div[title='CUS0055 - Naveen'] div[class='ant-select-item-option-content']"
    ).click();
    cy.xpath("(//div[@class='ant-picker'])[2]")
      .click()
      .type("2023-03-13, {enter}");
    cy.get("#basic_numAtCard").click().type("13022023");
    cy.get("#basic_payTerms").click();
    cy.get(
      "div[title='Net-30'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#basic_placeOfSupply").click().type("Tamil nadu");
    cy.get(
      "div[title='Tamil Nadu'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#basic_slpCode").click().type("vikram");
    cy.get(
      "div[title='Vikram.M'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get(".ant-col-20 > .ant-row > .ant-col > .ant-form-item-control-input")
      .click()
      .type("25mm");
    cy.get(
      "div[title='25MM-PVC-PIPE ~ 25mm PVC Pipe'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#price").scrollIntoView().type("1000");
    cy.get("#discounts").scrollIntoView().type("10");
    cy.xpath("(//div)[208]").scrollIntoView().click();
    cy.get(
      "div[title='A-GST18 - SGST 9% + CGST 9%'] div[class='ant-select-item-option-content']"
    ).click();
    cy.xpath("(//div)[214]").scrollIntoView().click();
    cy.get(
      "div[title='Sales - Chennai'] div[class='ant-select-item-option-content']"
    ).click();
    cy.xpath("(//div)[220]").scrollIntoView().click();
    cy.get(
      "div[title='ELCOT'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#basic_comments").type("pipes corresponding to ISI standards");
    cy.get(".ant-form-item-control-input-content > #hdrDiscount").type("10");
    cy.xpath("(//input[@id='hdrDiscount'])[2]").check();
    cy.xpath(
      "(//button[@class='ant-btn ant-btn-primary hp-bg-success-1 hp-border-color-success-1'])[1]"
    )
      .click()
      .wait(1000);
    cy.get(".ant-modal-confirm-title").contains(
      "Sales Quote added succesfully"
    );
    cy.get(".ant-modal-confirm-btns > .ant-btn").click();
  });
});
