
const punctuations=['!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',':',';','<','=','>','?','@','^','`','{','|','}','~',' '];
export function encrypt(key,message){
    const convertedDigits=lettersToDigits(message);
    const encryptedDigits=convertedDigits.map((val)=>{
        let charCode=val+key;
        if(punctuations.includes(val)) return val;
        if(((charCode)>90 && (charCode)<97) || ((charCode)>122 && (charCode)<300)){
            return charCode-26;
        }
        else{
            return charCode;
        }
    });
    const encryptedMessage=digitsToLetters(encryptedDigits);
    return encryptedMessage;
}

export function decrypt(key,message){
    const convertedDigits=lettersToDigits(message);
    const decryptedDigits=convertedDigits.map((val)=>{
        let charCode=val-key;
        if(punctuations.includes(val)) return val;
        if(((charCode)>90 && (charCode)<96) || ((charCode)>0 && (charCode)<65)){
            return charCode+26;
        }
        else{
            return charCode;
        }
    });
    const decryptedMessage=digitsToLetters(decryptedDigits);
    return decryptedMessage;
}
function lettersToDigits(message){
    let digits=[];
    for(let i=0;i<message.length;i++){
        let digit;
        if(punctuations.includes(message.charAt(i))){
            digit=message.charAt(i);
        }
        else{
            digit=message.charCodeAt(i);
        }
        digits.push(digit);
    }
    return digits;
}
function digitsToLetters(d){
    const letters=[];
    const digits=d;
    digits.forEach((digit)=>{
        let letter;
        if(punctuations.includes(digit)){
            letter=digit;
        }
        else{
        letter=String.fromCharCode(Number(digit));
        }
        letters.push(letter);
    });
    const word=letters.join('');
    return word;
}
decrypt(2,'jgnnq');