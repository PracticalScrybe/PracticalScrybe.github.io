var drop = document.getElementById("language");
var language = drop.options[drop.selectedIndex];
var flip = false;
const content = {
    "projects":
        {
            "language":
            {
                "deutsch":
                {
                    "ongoing": 
                    [
                        {
                        "title": "Portfolio",
                        "description":"blurb"
                        },
                        {
                        "title": "Of the Deep End",
                        "description":"blurb"
                        }
                    ],
                    "finished": 
                    [
                        {
                        "title":"Fussball Manager",
                        "description":"blurb"
                        },
                        {
                        "title":"Animieren einer Komplexen Figur", 
                        "description":"blurb"
                        }
                    ]
                },
    
    
                "english":
                {
            
                    "ongoing": 
                    [
                        {
                        "title": "Portfolio",
                        "description":"blurb"
                        },
                        {
                        "title": "Of the Deep End",
                        "description":"blurb"
                        }
                    ],
                    "finished": 
                    [
                        {
                        "title":"Football Manager",
                        "description":"blurb"
                        },
                        {
                        "title":"Animation of a Complex Figure",
                        "description":"blurb"
                        }
                    ]
                }
            }
            
        }
    };

fetch("./JS/Content.json")
    .then(res => 
    {
        if (!res.ok)
        {
            throw new Error ("HTTP error! Status: ${res.status}");
        }
        return res.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch((error) =>
        console.error("Unable to fetch data:", error));

async function getProjects()
{
    const response = await fetch("./JS/Content.json",
    {
        headers:
        {
          'Accept': 'application/json'
        }
    });
    const content = await response.json();
    console.log(content);
    return content
}

function lighten(str)
{
    //let's see if this works
    document.getElementById(str).style.backgroundColor = "#000000";
}

function adjust()
{

}

//method to load text
async function loadButtons(stats)
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