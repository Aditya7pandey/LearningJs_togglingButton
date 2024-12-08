let btn = document.querySelector("#btn");
let body = document.body;

let click = 0;

    btn.addEventListener("click",()=>{
    if(click % 2 == 0){
       console.log("I am clicking")
    body.style.backgroundColor = "black";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    click++;
    console.log(click); 
    }
    else{
        console.log("I am clicking")
        body.style.backgroundColor = "white";
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
        click++;
        console.log(click);
    }
})
