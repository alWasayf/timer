let [milliseconds ,second]=[0,0]
/*let [milliseconds,second,minute,] = [0,0,0];*/
let timerRef = document.querySelector('.mainTime');
let int = null;

document.getElementById('start').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(mainTime,10);
});

document.getElementById('stop').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('reset').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds] = [0,0];
    timerRef.innerHTML = '0:0';
});
/*
function mainTime(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        second++;
        if(second == 60){
            second = 0;
            minute++;
            if(minute == 60){
                minute = 0;
            }
        }
    }*/

    function mainTime(){
        milliseconds+=10;
        if(milliseconds == 1000){
            milliseconds = 0;
            second++;
        }

 /*let m = minute < 10 ? "0" + minute : minute;*/
 let s = second < 10 ? "0" + second : second;
 let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 
 /*timerRef.innerHTML = ` ${m} : ${s} : ${ms}`;*/
 timerRef.innerHTML = `${s} :${ms}`;
}
                
            

