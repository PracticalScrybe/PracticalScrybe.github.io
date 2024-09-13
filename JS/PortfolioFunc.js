var drop = document.getElementById("language");
var language = drop.options[drop.selectedIndex].text;
var flip = false;
const response = await fetch("./JS/Content",
    {
    headers:
    {
      'Accept': 'application/json'
    }
  });
const content = await response.json();
console.log(content);


function lighten(str)
{
    //let's see if this works
    document.getElementById(str).style.backgroundColor = "#000000";
}

function adjust()
{

}

//method to load text
function loadButtons(stats)
{
    //ongoing and finished
    for(const stat of stats)
    {
        for (let index = 0; index < content["projects"][language][stat].length; ++index) 
            {
            const element = content["projects"][language][stat][index];
    
            var button = document.createElement("button");
            button.addEventListener("click", exchange());
            button.addEventListener("onmouseover ", lighten(element["title"]));
    
            var buttons = document.getElementById(stat);
            buttons.appendChild(button);
        }
    }
    
}

function updateButtons()
{

}

function exchange()
{
    //fade out
    //animate
    //fade in
    console.log("checks out");
    flip = true;
}

function animate()
{
    
}

{
    console.log(language);
    const stats = ["ongoing","finished"];
    loadButtons(stats);
}