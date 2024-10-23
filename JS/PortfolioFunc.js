var drop = document.getElementById("language");
var language = drop.options[drop.selectedIndex].value;
var display = ["ongoing", "portfolio"];
var stats = ["ongoing", "finished"];
var subtitle = {"deutsch":"Projekt-Portfolio", "english":"Project Portfolio"}
var bulletpoints = ["year","reason","involved","clanguage"]
var cont = {"deutsch":"Anteil:", "english":"Contribution:"}
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
                        "description":"Das Portfolio gehört bei mir auch auf das Portfolio mit drauf. I habe sämtliche Eigenschaften dieser Page, von knöpfen bis hin zum text selber mit HTML, CSS und Javascript programmiert. Vorerst halte ich mich zurück mit speziellen animationen, doch plane ich in naher Zukunft mit diesen die Website zu schmücken. Ich genoss die Woche die ich damit verbracht die Sprachen zu und die Herausfoderungen die es mit sich brachte, doch jetzt wäre eine kurze pause angebracht.",
                        "year":"Jahr: 2024",
                        "reason":"Grund: Bewerbungs Beilagen",
                        "involved":"Teamgrösse: Eine Person",
                        "clanguage":"Programmiersprachen: HTML, CSS & Javascript",
                        "tasks":["Sprachen und Inhalt Autausch", "Generelle Formattierung der Seite", "Webpage Struktur mit HTML errichtet"]
                    },
                    "english": 
                    {
                        "title": "Portfolio",
                        "description":"Something would be amiss if I had excluded this Portfolio. I programmed all of it's content contained within using HTML, CSS and Javascript as well as created the image to pair with it. I had to resist animating any of its content, though I do plan to revisit this project in the future. For what it is, I enjoyed this project for what I could learn from it and all the tricky challenges it presented, though now a small break from it would be in order.",
                        "year":"Year: 2024",
                        "reason":"Reason: Job Application Attachment",
                        "involved":"Team Size: One person",
                        "clanguage":"Coding Languages: HTML, CSS & Javascript",
                        "tasks":["Language and Content switching using Javascript", "General Web Formatting using CSS", "Page Structure using HTML"]
                    }
                },
                "of the deep end":
                {
                    "deutsch": 
                    {
                        "title": "Of the Deep End",
                        "description":"Of the Deep End ist ein isometrisches Spiel, in dem man sich gegen Horden an gegner beweisen muss mithilfe von diversen Gegestände mit mysteriösen Fähigkeiten. Diese Gegenstände kann man im laufe des Spiels in Kisten entdecken oder gar selbst durch kombinieren selbst schaffen. Ich arbeite hobbymässig dran gemeinsam mit zwei anderen.",
                        "year":"Jahr: 2024",
                        "reason":"Grund: Hobby",
                        "involved":"Teamgrösse: Drei Personen",
                        "clanguage":"Sprache: C#",
                        "tasks":["mithilfe der Godot Engine", "Animation und Animations Handling", "Zufälliges von Gegnern und Interagierbarem", "Nutzer Interface innerhalb des Levels", "Interagierbare Objekte"]
                    },
                    "english": 
                    {
                        "title": "Of the Deep End",
                        "description":"Of the Deep End is a Top-down isometric wave survival game with the goal of fending off Hoards of monsters using various items with mysterious abilities. These items can be found in various chest and crafted combining two items. I'm currently still working on it together with two others as a hobby.",
                        "year":"Year: 2024",
                        "reason":"Reason: Hobby",
                        "involved":"Team Size: Three People",
                        "clanguage":"Language: C#",
                        "tasks":["Using the Godot Engine", "Animations and Animation Handling", "Random Spawning of Entities and Interactables", "User Interface within the Level", "Interactable Objects"]
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
                        "year":"Jahr: 2020",
                        "reason":"Grund: Gruppen Projekt für den Kurs 'MAT 101 Programming' an der Universität Zürich",
                        "involved":"Teamgrösse: Fünf Personen",
                        "clanguage":"Sprache: Python",
                        "tasks":["Verarbeitung der Daten mithilfe der Pandas Library", "Die Functionalität des An- und Verkaufen von Spieler Im Spielermarkt", "Fehler Behebung"]
                    },
                    "english": 
                    {
                        "title": "Football Team Manager Simulator",
                        "description":"During my studies at university I took part in developing a rudimentary Football Team Manager Simulator, in which you choose and lead a team to victory through a simulated season.",
                        "year":"Year: 2020",
                        "reason":"Reason: Group Porject for the course 'MAT 101 Programming' at the University of Zürich",
                        "involved":"Team Size: Five People",
                        "clanguage":"Language: Python",
                        "tasks":[ "Processing of Data using the Pandas Library for Python", "The functionality of buying and selling players in the player store", "Bugfixing"]
                    }
                },
                "animation of a complex figure":
                {
                    "deutsch": 
                    {
                        "title": "Animieren einer Komplexen Figur",
                        "description":"Für meine Matura habe ich eine Strichfigur via Java erstellt und animiert. Dabei Verglich ich das dabei entstandene Resultat mit der heutigen Methode der 3D animation.",
                        "year":"Jahr: 2017",
                        "reason":"Grund: Maturaarbeit",
                        "involved":"Teamgrösse: Eine Person",
                        "clanguage":"Sprachen: Java",
                        "tasks":["Anwendung von 3D Vektor Geometrie um die Figur zu bewegen", "Implementierung der Kalkulation für Semi-Perspektive Projektion", "Verknüpfung von Objekten zu einer Strichfigur", "Key Event Listener um die Figur zu steuern"]
                    },
                    "english": 
                    {
                        "title": "Animation of a Complex Figure",
                        "description":"For my Matura project I created and animated a stick figure with Java. Thereafter I compared the resulting animation with modern methods of 3D animation.",
                        "year":"Year: 2017",
                        "reason":"Reason: Matura Project",
                        "involved":"Team Size: One Person",
                        "clanguage":"Language: Java",
                        "tasks":["Appliance of 3D Vector Geometry to move the figure", "Implementing the Calculations for Semi-Perspective View", "Linking of Objects to form a Stickfigure", "Key Event Listener to control the figure"]
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
    console.log("yes")
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
    document.getElementById("tasks").innerHTML = "";
    //numerator for replacing entries one to one
    for (let i = 0; i < content["projects"][display[0]][display[1]][evt.value]["tasks"].length; i++)
    {  
        //create new entries
        var li = document.createElement('li');
        li.textContent = content["projects"][display[0]][display[1]][evt.value]["tasks"][i];
        document.getElementById("tasks").appendChild(li);
    }

    for (const dat of bulletpoints)
        {
            document.getElementById(dat).textContent = content["projects"][display[0]][display[1]][evt.value][dat];
        }
}

async function exchange(evt)
{
    //fade out will be programmed later
    //console.log("text1", document.getElementById("text1").textContent, evt.currentTarget.descr);
    display = [evt.currentTarget.parentNode.id, evt.currentTarget.id];

    var parent = document.getElementById("animation").parentNode;
    var text1 = document.getElementById("text1")

    parent.removeChild(document.getElementById("animation"));

    parent.insertBefore(gifs[evt.currentTarget.id], text1);

    text1.textContent = evt.currentTarget.descr[language]["description"];

    //clear list
    document.getElementById("tasks").innerHTML = "";
    //numerator for replacing entries one to one
    for (let i = 0; i < evt.currentTarget.descr[language]["tasks"].length; i++)
    {  
        //create new entries
        var li = document.createElement('li');
        li.textContent = evt.currentTarget.descr[language]["tasks"][i];
        document.getElementById("tasks").appendChild(li);
    }

    for (const dat of bulletpoints)
        {
            document.getElementById(dat).textContent = evt.currentTarget.descr[language][dat];
        }
    
    //fade in also programmed later
}

{
    readyGifs();
    loadButtons();
    document.getElementById("text1").textContent = content["projects"][display[0]][display[1]][language]["description"];

    for (let i = 0; i < content["projects"][display[0]][display[1]][language]["tasks"].length; i++)
        {  
            //create new entries
            var li = document.createElement('li');
            li.textContent = content["projects"][display[0]][display[1]][language]["tasks"][i];
            document.getElementById("tasks").appendChild(li);
        }

    for (const dat of bulletpoints)
        {
            document.getElementById(dat).textContent = content["projects"][display[0]][display[1]][language][dat];
        }

    document.getElementById("cont").textContent = cont[language];
    

    
}