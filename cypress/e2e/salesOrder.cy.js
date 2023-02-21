describe("Sales order", () => {
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
    cy.get("a[href='/salesorder']").click();
  });

  it("Create sales order from opportuntity with existing customer", () => {
    cy.get(
      //new sales order
      "button[class='ant-btn ant-btn-default hp-text-color-primary-1 hp-bg-dark-primary-1 hp-border-color-dark-primary-1 hp-text-color-dark-0']"
    )
      .click()
      .wait(1000);
    cy.get("#basic_customerCode").click(); //selecting customer
    cy.get(
      "div[title='CUS0055 - Naveen'] div[class='ant-select-item-option-content']"
    )
      .scrollIntoView()
      .click();
    cy.get(
      "div[class='ant-row ant-form-item ant-form-item-has-success'] div[class='ant-picker']"
    )
      .click()
      .type("2023-02-14, {enter}"); //order date
    cy.get("div[class='ant-row ant-form-item'] div[class='ant-picker']")
      .click()
      .type("2023-03-15, {enter}"); //end date
    cy.get("input[placeholder='Enter Reference No']").click().type("1402"); //reference no
    cy.get("#basic_payTerms").click(); //payment terms
    cy.get(
      "div[title='Advance'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#basic_placeOfSupply").click().type("Tamil nadu"); //place of supply
    cy.get(
      "div[title='Tamil Nadu'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#basic_slpCode").click().type("Ramesh"); //selecting sales employee
    cy.get(
      "div[title='G.Ramesh'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get(
      "div[class='ant-col ant-col-20'] span[class='ant-select-selection-item']"
    )
      .click()
      .type("50mm"); //selecting item
    cy.get(
      "div[title='50mm -PVC -PIPE - 50mm PVC Pipe FRLS MMS'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#price").scrollIntoView().type("5000"); //entering price
    cy.get("#discounts").scrollIntoView().type("5"); //applying discount
    cy.xpath("(//div)[208]").scrollIntoView().click();
    cy.get(
      "div[title='A-GST18 - SGST 9% + CGST 9%'] div[class='ant-select-item-option-content']"
    ).click(); //selecting tax slab
    cy.xpath("(//div[@class='ant-form-item-control-input'])[22]")
      .scrollIntoView()
      .click();
    cy.get(
      "div[title='Sales - Chennai'] div[class='ant-select-item-option-content']"
    ).click(); //selecting warehouse
    cy.xpath(
      "//body[1]/div[1]/section[1]/section[1]/main[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[9]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/span[2]"
    )
      .scrollIntoView()
      .click();
    cy.get(
      "div[title='Corporations'] div[class='ant-select-item-option-content']"
    ).click(); //selecting project
    cy.get("#costCentre").click(); //cost centre
    cy.get("#TL").click();
    cy.get(
      "div[title='MA - Mahadevan.A'] div[class='ant-select-item-option-content']"
    ).click(); //selecting TL
    cy.get("#Director").click();
    cy.get(
      "div[title='RVK - Venkataramakrishnan.R'] div[class='ant-select-item-option-content']"
    ).click(); //selecting director
    cy.get(".ant-modal-footer > .ant-btn-primary").click().wait(1000); //saving
    cy.get("#basic_comments").type("ISI standard pipes"); //comments
    cy.xpath("(//input[@id='hdrDiscount'])[1]").type("5"); //discount
    cy.xpath("(//input[@id='hdrDiscount'])[2]").check(); //round off
    cy.get(
      "button[class='ant-btn ant-btn-primary hp-bg-success-1 hp-border-color-success-1']"
    )
      .click()
      .wait(1000); //save order
    cy.get(".ant-modal-confirm-title").contains(
      "Sales Order added succesfully"
    ); //assertion
    cy.get(".ant-modal-confirm-btns > .ant-btn").click(); //ok
  });
});
