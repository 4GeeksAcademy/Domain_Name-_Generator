/* eslint-disable */
import "bootstrap";
import "./style.css";

// How to place content in the browser window
window.onload = function() {
  document.querySelector("#domain").innerHTML = domainNameGenerator();
};

//Create a function to generate Domain Names
function domainNameGenerator() {
  //the variables with the various arguments that can be used
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extentions = [".com", ".pt"];

  //the variable that will store the Domain name
  let domainNames = [];

  //do nested for loops to give all possible name hypotheses
  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let extention of extentions) {
          domainNames.push(`${pronoun}${adj}${noun}${extention} ;`);
        }
      }
    }
  }
  return `<ul>${domainNames
    .map(domainName => `<li>${domainName}</li>`)
    .join(" ")}</ul>`;
}
