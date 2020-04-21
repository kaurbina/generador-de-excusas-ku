
let who = ["Mom", "My little dog", "His cat", "Your granpa"];

let what = ["pissed","crushed","broked", "scrapped"];

let when = ["right in time", "when I finished", "during my lunch", "while I was praying"];

function generator (parts) {  
    
    var string = "";

    for(i in parts) {
        var rand = Math.floor( Math.random() * parts[i].length );
        var space=(i==parts.length-1)?"":" ";
        string += parts[i][rand]+space;
    }
    
    string += ".";
    return string;
}

function cargarText () {

    var newP = document.createElement('p');
    var newContent = document.createTextNode(generator([who, what, when]));
    var text = document.getElementById("excusa");

    newP.appendChild(newContent);

    document.body.appendChild(newP, text);
}


