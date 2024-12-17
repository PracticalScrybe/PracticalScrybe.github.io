var drop = document.getElementById("language");
var language = drop.options[drop.selectedIndex].value;
var display = ["ongoing", "portfolio"];
var stats = ["ongoing", "finished"];
var subtitle = {"deutsch":"Projekt-Portfolio", "english":"Project Portfolio"}
const bulletpoints = ["year","reason","involved","clanguage"]
var oneanddone = true;
const intro = {"deutsch":"Willkommen auf meiner Portfoliowebseite, links finden Sie eine auswahl an Knöpfen die Sie an den jeweiligen Projektbeschrieb weiterleiten. Die Seiten stehen auf Deutsch sowohl auch Englisch zur Verfügung.", 
                "english":"Welcome to my portfolio webpage, on your left you will find a selection of buttons to proceed to the respective project description. The pages are available in both German and English."};
var gifs = {}
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
                        "description":"Das Portfolio gehört bei mir auch auf das Portfolio mit drauf. Ich habe sämtliche Eigenschaften dieser Page, von Knöpfen bis hin zum Text selber mit HTML, CSS und Javascript programmiert. Vorerst halte ich mich zurück mit speziellen animationen, doch plane ich in naher Zukunft mit diesen die Website zu schmücken.",
                        "year":["Jahr:", "2024"],
                        "reason":["Motivation:", "Bewerbungs Beilagen"],
                        "involved":["Kollaboratoren:", "Keine"],
                        "clanguage":["Sprachen:", "HTML, CSS & Javascript"],
                        "tasks":["Anteil:", ["Webpage Struktur mit HTML errichtet", "Generelle Formattierung der Seite Mithilfe CSS", "Austausch Sprachen und Inhalt auf Knopfdruck mit Javascript"]]
                    },
                    "english": 
                    {
                        "title": "Portfolio",
                        "description":"Something would be amiss if I had excluded this Portfolio. I programmed all of its content contained within using HTML, CSS and Javascript as well as created the image to pair with it. I had to resist animating any of its content, though I do plan to revisit this project in the future.",
                        "year":["Year:", "2024"],
                        "reason":["Motivation:", "Attachment for job applications"],
                        "involved":["Collaborators:", "None"],
                        "clanguage":["Languages:", "HTML, CSS & Javascript"],
                        "tasks":["Contribution:", ["Page structure using HTML", "General web formatting using CSS", "Language and content switching using Javascript"]]
                    }
                },
                "of the deep end":
                {
                    "deutsch": 
                    {
                        "title": "Of the Deep End",
                        "description":"Of the Deep End ist ein isometrisches Spiel, in dem man sich gegen Horden an Gegner beweisen muss Mithilfe von diversen Gegestände mit mysteriösen Fähigkeiten. Diese Gegenstände kann man im Laufe des Spiels in Kisten entdecken oder gar durch Kombinieren selbst schaffen.",
                        "year":["Jahr:", "2024"],
                        "reason":["Motivation:", "Hobby"],
                        "involved":["Kollaboratoren:", "Zwei Personen"],
                        "clanguage":["Sprache:", "C#"],
                        "tasks":["Anteil:", ["Mit der Godot Engine entwicklet", "Animation und Animationshandling", "Zufälliges Generieren von Gegnern und Interagierbarem", "Nutzerinterface innerhalb des Levels", "Interagierbare Objekte"]]
                    },
                    "english": 
                    {
                        "title": "Of the Deep End",
                        "description":"Of the Deep End is a top-down isometric wave survival game with the goal of fending off Hoards of monsters using various items with mysterious abilities. These items can be found in various chest and crafted combining two items. I'm currently still working on it together with two others as a hobby.",
                        "year":["Year:", "2024"],
                        "reason":["Motivation:", "Hobby"],
                        "involved":["Collaborators:", "Two people"],
                        "clanguage":["Language:", "C#"],
                        "tasks":["Contribution:", ["Using the Godot Engine", "Animations and animation handling", "Random spawning of entities and interactables", "User interface within the level", "Interactable objects"]]
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
                        "description":"Im Rahmen meines Studium habe ich als Gruppenarbeit in Python einen rudimentären Fussball Team Manager entwickelt, in dem man ein Team wählt und zum Sieg führt whärend einer Saison.",
                        "year":["Jahr:", "2020"],
                        "reason":["Motivation:", "Gruppen Projekt für den Kurs 'MAT 101 Programming' an der Universität Zürich"],
                        "involved":["Kollaboratoren:", "Fünf Personen"],
                        "clanguage":["Sprache:", "Python"],
                        "tasks":["Anteil:", ["Verarbeitung der Daten durch Nutzung der Pandas Library", "Die Functionalität des An- und Verkaufen von Spieler Im Spielermarkt", "Fehler Behebung"]]
                    },
                    "english": 
                    {
                        "title": "Football Team Manager Simulator",
                        "description":"During my studies at university I took part in developing a rudimentary Football Team Manager Simulator, in which you choose and lead a team to victory through a simulated season.",
                        "year":["Year:", "2020"],
                        "reason":["Motivation:", "Group project for the course 'MAT 101 Programming' at the University of Zürich"],
                        "involved":["Collaborators:", "Five people"],
                        "clanguage":["Language:", "Python"],
                        "tasks":["Contribution:", ["Processing of Data using the Pandas Library for Python", "The functionality of buying and selling players in the player store", "Bugfixing"]]
                    }
                },
                "animation of a complex figure":
                {
                    "deutsch": 
                    {
                        "title": "Animieren einer Komplexen Figur",
                        "description":"Für meine Matura habe ich eine Strichfigur via Java erstellt und animiert. Dabei verglich ich das dabei entstandene Resultat mit der heutigen Methode der 3D animation.",
                        "year":["Jahr:", "2017"],
                        "reason":["Motivation:", "Maturaarbeit"],
                        "involved":["Kollaboratoren:", "Keine"],
                        "clanguage":["Sprache:", "Java"],
                        "tasks":["Anteil:",["Anwendung von 3D Vektor Geometrie um die Figur zu bewegen", "Verknüpfung von Objekten zu einer Strichfigur", "Implementierung der Kalkulation für Semi-Perspektive Projektion", "Key Event Listener um die Figur zu steuern"]]
                    },
                    "english": 
                    {
                        "title": "Animation of a Complex Figure",
                        "description":"For my Matura project I created and animated a stick figure with Java. Thereafter I compared the resulting animation with modern methods of 3D animation.",
                        "year":["Year:", "2017"],
                        "reason":["Motivation:", "Matura project"],
                        "involved":["Collaborators:", "None"],
                        "clanguage":["Language:", "Java"],
                        "tasks":["Contribution:",["Appliance of 3D vector geometry to move the figure", "Linking of objects to form a stick figure", "Implementing the calculations for semi-perspective view", "Key event listener to control the figure"]]
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

function readyGifs()
{
    for(const stat of stats)
    {
        for (const title of Object.entries(content["projects"][stat]))
        {
            var img = new Image();
            img.src = "images/"+title[0]+".gif";
            img.id = "animation";
            img.alt = "placeholder";
            img.className = "landscape";
            gifs[title[0]] = img;
        }
    }
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
            img.classList.add("square");
            var text = document.createElement("span");
            var div = document.createElement("div");
            
            arrange.className = "vertarrange";
            
            img.src = "images/"+names[0]+".png";
            img.alt = "loading"

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
    if (oneanddone)
    {
        document.getElementById("text0").textContent = intro[evt.value];
    }

    else
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
            document.getElementById("title").textContent = subtitle[language];
            //clear list
            document.getElementById("tasks1").innerHTML = "";
            //numerator for replacing entries one to one
        
            document.getElementById("tasks0").textContent = content["projects"][display[0]][display[1]][evt.value]["tasks"][0];
            for (let i = 0; i < content["projects"][display[0]][display[1]][evt.value]["tasks"][1].length; i++)
            {  
                //create new entries
                var li = document.createElement('li');
                li.textContent = content["projects"][display[0]][display[1]][evt.value]["tasks"][1][i];
                document.getElementById("tasks1").appendChild(li);
            }
        
            for (const dat of bulletpoints)
            {
                document.getElementById(dat+"0").textContent = content["projects"][display[0]][display[1]][evt.value][dat][0];
                document.getElementById(dat+"1").textContent = content["projects"][display[0]][display[1]][evt.value][dat][1];
            }
    }
    
}

async function exchange(evt)
{
    var parent = document.getElementById("box");
    if (oneanddone)
    {
        parent.insertBefore(gifs[evt.currentTarget.id], text1);
        for(const dat of bulletpoints)
        {
            for(let i = 0; i <= 1; i++)
            {
                var div = document.createElement("div");
                div.className = "listtext";
                div.id = dat+i;
                document.getElementById("bullet").appendChild(div);
            }  
        }
        var div = document.createElement("div");
        div.className = "listtext";
        div.id = "tasks"+0;
        document.getElementById("bullet").appendChild(div);
        var ul = document.createElement("ul");
        ul.id = "tasks"+1;
        document.getElementById("bullet").appendChild(ul);

        document.getElementById("text0").remove();
        oneanddone = false;
    }
    
    //fade out will be programmed later
    //console.log("text1", document.getElementById("text1").textContent, evt.currentTarget.descr);
    display = [evt.currentTarget.parentNode.id, evt.currentTarget.id];

    var text1 = document.getElementById("text1")

    parent.removeChild(document.getElementById("animation"));

    parent.insertBefore(gifs[evt.currentTarget.id], text1);

    text1.textContent = evt.currentTarget.descr[language]["description"];

    //clear list
    document.getElementById("tasks1").innerHTML = "";
    //numerator for replacing entries one to one
    document.getElementById("tasks0").textContent = evt.currentTarget.descr[language]["tasks"][0];
    for (let i = 0; i < evt.currentTarget.descr[language]["tasks"][1].length; i++)
    {  
        //create new entries
        var li = document.createElement('li');
        li.textContent = evt.currentTarget.descr[language]["tasks"][1][i];
        document.getElementById("tasks1").appendChild(li);
    }

    for (const dat of bulletpoints)
        {
            document.getElementById(dat+"0").textContent = evt.currentTarget.descr[language][dat][0];
            document.getElementById(dat+"1").textContent = evt.currentTarget.descr[language][dat][1];
        }
    
    //fade in also programmed later
    
}

{
    readyGifs();
    loadButtons();
    document.getElementById("text0").textContent = intro[language];   
}