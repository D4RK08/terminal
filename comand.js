async function comand(){
    comando_principale = document.getElementById("span-0").textContent;
    if (comando_principale == "color"){
        secondo_comando = document.getElementById("span-1").textContent
        if (secondo_comando=="a"){
            var body = document.body;
            body.style.color = "green";
            stampa("verde");
        }else if(secondo_comando=="b"){
            var body = document.body;
            body.style.color = "white";
        }else if(secondo_comando=="c"){
            var body = document.body;
            body.style.color = "red";
        }else if(secondo_comando=="d"){
            var body = document.body;
            body.style.color = "DarkGreen";
        }else if(secondo_comando=="e"){
            var body = document.body;
            body.style.color = "DarkBlue";
        }else if(secondo_comando=="f"){
            var body = document.body;
            body.style.color = "BlueViolet";
        }else if(secondo_comando=="g"){
            var body = document.body;
            body.style.color = "yellow";
        }else if(secondo_comando=="h"){
            var body = document.body;
            body.style.color = "DarkOrange";
        }else if(secondo_comando=="i"){
            var body = document.body;
            body.style.color = "orange";
        }else if(secondo_comando=="l"){
            var body = document.body;
            body.style.color = "violet";
        }else if(secondo_comando=="z"){
            var body = document.body;
            body.style.color = "pink";
        }
        
    }else if (comando_principale== "su"){
        
        utent = "root";
        
    }else if (comando_principale== "exit"){
        if (utent == "root"){
            utent = "user";
        }else{
            window.close();
        }
        
    }else if (comando_principale == "loader"){
        stampa("Loading");
        await sleep(1000);
        rimuovi();
        stampa("Loading.");
        await sleep(1000);
        rimuovi();
        stampa("Loading..");
        await sleep(1000);
        rimuovi();
        stampa("Loading...");
        await sleep(1000);
        rimuovi();
        
    }else{
        stampa("Comando non riconosciuto");
    }
    new_session();
}

