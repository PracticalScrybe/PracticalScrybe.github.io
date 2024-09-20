var drop = document.getElementById("language");
var language = drop.options[drop.selectedIndex].value;
var display = ["ongoing", "portfolio"];
var stats = ["ongoing","finished"];
var subtitle = {"deutsch":"Projekt Portfolio", "english":"Project Portfolio"}
const content = {
    "projects":
        {
            "title":
            {
                "deutsch": "Projekt Portfolio",
                "english": "Project Portfolio"
            },
            "ongoing":
            {
                "portfolio":
                {
                    "deutsch": 
                    {
                        "title": "Portfolio",
                        "description":"Das Portfolio gehört bei mir auch auf das Portfolio mit drauf. I habe sämtliche Eigenschaften dieser Page, von knöpfen bis hin zum text selber mit HTML, CSS und Javascript programmiert. Vorerst halte ich mich zurück mit speziellen animationen, doch plane ich in naher Zukunft mit diesen die Website zu schmücken. Ich genoss die Woche die ich damit verbracht die Sprachen zu und die Herausfoderungen die es mit sich brachte, doch jetzt wäre eine kurze pause angebracht."
                        
                    },
                    "english": 
                    {
                        "title": "Portfolio",
                        "description":"Something would be amiss if I had excluded this Portfolio. I programmed all of it's content contained within using HTML, CSS and Javascript as well as created the image to pair with it. I had to resist animating any of its content, though I do plan to revisit this project in the future. For what it is, I enjoyed this project for what I could learn from it and all the tricky challenges it presented, though now a small break from it would be in order."
                    }
                },
                "of the deep end":
                {
                    "deutsch": 
                    {
                        "title": "Of the Deep End",
                        "description":"Of the Deep End ist ein isometrisches Spiel, in dem man sich gegen Horden an gegner beweisen muss mithilfe von diversen Gegestände mit mysteriösen Fähigkeiten. Diese Gegenstände kann man im laufe des Spiels in Kisten entdecken oder gar selbst durch kombinieren selbst schaffen. Ich arbeite hobbymässig dran gemeinsam mit zwei anderen."
                    },
                    "english": 
                    {
                        "title": "Of the Deep End",
                        "description":"Of the Deep End is a Top-down isometric wave survival game with the goal of fending off Hoards of monsters using various items with mysterious abilities. These items can be found in various chest and crafted combining two items. I'm currently still working on it together with two others as a hobby."
                    }
                }
            },
            "finished":
            {
                "football manager":
                {
                    "deutsch": 
                    {
                        "title": "Fussballteam Manager Simulator",
                        "description":"Im Rahmen meines Studium habe ich als Gruppenarbeit in Python einen rudimentären Fussball Team Manager entwickelt, in dem man ein Team wählt und zum Sieg führt whärend einer Saison."
                    },
                    "english": 
                    {
                        "title": "Football Team Manager Simulator",
                        "description":"During my studies at university I took part in developing a rudimentary Football Team Manager Simulator, in which you choose and lead a team to victory through a simulated season."
                    }
                },
                "animation of a complex figur":
                {
                    "deutsch": 
                    {
                        "title": "Animieren einer Komplexen Figur",
                        "description":"Für meine Matura habe ich eine Strichfigur via Java erstellt und animiert. Dabei Verglich ich das dabei entstandene Resultat mit der heutigen Methode der 3D animation."
                    },
                    "english": 
                    {
                        "title": "Animation of a Complex Figur",
                        "description":"For my Matura project I created and animated a stick figure with Java. Thereafter I compared the resulting animation with modern methods of 3D animation."
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
    //console.log(display)
    //console.log(content["projects"][display[0]][display[1]])
    
    document.getElementById("text1").textContent = content["projects"][display[0]][display[1]][evt.value]["description"];
    language = evt.value;
}

async function exchange(evt)
{
    //fade out
    console.log("text1", document.getElementById("text1").textContent, evt.currentTarget.descr);
    display = [evt.currentTarget.parentNode.id, evt.currentTarget.id];
    document.getElementById("animation").src = "images/"+evt.currentTarget.id+".gif"
    document.getElementById("text1").textContent = evt.currentTarget.descr[language]["description"];
    document.getElementById("subtitle").textContent = subtitle[language];
    console.log(subtitle[language]);
    //animate
    //fade in
}

function animate()
{
    
}

{
    document.getElementById("text1").textContent = content["projects"][display[0]][display[1]][language]["description"];
    loadButtons();
}