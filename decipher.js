function digitalDecipher(eMessage, key){                    //defining the function
    var keyArray = Array.from(key.toString())               //turning the entered key argument from the function as a string, and making it an array.
    var result = []                                         //declaring result var as an empty array to later store the result of the equations
    var length = eMessage.length-keyArray.length;           //declaring length var to simplify equations later

    for (i = 0; i<length; i++){                             //looping the repetition of the key array until the length is equal to the length of the eMessage array
        keyArray.push(keyArray[i])
    }

    for (i = 0; i < eMessage.length; i++){                  //looping the subtraction for each number of the eMessage array with the responding key array number and -
        result.push(eMessage[i]-keyArray[i])                //- pushing the result of the subtraction in the array var of 'result'
    } 

    function changeToLetters(num){                          //defining a new function that can change the numbers into alphabets
        var letter = String.fromCharCode(num + 64);
        return letter;
    }

    var letters = [];                                       
    result.forEach(function(i) {                            //using the aforementioned function to change the deciphered numbers into alphabets and -
        letters.push(changeToLetters(i));                   //- pushing them to the array var of 'letters'
    });

    var decipheredMessage = letters.toString().toLowerCase().replace(/,/g,"")   //formatting the deciphered message to string, all lowercased, and removed the punctuations.
    console.log(decipheredMessage);                                             //printing the final formatted deciphered message
}

//Calling the function and testing it out!
digitalDecipher([20, 12, 18, 30, 21], 1939)     
digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990)
digitalDecipher([6, 4, 1, 3, 9, 20], 100) 