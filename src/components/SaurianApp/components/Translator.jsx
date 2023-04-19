

//TODO: Need to add condition to transition between language translating

const Translator = (originalText) =>{

    if(originalText.text!= null){
        return(
            <p className = "results" >{englishToSaurian(originalText.text, originalText.language)}</p>
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
    'H','J','K','I','L','N','P','1','Q','u','r','s','t','o','v','w','x','a','z','b','c','m','d','e','f','g',
    'h','j','k','i','l','n','p','0','q','!', ' ','.','?',',','\''];

let i =0;
while(i< SAURIANARR.length){

    hashedEng.set(ENGLISHARR[i],SAURIANARR[i]);
    hashedSaur.set(SAURIANARR[i], ENGLISHARR[i]);
    i++;
}

const englishToSaurian = (original, language) =>{
    const trans = original.split("");
    let nounRecognition = false;
    
    for(let i = 0; i<trans.length; i++){
        if(nounRecognition && trans[i].charAt(0) == ' '){
            nounRecognition = false;
        }
        if(i!==0 && trans[i].charCodeAt(0)>=65 && trans[i].charCodeAt(0)<=90 && trans[i-1] === ' ' && trans[i-2] !== '.'){
            nounRecognition = true
        }
        
        if(!nounRecognition){
            // If number, then ignore and move on, else translate
            if(trans[i].charCodeAt(0) <= 47 || trans[i].charCodeAt(0) >= 58){
                // switch between english to saurin and saurian to english
                if(language === "ENGLISH"){
                    // Given english returns Saurian
                    trans[i] = hashedEng.get(trans[i]);

                    // manual translation to letter, 
                    if(trans[i] === '0'){
                        trans[i] = 'o';
                    }else if(trans[i] ==='1'){
                        trans[i] = 'O';
                    }
                }else{
                    if(trans[i] === 'y' || trans[i] === 'Y'){
                        alert("Input contains 'y' or 'Y', please remove as this does not exist within the Saurian language.")
                    }
                    // Given Saurian returns English
                    trans[i] = hashedSaur.get(trans[i]);
                }
            }
        }

    }

    return trans.join("");
}

export default Translator;