let screamer = document.querySelector('#screamer');
console.log('Script connected.');
let kysengage = ['false', 'false'];
let CountOfHearts = 5;
let saver = document.querySelector("#saver");
let countjd = document.querySelector('#countjd');
let btt = document.querySelector('#BuyTheThingy');
let pwishes = document.querySelector('#p_health');
let flash= document.querySelector('#flash');
let part1 = document.querySelector('#part1');
let part2 = document.querySelector('#part2');
let money = 1;
const arrayOfLoveWishes = [
    'Кохайте один одного! Це найважливіше!',
    'Будьте щасливі кожної миті!',
    'Живіть у мирі та гармонії!',
    'Нехай ваша любов буде вічною!',
    'Нехай щастя наповнює ваші серця!',
    'Даруйте одне одному тепло та ласку!',
    'Кохання перемагає все!',
    'Будьте поруч у радості та випробуваннях!',
    'Нехай ваша сім’я буде міцною і дружньою!',
    'YOU SHOULD KILL YOURSELF NOW!',
    'Нехай ваша дорога буде усипана квітами!',
    'Кожен день нехай буде сповнений ніжності!',
    'Кохайте щиро, і вас кохатимуть у відповідь!',
    'Відкривайте серця для любові та щастя!',
    'Нехай у вашому житті буде більше яскравих моментів!',
    'Живіть у гармонії з собою та світом!',
    'Нехай ваше кохання надихає інших!',
    'Будьте світлом одне для одного!',
    'Разом ви здатні на все!',
    'Нехай ваше життя буде сповнене радісних моментів!'
];

document.getElementById('btn_health').addEventListener('click', () => {
    // alert('Button clicked'); // Для тестування можна розкоментувати
    console.log("Smth should happen");
    if(CountOfHearts>0){
    CountOfHearts--;
    let index = Math.floor(Math.random() * arrayOfLoveWishes.length);
    pwishes.innerText = arrayOfLoveWishes[index];
    if(index==9&&kysengage[1]=="false"){
        screamer.style.display = "block";
        screamer.style.opacity = 1;
        setTimeout(function(){
            flash.style.opacity = 1;
            setTimeout(function(){
                flash.style.opacity = 0;
            }, 100);
        }, 100);
        setTimeout(function(){
            flash.style.opacity = 1;
            setTimeout(function(){
                flash.style.opacity = 0;
            }, 100);
        }, 1000);
        setTimeout(function(){
            flash.style.opacity = 1;
            setTimeout(function(){
                flash.style.opacity = 0;
            }, 100);
        }, 3000);
        setTimeout(function(){
            screamer.style.opacity = 0;
            screamer.style.display = "none";
            kysengage[0] = 'true';
            kysengage[1] = 'true';
            arrayOfLoveWishes.splice(9, 1);
            console.log(arrayOfLoveWishes);
            setTimeout(function(){
                saver.style.display="block";
                CountOfHearts++;
                setTimeout(function(){
                saver.style.display="none";
                }, 2500);
            }, 100);
        }, 5000);
    }
    if(kysengage[0] == 'true'){
        pwishes.innerText = "Just kidding, you are the best.";
        kysengage[0] = 'false';
    }
}
});
setInterval(function(){
    if(CountOfHearts<=0){
        part1.style.display="none";
        part2.style.display="block";
    }
    if(CountOfHearts>0){
        part2.style.display="none";
        part1.style.display="block";
    }
});
setInterval(function(){
    countjd.innerText = "💊".repeat(CountOfHearts)+"❌".repeat(5-CountOfHearts);
}, 10)
btt.addEventListener("click", function(){
    if(CountOfHearts<5){
    CountOfHearts++;
    money-=0.01;
    console.log("money:" + money);
    }
});

