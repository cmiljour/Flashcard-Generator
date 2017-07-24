function ClozeCard(text, cloze){
    this.cloze = cloze;
    this.partial = partial();
    this.fullText = text;

    function partial(){
        if (!text.includes(cloze)){
            console.log("'" + cloze + "'" + " " + "doesn't appear in" + " " + "'" + text + "'");
            return;
        }
        else {
            var words = text.replace(cloze, '...');
            return words;
        }
        
    }

  
}

module.exports = ClozeCard;