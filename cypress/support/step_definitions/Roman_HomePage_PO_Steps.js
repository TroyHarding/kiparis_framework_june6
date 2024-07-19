///<reference types="cypress" />
import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
import Roman_HomePage_PO from "../page-object/Roman_HomePage_PO";
import Roman_ProdPage_PO from "../page-object/Roman_ProdPage_PO";

// var roman_demo = new Roman_PO();

var homepage = new Roman_HomePage_PO();
var prodpage = new Roman_ProdPage_PO();

Given("I navigate to the Demoblaze homepage", () => {
  const navHomeP = new Roman_HomePage_PO();
  navHomeP.navigateHomePage();
});

When("I click on the Log In button", () => {
  const clickloginB = new Roman_HomePage_PO();
  clickloginB.clickLoginButton();
});

Then("I enter VALID login username and password", () => {
  const enterLoginBilly = new Roman_HomePage_PO();
  enterLoginBilly.enterLoginBilly();
});

Then("I click Log In in the modal", () => {
  const clickLoginMod = new Roman_HomePage_PO();
  clickLoginMod.clickLogInModal();
});

Then("I verify user should be logged in", () => {
  const verUserLogin = new Roman_HomePage_PO();
  verUserLogin.verifyUserLogin();
});

When("I click on the Sign Up button", () => {
  const clickSignUp = new Roman_HomePage_PO();
  clickSignUp.clickSignupButton();
});

When("I enter sign up username and password", () => {
  const enterSignUpInfo = new Roman_HomePage_PO();
  enterSignUpInfo.enterSignUpInfo();
});

When("I click on Sign Up button in modal", () => {
  const clicksignUpButton = new Roman_HomePage_PO();
  clicksignUpButton.clickSignupButtonInModal();
});

Then("I should see a registration confirmation", () => {
  const regconf = new Roman_HomePage_PO();
  regconf.regConfirm();
});

When("I click on a product {string}", (product) => {
  const clickProduct = new Roman_HomePage_PO();
  clickProduct.clickProduct(product);
});

Then("I add the product to the cart", () => {
  const clickAddToCartButton = new Roman_ProdPage_PO();
  clickAddToCartButton.clickAddToCartBtn();
});

Then("the product should be added to the cart", () => {
  const verifyProdAddedToCart = new Roman_ProdPage_PO();
  verifyProdAddedToCart.verifyProdAddedToCart();
});

Then("Verify description shows descritpion for samsung", () => {
  const verifyProductDescription = new Roman_ProdPage_PO();
  verifyProductDescription.verifyProductDescription();
});
