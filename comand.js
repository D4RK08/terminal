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
            
        }else if(secondo_comando=="z"){
            var body = document.body;
            body.style.color = #ffcbcb;
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

