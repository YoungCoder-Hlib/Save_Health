let screamer = document.querySelector('#screamer');
console.log('Script connected.');
let kysengage = ['false', 'false', true, true, false];
let CountOfHearts = 5;
let saver = document.querySelector("#saver");
let countjd = document.querySelector('#countjd');
let btt = document.querySelector('#BuyTheThingy');
let phealth = document.querySelector('#p_health');
let flash= document.querySelector('#flash');
let part1 = document.querySelector('#part1');
let part2 = document.querySelector('#part2');
let money = 1;
let la = document.querySelector("#leftarrow");
let ra = document.querySelector("#rightarrow");
let imagero = document.querySelector("#imagero");
let currentindex = 0;
let arrayOfImages=[
    'health.jpg',
    'health1.jpg',
    'health2.jpg',
    'health3.jpg',
];
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
        kysengage[4]=true;
        screamer.style.display = "block";
        screamer.style.opacity = 1;
        let F=setInterval(() => followAndZoom(screamer, 1), 50);
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
            clearInterval(F);
            kysengage[4]=false;
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
if(kysengage[4]==false){
    setTimeout(() => followAndZoom(btt, 1), 50);
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
    money-=0.02;
    console.log("money:" + money);
    CountOfHearts++;
    }
    if(kysengage[4]==false){
        setTimeout(() => followAndZoom(btt, 1), 50);
    }
});
la.addEventListener("click", function(){
    currentindex--;
 if(currentindex<arrayOfImages.length){
    imagero.style.backgroundImage = `url(${arrayOfImages[currentindex]})`;
 }
 if(currentindex<0){
    currentindex = 3;
    imagero.style.backgroundImage = `url(${arrayOfImages[currentindex]})`;
 }
});
ra.addEventListener("click", function(){
    currentindex++;
 if(currentindex<arrayOfImages.length){
    imagero.style.backgroundImage = `url(${arrayOfImages[currentindex]})`;
 }
 if(currentindex>=arrayOfImages.length){
    currentindex = 0;
    imagero.style.backgroundImage = `url(${arrayOfImages[currentindex]})`;
 }
 console.log("yessir1");
});
function followAndZoom(object, zoomLevel) {
    const rect = object.getBoundingClientRect();

    window.scrollTo({
        left: rect.left + window.scrollX - window.innerWidth / 2 + rect.width / 2,
        top: rect.top + window.scrollY - window.innerHeight / 2 + rect.height / 2,
        behavior: "smooth"
    });

    // Видаляємо масштабування body, щоб не ламати position: fixed
    document.body.style.transform = ""; 
}
const arrayOfVitaminObjects = [];
 fetch('js/objects.json')
.then(response => response.json())
.then(data => {
    data.Vitamins.forEach((item)=>{
        
    console.log(item);
    let divVitamin = document.createElement("div");
    divVitamin.classList.add('vitamins');
    divVitamin.innerHTML = `
    <p>${item.id}</p>
    <h3 id="ggg" >${item.title}<h3>
    <hr>
    <img class="vitaminsimg" src="${item.photo}" alt="">
    <div id="imp77">
    <p>${item.description}<p>
    <p>${'💚'.repeat(item.rating) + '♡'.repeat(5-item.rating)}</p>
    <p>${item.type}</p>
    </div>
    `

    document.getElementById('p-vitamins').appendChild(divVitamin);
    })
})
.catch(error => console.error('Something broke:', error))
//let aovo = JSON.stringify(arrayOfVitaminObjects);;

//console.log(arrayOfVitaminObjects);

arrayOfVitaminObjects.forEach(item=>console.log(item))
arrayOfVitaminObjects.forEach((item) => {
    
    console.log(item);
    let divVitamin = document.createElement("div");
    divVitamin.classList.add('vitamins');
    divVitamin.innerHTML = `
    <p>${item.id}</p>
    <h3>${item.title}<h3>
    <hr>
    <img class="vitaminsimg" src="${item.photo}" alt="">
    <div>
    <p id="imp">${item.description}<p>
    <p>${'💚'.repeat(item.rating) + '♡'.repeat(5-item.rating)}</p>
    <p>${item.type}</p>
    </div>
    `
    Vitamins.p.addEventListener("mouseover", function(){
        p.style.opacity = 1;
    });
    Vitamins.p.addEventListener("mouseout", function(){
        p.style.opacity = 0;
    });

    document.getElementById('p-vitamins').appendChild(divVitamin);
    // divVitamin.innerText = item.title;
    // let image = document.createElement("img");
    // image.src = item.photo;
    // image.classList.add('vitaminsimg');
    // divVitamin.appendChild(image);
    // let pdesc = document.createElement("p");
    // pdesc.innerText=item.description;
    // divVitamin.appendChild(pdesc);

});
// const fs = require('fs');

// fs.readFile('./data/info.json', 'utf8', (err, jsonString) => {
//   if (err) {
//     console.error("File read failed:", err);
//     return;
//   }
//   const data = JSON.parse(jsonString);

//   console.log(data.name);         // "Alice"
//   console.log(data.skills.length); // 3
// });