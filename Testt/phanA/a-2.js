function sortgoal(arr){
    arr.sort((a,b) => {
        return b.points - a.points;
    });
    arr.sort((a,b) => {
        return b.GD - a.GD;
    })
    for(let i=0;i<arr.length;i++){
        arr[i].position = i+1;
    }
    
    console.log(arr);
}

sortgoal([
    {
        name:"Arsenal",
        points: 99,
        GD: 45
    },
    {
        name:"Chelsea",
        points: 75,
        GD: 39
    },
    {
        name:"MU",
        points: 60,
        GD: 29
    },
    {
        name:"Liver",
        points: 99,
        GD: 43
    },
    
])
