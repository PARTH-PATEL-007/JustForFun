function generateRandomNos(){
    //   Math.floor(Math.random() * 10);  (0 to 9)
    let t1 = Math.floor(Math.random() * (41 - 6 + 1) ) + 6;
    let t2 = Math.floor(Math.random() * (53 - 44 + 1) ) + 44;
    let t3 = Math.floor(Math.random() * (98 - 56 + 1) ) + 56;
    let t4 = Math.floor(Math.random() * (136 - 101 + 1) ) + 101;
    let t5 = Math.floor(Math.random() * (174 - 139 + 1) ) + 139;
    let t6 = Math.floor(Math.random() * (235 - 177 + 1) ) + 177 ;
    let t7 = Math.floor(Math.random() * (272 - 238 + 1) ) + 238;
    let t8 = Math.floor(Math.random() * (293 - 275 + 1) ) + 275;
    let t9 = Math.floor(Math.random() * (333 - 296 + 1) ) + 296;
    let t10 = Math.floor(Math.random() * (399 - 356 + 1) ) + 356;
    let t11 = Math.floor(Math.random() * (469 - 410 + 1) ) + 410;

    let dailyQs = Math.floor(Math.random() * (5 - 3 + 1) ) + 3;
    let arr = [];
    arr.push(t1);
    arr.push(t2);
    arr.push(t3);
    arr.push(t4);
    arr.push(t5);
    arr.push(t6);
    arr.push(t7);
    arr.push(t8);
    arr.push(t9);
    arr.push(t10);
    arr.push(t11);

    while(dailyQs>0){
       let index =  Math.floor(Math.random() * (arr.length) );
    
       document.getElementsByClassName("a")[dailyQs-1].innerHTML = arr[index];
       document.getElementsByClassName("a")[dailyQs-1].style.color = "white";
      
        dailyQs--;
    }
}

generateRandomNos();