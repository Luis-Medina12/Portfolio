
//TODO: Need to add noun recognition.

//TODO: Need to add condition to transition between language translating

const Translator = (originalText) =>{
const org = originalText.text;

if(org!= null){
    return(
        <p className = "results" >{englishToSaurian(org)}</p>
        
    )
        
}

}
// Will return saurian equivalent
let hashedEng = new Map();

// Will return english equivalent
let hashedSaur = new Map();

const ENGLISHARR = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
    'R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',
    'r','s','t','u','v','w','x','y','z','!', ' ','.','?',',','\''];

const SAURIANARR = ['U','R','S','T','O','V','W','X','A','Z','B','C','M','D','E','F','G',
    'H','J','K','I','L','N','P','O','Q','u','r','s','t','o','v','w','x','a','z','b','c','m','d','e','f','g',
    'h','j','k','i','l','n','p','o','q','!', ' ','.','?',',','\''];

let i =0;
while(i< SAURIANARR.length){

    hashedEng.set(ENGLISHARR[i],SAURIANARR[i]);
    hashedSaur.set(SAURIANARR[i], ENGLISHARR[i]);
    i++;
}

const englishToSaurian = (original) =>{
    const trans = original.split("");
    let x = 0;
    let nounRecognition = false;
    
    for(let i = 0; i<trans.length; i++){
        if(nounRecognition && trans[i].charAt(0) == ' '){
            console.log("Turning off nounReco");
            nounRecognition = false;
        }
        if(i!==0 && trans[i].charCodeAt(0)>=65 && trans[i].charCodeAt(0)<=90){
            nounRecognition = true
        }
        
        if(!nounRecognition){
            // If number, then ignore and move on
            if(trans[i].charCodeAt(0) <= 47 || trans[i].charCodeAt(0) >= 58){
                trans[i] = hashedEng.get(trans[i]);
            }
        }

    }
    return trans.join("");
}

const saurianToEnglish = (original) =>{
    const trans = original.split("");
    for(let i = 0; i<trans.length; i++){
        trans[i] = hashedSaur.get(trans[i]);
    }

    return trans.toString();
}

export default Translator;

