var main = document.querySelector("main");

var heading = `<h1>My jokes</h1>`;
main.innerHTML = heading;

var joke1 = document.createElement("li");
joke1.innerText =
  "Why are fish so smart?... Because they live in schools";

var joke2 = document.createElement("li");
joke2.innerText = "What kind of tree fits in your hand?... A palm tree!";

var joke3 = document.createElement("li");

joke3.innerText =
  "Where do pencils come from?... Pennsylvania!";

var jokesList = [joke1, joke2, joke3];

var unorderedList = document.createElement("ul");

for (joke of jokesList) {
  unorderedList.appendChild(joke);

}

var paraElement = document.createElement("p");
paraElement.innerText = "That's all folks.";

main.appendChild(unorderedList);

main.appendChild(paraElement);
