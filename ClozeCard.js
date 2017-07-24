function ClozeCard(text, cloze){
    this.cloze = cloze;
    this.partial = function partial(){
            if (!text.includes(cloze)){
                console.log("'" + cloze + "'" + " " + "doesn't appear in" + " " + "'" + text + "'");
                return cloze;
            }
            else {
                var words = text.replace(cloze, '...');
                return words;
            }   
        }
    this.fullText = text;
}

module.exports = ClozeCard;
