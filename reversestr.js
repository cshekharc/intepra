// function revStr(inpstr){
//     let revStr = ''
//     for (let i = inpstr.length-1; i >=0; i--){
//         revStr += inpstr[i]
//     }
//     return revStr
// }

// let str = 'i am shekhar'
// let reversed = revStr(str)
// console.log(reversed)

function revstrrec(inpstr){
    if(inpstr=== ''){
        return inpstr
    }else{
        return revstrrec(inpstr.substr(1))+inpstr[0]
    }
}

let orstr = 'this is practice'
let revstr = revstrrec(orstr)
console.log(revstr)

