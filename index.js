    // welcher Tag ist heute?
    let date = new Date().getDate(); // => 16
    for(i=1; i<=date; i++) {
    document.getElementById(i).style = "background-color: violet";
    }
    
    function showGift(indexTag){
        let modal = document.getElementById("myModal");
        // prüfen, ob der Tag in der Vergangenheit oder Gegenwart liegt, dann Zitat anzeigen, sost nicht
        if(indexTag > date){
            // Türchen ist noch nicht frei
            alert("Try again another day.")
        } else {
            modal.style.display = "block";
            document.getElementById("quote").innerHTML = quotesArray[indexTag -1].text;
            document.getElementById("author").innerHTML = quotesArray[indexTag -1].author;
            // Zitat anzeigen
            //alert(quotesArray[indexTag -1].text + " von Author: " + quotesArray[indexTag -1].author);
        }
    }
    
    function closeModal(){
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    
    // quote = Zitat => im Array
    let quotesArray = [];
    
    // Zitate erstellen
    quotesArray.push({
        text: "Christmas is built upon a beautiful and intentional paradox; that the birth of the homeless should be celebrated in every home",
        author: "G.K. Chesterton"
    });
    quotesArray.push({
        text: "The rooms were very still while the pages were softly turned and the winter sunshine crept in to touch the bright heads and serious faces with a Christmas greeting",
        author: "Louisa May Alcott"
    });
    quotesArray.push({
        text: "If my Valentine you won't be, I'll hang myself on your Christmas tree.",
        author: "Ernest Hemingway"
    });
    quotesArray.push({
        text: "Saufen ist besser als Rauchen.",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Von draußen komme ich rein stecke deine Sachen ein.",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Ist der Bart lang und weiß brauchst du keinen Impausweis.",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Geschenke unter den Baum für die Kinder ein Traum.",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Mit dem Schlitten die piste runter macht die alten Männer munter.",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Kommt das Rentier weit von oben ist es wohl vom Himmel geflogen.",
        author: "Der Metatron",
        src: "/images/pictureOfDay9"
    });
    quotesArray.push({
        text: "Kommt der Weinachtsmann vorbei ist bei den Kindern groß das Geschrei.",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Der baum ist schön geschmückt die Mutter macht sich schick die Kinder warten mit offenen blick.",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Ein weißer Bart, ein dicker Bauch passt auf euer Schornstein auf.",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Geschenke auf von Nikolaus",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Wen die Weinachtsglocken bimmeln fangen wir alle an zu singen.",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Leise rieselt der Schnee die Nase tut dan Weh.",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Ist es draußen kalt und Nass, rauchst du am besten etwas Hasch.",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Der Schneeman steht draußen vor der Tür kommt bald der Weinachtsmann vorbei zu dir.",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Im Wald da steht der Tannenbaum im Sommer fallen die Nadeln in dein Raum.",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Ist das Jahr fast zu ende dann kommt bald die Wende.",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Kommt der Engel aus den Himmel trinkst du zu viel Kümmel.",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Wen es Schneit und dunkel ist siehst du deine Mutter nicht.",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Der Glühwein schmeckt den Vater gut die Mutter findets garnicht gut",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Den Schlitten raus die Jacken an morgen kommt der Weinachtsmann.",
        author: "Der Metatron"
    });
    quotesArray.push({
        text: "Zitat 24 Dummy Text",
        author: "John Smith"
    });