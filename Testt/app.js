// bài 1
// function arrsolve(arr1,arr2){
//     let res=[];
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]==arr2[j]){
//                 res.push(arr1[i]);
//             }
//         }
//     }
//     let tmp = arr1.concat(arr2);
//     for(let i=0;i<res.length;i++){
//         let tmpp = res[i];
//         tmp.filter(function(res){
//             return res!=tmpp;
//         });
//     }
//     return tmp;
// }

// console.log(arrsolve( [1, 2, "a"] ,  [1, 3, "b"]));


// bài 2

// function sortgoal(arr){
//     arr.sort((a,b) => {
//         return b.points - a.points;
//     });
//     arr.sort((a,b) => {
//         return b.GD - a.GD;
//     })
//     for(let i=0;i<arr.length;i++){
//         arr[i].position = i+1;
//     }
    
//     console.log(arr);
// }

// sortgoal([
//     {
//         name:"Arsenal",
//         points: 99,
//         GD: 45
//     },
//     {
//         name:"Chelsea",
//         points: 75,
//         GD: 39
//     },
//     {
//         name:"MU",
//         points: 60,
//         GD: 29
//     },
//     {
//         name:"Liver",
//         points: 99,
//         GD: 43
//     },
    
// ])

import "./game.js";
import "./quizz.js";


async function getdata(){
    const respone = await fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple');
    const data = await respone.json();
    const res = data.results;
    let game = document.getElementById('game');
    let awn=[];
 
    for(let i=0;i<res.length;i++){
        game.innerHTML+=`<game-screen id="game${i}" question="${res[i].question}" answer="" point="30"></game-screen>`;
        let tmp = res[i].incorrect_answers;
        tmp.push(res[i].correct_answer);
        awn.push(tmp);  
    }
    for(let i=0;i<res.length;i++){
        document.getElementById(`game${i}`).answer = awn[i];
        document.getElementById(`game${i}`).render();
    }

}
getdata()

let ques = ["do you like me","do you like me","do you like me","do you like me"];
let anw = ["yes","no","yess","no"];


for(let i=0;i<ques.length;i++){
    document.getElementById(`game${i}`).answer = anw;
    document.getElementById(`game${i}`).render();
}