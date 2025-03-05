let screamer = document.querySelector('#screamer');
console.log('Script connected.');
let kysengage = ['false', 'false', false, true];
let CountOfHearts = 5;
let saver = document.querySelector("#saver");
let countjd = document.querySelector('#countjd');
let btt = document.querySelector('#BuyTheThingy');
let phealth = document.querySelector('#p_health');
let flash= document.querySelector('#flash');
let part1 = document.querySelector('#part1');
let part2 = document.querySelector('#part2');
let money = 1;
const arrayOfHealthAdvices = [
'🥗 Харчуйтеся збалансовано – більше овочів, фруктів, білків та корисних жирів.',
'🚶‍♂️ Будьте активними – рухайтеся щодня, займайтеся спортом чи просто гуляйте.',
'💦 Пийте достатньо води – мінімум 1,5–2 літри на день.',
'😴 Дотримуйтеся режиму сну – спіть 7–9 годин для відновлення організму.',
'🧘‍♀️ Зменшуйте стрес – відпочивайте, медитуйте, займайтеся улюбленими справами.',
'🚑 Проходьте профілактичні огляди – регулярні перевірки допоможуть запобігти хворобам.',
'Дбайте про себе – здоров’я починається з маленьких щоденних звичок! 💪✨',
'YOU SHOULD KILL YOURSELF NOW!',
'💖 Підтримуйте соціальні зв’язки – спілкування з близькими зменшує рівень стресу.',
'🚰 Пийте воду замість газованих напоїв – це корисніше для травлення та енергії.',
'🧘‍♂️ Вчіться розслаблятися – дихальні практики, медитація або просто прогулянка на природі допоможуть зберегти спокій.',
'🚭 Уникайте шкідливих звичок – куріння, надмірний алкоголь та фастфуд руйнують організм.',
'🦷 Дбайте про гігієну – регулярне миття рук і догляд за зубами запобігають багатьом захворюванням.',
];
let Morshu=document.querySelector("#Morshu");
document.getElementById('btn_health').addEventListener('click', () => {
    // alert('Button clicked'); // Для тестування можна розкоментувати
    console.log("Smth should happen");
    if(CountOfHearts>0){
    CountOfHearts--;
    let index = Math.floor(Math.random() * arrayOfHealthAdvices.length);
    phealth.innerText = arrayOfHealthAdvices[index];
    if(arrayOfHealthAdvices[index]=='YOU SHOULD KILL YOURSELF NOW!'&&kysengage[1]=="false"){
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
            arrayOfHealthAdvices.splice(7, 1);
            console.log(arrayOfHealthAdvices);
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
        phealth.innerText = "Just kidding, you are the best.";
        kysengage[0] = 'false';
    }
}
if(kysengage[3]==false){
    part1.style.display="none";
    part2.style.display="block";
    Morshu.style.display="block";
    kysengage[3]=true;
}
});
setInterval(function(){
    if(CountOfHearts<=0){
        kysengage[3]=false;
        kysengage[2]=false;
    }
    if(CountOfHearts>0){
        part2.style.display="none";
        part1.style.display="block";
        Morshu.style.display="none";
        if(kysengage[2]==false){
        phealth.innerText="Now you are good fella! Use 💊";
        kysengage[2]=true;
        }
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

