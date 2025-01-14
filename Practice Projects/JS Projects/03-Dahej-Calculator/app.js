const age = document.getElementById('age');
const edu = document.getElementById('education');
const pro = document.getElementById('pro');
const salary = document.getElementById('salary');
const family = document.getElementById('family');
const siblings = document.getElementById('siblings');
const occupation = document.getElementById('occupation');
const cooking = document.getElementById('cooking');
const humour = document.getElementById('humour');
const element17 = document.getElementsByClassName('bonus1');
console.log(element17);
let thoughts = [
"Dahej ki maang, ek insaan ki zindagi ka khel hai. 💔",
"Jeevan mein pyaar ka raasta hai, dahej ka nahi. 🌹",
"Dahej se sirf dard milta hai, pyaar se sab kuch milta hai. 💔❤️",
"Beti ki muskaan, dahej ke saath na kho jaaye. 😢👧",
"Dahej ki wajah se nafrat na baantiye, pyaar ka haath badhaiye. 🤝",
"Zindagi dahej ki nafrat se nahi, pyaar se banti hai. 🌸",
"Dahej ek pratha hai, par insaaniyat se badhkar kuch nahi. 🌍💖",
"Har beti ka sapna apni khushi se ho, dahej se nahi. ✨",
"Dahej ki wajah se zindagi na chhupao, pyaar mein rang bharna seekho. 🌈",
"Dahej ka bojh, dil ki safai ko chhupata hai. ⚖️",
"Beti ki khushi, dahej ke bojh se kabhi na khoya jaaye. 🎉👧",
"Dahej ka maangna sirf sharminda karne ka kaam hai. 🙅‍♀️",
"Zindagi ka asli rang dahej mein nahi, pyaar mein chhupa hai. 💖",
"Dahej se sirf aansu milte hain, asli khushi pyaar mein hai. 😢💑",
"Dahej ka khauf sab kuchh chhupata hai, par pyaar sab kuchh dikhaata hai. ❤️",
"Har rishta pyaar se banta hai, dahej se nahi. 💞",
"Beti ki muskaan dahej ke khauf se kabhi na chhupaye. 😊💐",
"Dahej se pyaar nahi milta, insaaniyat se milta hai. 🌍💝",
"Dahej ek andhera hai, jo roshni ki taraf badhne ka rasta band karta hai. 🌑🚫",
"Dahej ka virodh karo, apne sapne sach karo. 🌟✨",
"Dahej ka bojh kisike jeene ka haq cheen leta hai, nafrat aur khauf ke sath usse jeene ki majboori bana deta hai. 😔",
"Jeevan ke har mod par dahej ka bojh ek bhari padta hai, jise utarna mushkil hota hai. Insaaniyat se zindagi ko safal banao. 💪",
"Beti ke sapne uski khushi se jude honi chahiye, dahej ke saath nahi. 👧🎈",
"Dahej ki wajah se zindagi na chhupao, pyaar mein rang bharna seekho. 🖌️💖",
"Dahej ek aisi bandhan hai, jo insaaniyat aur pyaar ke saath jeene ka haq cheen leti hai. 🌹🔒",
"Is pratha ko hum sabko milkar mitaana hoga, aur apni betiyon ko sirf pyaar aur izzat dena hoga. 💖👧",
"Har ek rishta dahej se nahi, insaaniyat aur pyaar se banta hai. 🌸🤝",
"Dahej ki wajah se kisike sapne toote hain, par insaaniyat ka haq sabko dena hai. 🌏✨",
"Zindagi ek khoobsurat safar hai, jismein dahej ka koi kirdaar nahi. 🛤️🌼",
"Dahej se sirf nafrat aur khauf milte hain, pyaar se zindagi ki rangat badhti hai. 💔✨",
"Dahej ki maang ko samajh ke, hum apne sapne sach karenge. 🌠🌷",
"Dahej se rishton mein nafrat banti hai, aur asli pyaar ki jagah ek khali gaddha chhup jaata hai. 🚫💔",
"Dahej ko samajh se mita do, insaaniyat ko zindagi mein lao. 🙏",
"Dahej ke bojh ko chhupao nahi, usse khatam karo. 🚫🔚",
"Beti ka dahej se koi sambandh nahi, uski muskaan sabse zaroori hai. 😊🌸",
"Jeevan ka asli raasta dahej se nahi, pyaar aur izzat se hota hai. ❤️🛤️",
"Dahej se zindagi mein khali pan aur nafrat ka ahsas hota hai. 😞💔",
"Dahej ka virodh ek safar hai, jismein humein saath chalna hoga. 👣💞",
"Pyaar ka rishta dahej ke bojh se kabhi na bhariye. ❤️⚖️",
"Dahej ka virodh humari zimmedari hai, aur yeh hum sabko milkar karna hai. 🌍🙌",
"Beti ke sapne uski khushi se jude honi chahiye, dahej ke saath nahi. 💭👧",
"Insaaniyat ki jeet, dahej ki haar hai. 🏆🚫",
"Har beti ka sapna apne khwabon ko sach karna hai, na ki dahej ke bojh se dabna. 💫👧",
"Dahej ki pratha insaaniyat ki khoj hai, aur insaaniyat ke saath chalna humara kaam hai. 🌍💖",
"Dahej ki wajah se apne sapne kabhi na tootein, pyaar aur izzat se apni zindagi banayein. 🌟💖",
"Dahej se nafrat humein pyaar ki raahon mein nahi, balki insaaniyat ke raste mein milta hai. 🤝💝",
"Dahej ki wajah se zindagi mein kabhi na khushi aaye, pyaar se zindagi ko rangin banao. 🌈💖",
"Beti ko dahej ke bojh se bacha lo, uske sapne kabhi na tootein. 👧🌼",
"Dahej ki maang sirf ek samasya hai, jise humko milkar samajhna hoga. 💭🚫",
"Apni betiyon ko pyaar aur izzat dena humara farz hai, dahej nahi. 🌷👧",
"Dahej ka virodh karne se pyaar mein rang bharna hai, aur sabko izzat dena hai. ❤️💪",
"Dahej ki nafrat sabko ek saath laati hai, insaaniyat sabke dil mein jagriti laati hai. 💔❤️",
"Har rishta pyaar se, izzat se, aur insaaniyat se banta hai, dahej se nahi. 🌸🌍",
"Dahej ek bandhan hai, jo samajh mein badlaav laata hai, insaaniyat ke raste ko roshan karna hai. 🛤️❤️",
"Jeevan ka asli raasta pyaar mein hai, dahej ki maang se nahi. 🌹💞",
"Zindagi mein dahej ka koi kirdaar nahi, pyaar se hi jeevan sukhad banta hai. ❤️🌻",
"Pyaar ka raasta insaaniyat ki taraf hai, dahej ka nahi. 🌏❤️",
"Dahej ek ghalat pratha hai, isse samajh mein khatam karna hai. 🚫🌸",
"Dahej se zindagi ka safar kabhi safal nahi ho sakta, pyaar aur izzat se safalta milti hai. 🌟💖",
"Dahej ko samajh ke, humein apne sapne sach karne honge. 💭💝",
"Dahej ka bojh apne jeene ka haq cheen leta hai, usse samajh mein khatam karna hai. 🚫💪",
"Dahej se nafrat karna humein insaaniyat ke raste par le jaata hai. 💔🚶‍♀️",
"Zindagi mein pyaar ka rang dahej se kabhi nahi hota, isse samajhna hoga. 🌸💖",
"Dahej ke khauf se zindagi kabhi pyaari nahi ho sakti. 🙅‍♀️💔",
"Har beti ka sapna apni khushi se ho, dahej ke saath nahi. 🎉👧",
"Dahej se pyaar nahi milta, izzat aur sammaan se milta hai. 🥰💖",
"Dahej ko khatam kar, apne sapne sach karo. 💭✨",
"Dahej se kabhi nafrat mat karo, par uske khilaaf khade ho jao. 🛑❤️",
"Beti ki muskaan sabse zaroori hai, dahej ke khauf se kabhi na chhupaye. 👧🌟",
"Dahej ka bojh, insaaniyat ke sapno ko kabhi na tootein. 💔🌍"
];

const finalResult = document.getElementById('final');
const btnEl = document.getElementById('btn-submit');

btnEl.addEventListener('click',()=>{
    if(age.value === "" || edu.value === "Select" || pro.value === "Select" || salary.value === "" || family.value === "" || siblings.value === "Select" || occupation.value === "Select" || cooking.value === "Select" || humour.value === "Select"){
        finalResult.innerHTML = "Pehle form toh bharle bhai, phir dahej ka sochna.";
        return;
    }

    if(edu.value === "Primary School" || edu.value === "Middle School" || edu.value === "High School" || age.value <=18){
        finalResult.innerHTML = `Bhai abhi tu chota hai dahej ke baare mei mat soch samjha!`;
        return;
    }

    if(Number(salary.value >= 1) && Number(salary.value <= 40000)){
        finalResult.innerHTML = `Bhai teri salary dekhle, isme kya hii dahej mangega tu! 🤑`;
        return;
    }

    if(Number(salary.value) > Number(family.value)){
        finalResult.innerHTML = `Family wealth se jyada toh teri salary hai, kuch toh gadbad hai daya! 🤑`;
        return;
    }
    if(Number(age.value >=60)){
        finalResult.innerHTML = `Pranam ji, appki toh umar hoo gyi hai abhi bhi dahej ki demand kar rahe? 😂`;
        return;
    }
    if(Number(age.value >= 18) && Number(age.value <=24)){
        finalResult.innerHTML = `Focus on career brother, kuch jyada jaldi nahi hai dahej ki.🧑‍💻`;
        return;
    }

    let bonus = 0;

    if(element17[0].checked) bonus = bonus + 200000;
    if(element17[1].checked) bonus = bonus + 50000;
    if(element17[2].checked) bonus = bonus + 100000;
    if(element17[3].checked) bonus = bonus - 100000;
    if(element17[4].checked) bonus = bonus + Math.floor(Math.random()*10000000);

    const total = bonus + Math.floor(Math.random()*1000);
    finalResult.innerHTML = `Total Dahej = ${total}, pause and think --> ${thoughts[Math.floor(Math.random()*thoughts.length)]}`;
})