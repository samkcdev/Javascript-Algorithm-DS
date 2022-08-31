// function reverseString(string){
//     if(typeof string === 'string'){
//         return string.split('').reverse().join('')
//     }else{
//         return "Please enter a string value"
//     }
// }
// console.log(reverseString("sam"));
// reverseString("a big elephant");

//##solution 2

// function reverseStringTwo(stringval){
//     var output="";
//     for(let i=stringval.length-1;i>=0;i--){
//         output += stringval[i];
//     }
//     console.log(output);
// }

//##solution 3
function reverseStringTwo(stringval){
   let stringArr= stringval.split('');
   return stringArr.reduce((reverse,character)=>{
       console.log(reverse);
       console.log(character);
    return reverse + character
   },'')
}

// console.log(reverseStringTwo("sam"));

reverseStringTwo("sam");