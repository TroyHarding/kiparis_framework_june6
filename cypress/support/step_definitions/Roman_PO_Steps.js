///<reference types="cypress" />
import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
import Roman_PO from "../page-object/Roman_PO";

// var roman_demo = new Roman_PO();

var homepage = new Roman_PO();

Given("I nnavigate to the Demoblaze homepage", () => {
  const ppp = new Roman_PO();
  ppp.openHomepage();
});

When("I clickk on the Log In button", () => {
  const ccc = new Roman_PO();
  ccc.clicking();
});

When("I clickk on the Log In button", () => {
  const ccc = new Roman_PO();
  ccc.clicking();
});
