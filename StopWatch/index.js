
let a=document.getElementById('watchcount');
let count=0;
let  flag=false;
let date=new Date();
let day=date.getDay();
let year=date.getFullYear();
let dayArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let monthArray=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let month=date.getMonth();
console.log(date.getDate())
setInterval(function(){
    fetch('https://source.unsplash.com/random')
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));
    let date=new Date();
document.getElementById('dateDisplay').innerHTML= dayArray[day]+", "+date.getDate()+" "+monthArray[month] +" "+year+", "+date.getHours() +": " + date.getMinutes() + ": "+ date.getUTCSeconds();
},1000)


let interval;
function startCount()
{
    if(!flag)
    {
        flag=true;
    interval= setInterval(function(){
               a.innerHTML=count;
             count++;
             },1000)
            }
}

let b=document.querySelectorAll('.colorButton');
console.log(b);

b.forEach(function(item){
    //console.log(item)
    item.addEventListener('click',function(e){
        //console.log(e.currentTarget.innerHTML);
        // 
        let task= e.currentTarget.innerHTML;
        if(task=='Start' || task=='Resume'){
            a.style.color='green';
            startCount();
        }
        else if(task=='Pause')
        {
            a.style.color='red';
            flag=false;
            clearInterval(interval);
        }
        else
        {
            a.style.color='red';
            count=0;
            flag=false;
            a.innerHTML=count;
        }

            

    })
})
