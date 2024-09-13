var drop = document.getElementById("language");
var language = drop.options[drop.selectedIndex].value;
var display = ["ongoing", "portfolio"];
var stats = ["ongoing","finished"];
const content = {
    "projects":
        {
            "ongoing":
            {
                "portfolio":
                {
                    "deutsch": 
                    {
                        "title": "Portfolio",
                        "description":"OKTOBER FEST"
                    },
                    "english": 
                    {
                        "title": "Portfolio",
                        "description":"Something would be amiss if I had excluded this Portfolio. I programmed it using HTML, CSS and Javascript as well as created the image to pair with it. I feel it speaks mainly for itself, therefore I shall keep it brief. I enjoyed this project for what I could learn from it and all the tricky challenges it presented and even if it took me initially roughly a week to complete it to a working order. I'll look forward to revisiting my Portfolio soon."
                    }
                },
                "of the deep end":
                {
                    "deutsch": 
                    {
                        "title": "Of the Deep End",
                        "description":"OKTOBER FEST"
                    },
                    "english": 
                    {
                        "title": "Of the Deep End",
                        "description":"blurb"
                    }
                }
            },
            "finished":
            {
                "football manager":
                {
                    "deutsch": 
                    {
                        "title": "Fussball Manager",
                        "description":"OKTOBER FEST"
                    },
                    "english": 
                    {
                        "title": "Football Manager",
                        "description":"blurb"
                    }
                },
                "animation of a complex figur":
                {
                    "deutsch": 
                    {
                        "title": "Animieren einer Komplexen Figur",
                        "description":"OKTOBER FEST"
                    },
                    "english": 
                    {
                        "title": "Animation of a Complex Figur",
                        "description":"blurb"
                    }
                }
            }     
        }      
    };

    
/*fetch("./JS/Content.json")
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
        console.error("Unable to fetch data:", error));*/

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
    return content;
}

function setInitialText()
{

}

function lighten(evt)
{
    //let's see if this works
    evt.currentTarget.style.backgroundColor = "#4f4b60";
}

function darken(evt)
{
    //let's see if this works
    evt.currentTarget.style.backgroundColor = "#3b374c";
}


function fadeout()
{

}

function fadein()
{

}

//method to load text
async function loadButtons()
{
    //ongoing and finished
    for(const stat of stats)
    {
        for (const names of Object.entries(content["projects"][stat]))
        {
            
            const element = content["projects"][stat][names[0]];
            var button = document.createElement("button");
            button.descr = element;
            button.id = names[0];

            button.addEventListener("click", exchange);
            button.addEventListener("mouseover", lighten, false);
            button.addEventListener("mouseout", darken, false);

            var arrange = document.createElement("div");
            var img = document.createElement("img");
            var text = document.createElement("span");
            var div = document.createElement("div");
            
            arrange.className = "vertarrange";
            
            img.src = "images/"+names[0]+".png";
            img.alt = element[language]["title"];

            text.className = "buttontext";
            text.textContent = element[language]["title"];
            text.id = names[0]+"text";

            div.className = "buttonsize";

            div.appendChild(img);

            arrange.appendChild(div);
            arrange.appendChild(text);
            button.appendChild(arrange);
            
            var buttons = document.getElementById(stat);
            buttons.appendChild(button);
        }
    }
}

function updateLanguage(evt)
{

    for(const stat of stats)
    {
        for (const names of Object.entries(content["projects"][stat])) 
        {
            const element = content["projects"][stat][names[0]][evt.value]["title"];
            document.getElementById(names[0]+"text").textContent = element;
        }
    }
    console.log(display)
    console.log(content["projects"][display[0]][display[1]])
    
    document.getElementById("text0").textContent = content["projects"][display[0]][display[1]][evt.value]["description"];
    language = evt.value;
}

async function exchange(evt)
{
    //fade out
    console.log("text1", document.getElementById("text1").textContent, evt.currentTarget.descr);
    display = [evt.currentTarget.parentNode.id, evt.currentTarget.id];
    document.getElementById("animation").src = "images/"+evt.currentTarget.id+".gif"
    document.getElementById("text1").textContent = evt.currentTarget.descr[language]["description"];
    //animate
    //fade in
}

function animate()
{
    
}

{

    loadButtons();
}