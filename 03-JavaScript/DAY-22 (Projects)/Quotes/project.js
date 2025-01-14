const hinduismQuotes = [
    "You have the right to perform your duties, but you are not entitled to the fruits of your actions. – Bhagavad Gita 2.47",
    "The mind acts like an enemy for those who do not control it. – Bhagavad Gita 6.6",
    "Truth alone triumphs; not falsehood. Through truth, the divine path is spread out. – Mundaka Upanishad 3.1.6",
    "As the soul experiences in this body childhood, youth, and old age, so also does it enter another body. – Bhagavad Gita 2.13",
    "Do not be led by others, awaken your own mind, amass your own experience, and decide for yourself your own path. – Atharva Veda",
    "The self is not born; it does not die. It was not produced from anyone, nor was anyone produced from it. – Katha Upanishad 1.2.18",
    "He who sees all beings in the Self and the Self in all beings does not hate anyone. – Isha Upanishad 6",
    "When a man dwells on objects, he feels an attachment for them. Attachment gives rise to desire, and desire breeds anger. – Bhagavad Gita 2.62",
    "Let your speech be true and sweet. – Taittiriya Upanishad 1.11.1",
    "This is perfect. That is perfect. When perfection is taken from the perfect, what remains is perfect. – Isha Upanishad, Invocation Verse",
    "By serving others, you find liberation. – Bhagavad Gita 3.19",
    "The actions of a great person are an inspiration for others. – Bhagavad Gita 3.21",
    "From delusion arises mental wandering; from mental wandering comes destruction of memory; the loss of memory destroys understanding; and with the destruction of understanding, he is lost. – Bhagavad Gita 2.63",
    "Even if you are the most sinful of sinners, you will cross over all sin by the raft of knowledge. – Bhagavad Gita 4.36",
    "Perform action without any attachment to the results, for the sake of the Supreme. – Bhagavad Gita 3.9",
    "The happiness which comes from long practice, which leads to the end of suffering, which at first seems like poison but at last like nectar—this kind of happiness is declared to be of the nature of sattva. – Bhagavad Gita 18.37",
    "The wise see the same divine spirit in a Brahmin, a cow, an elephant, a dog, and even an outcast. – Bhagavad Gita 5.18",
    "There is nothing noble in being superior to others. True nobility lies in being superior to your previous self. – Manusmriti 4.247",
    "Just as a man casts off worn-out clothes and puts on new ones, so also the soul casts off worn-out bodies and enters into others that are new. – Bhagavad Gita 2.22",
    "When meditating, the mind should be calm, quiet, and focused on the Supreme Self, with all desires removed. – Bhagavad Gita 6.13",
    "That which pervades the entire body is indestructible. No one can destroy the imperishable soul. – Bhagavad Gita 2.17",
    "By surrendering all actions to Me, with your mind intent on the Self, free from desire and selfishness, fight unperturbed by grief. – Bhagavad Gita 3.30",
    "As rivers flow into the ocean but cannot make the ocean overflow, so flow the streams of the sense-world into the sea of peace that is the sage. – Bhagavad Gita 2.70",
    "When one is established in non-violence, hostility ceases in their presence. – Patanjali Yoga Sutras 2.35",
    "Be alike to friends and foes, honor and dishonor, cold and heat, pleasure and pain, and free from attachment. – Bhagavad Gita 12.18",
    "The one who has control over the mind is tranquil in heat and cold, in pleasure and pain, and in honor and dishonor. – Bhagavad Gita 6.7",
    "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place. – Bhagavad Gita 6.19",
    "In this world, there is nothing as purifying as knowledge. – Bhagavad Gita 4.38",
    "He who lives with his mind centered on Me is free from sin, even as a lotus leaf is untouched by water. – Bhagavad Gita 5.10",
    "One should uplift oneself by one’s own mind and not degrade oneself, for the mind can be the friend and also the enemy of the self. – Bhagavad Gita 6.5",
    "The actions of the wise should inspire the less aware to perform their own duties diligently. – Bhagavad Gita 3.26",
    "Those who meditate on Me with devotion, always united to Me in love, I grant the yoga of understanding by which they come to Me. – Bhagavad Gita 10.10",
    "The Supreme Being is present in all beings. He is the overseer, the guide, the supporter, and the witness. – Bhagavad Gita 13.22",
    "When there is harmony between the mind, heart, and resolution, then nothing is impossible. – Atharva Veda",
    "Seek refuge in the eternal alone. With a heart full of devotion, overcome your doubts through the sword of knowledge. – Bhagavad Gita 4.42",
    "The key to happiness is the reduction of desires. – Manusmriti 2.7",
    "He who knows the Supreme dwells in the hearts of all beings. – Shvetashvatara Upanishad 6.11",
    "He alone sees truly who sees the Lord the same in every creature. – Bhagavad Gita 5.19",
    "There is no purifier in this world like knowledge. – Bhagavad Gita 4.38",
    "The spirit is beyond destruction. Weapons cannot cut it, fire cannot burn it, water cannot wet it, and wind cannot dry it. – Bhagavad Gita 2.23",
    "Be steadfast in selfless action, not attached to the results, and live in balance. – Bhagavad Gita 2.48",
    "When your mind is serene and balanced, you will naturally find peace and wisdom. – Bhagavad Gita 2.66",
    "Where there is righteousness, there is victory. – Ramayana",
    "He who is content with whatever comes by chance, free from envy and beyond dualities, is devoted to me. – Bhagavad Gita 12.16",
    "Even a little practice of this dharma protects one from great fear. – Bhagavad Gita 2.40",
    "Meditation brings wisdom; lack of meditation leaves ignorance. – Bhagavad Gita 6.15",
    "Whatever action is performed without attachment to the fruits is free from sin. – Bhagavad Gita 3.9",
    "He who is happy within, who rejoices within, and who is illumined within is liberated. – Bhagavad Gita 5.24",
    "The ignorant work for their own profit, Arjuna; the wise work for the welfare of the world. – Bhagavad Gita 3.25",
    "You are what your deep, driving desire is. As your desire is, so is your will. As your will is, so is your deed. As your deed is, so is your destiny. – Brihadaranyaka Upanishad 4.4.5",
    "May all beings be happy, may all be free from disease, may all experience the auspicious, and may no one suffer. – Brihadaranyaka Upanishad 1.4.14",
    "He who seeks the good of others is dear to the Divine. – Bhagavad Gita 12.15",
    "Detach from material possessions, but remain fully engaged in life’s duties. – Bhagavad Gita 3.19",
    "Faith, devotion, and surrender are the foundation of liberation. – Bhagavad Gita 18.66",
    "He who sees action in inaction and inaction in action is wise among men. – Bhagavad Gita 4.18",
    "The soul is eternal, free from birth and death, changeless and ever-blissful. – Bhagavad Gita 2.20",
    "The wise man controls his senses, like a driver controls wild horses. – Katha Upanishad 1.3.6",
    "In the stillness of meditation, the mind becomes pure, like a lake without ripples. – Bhagavad Gita 6.27",
    "He who works without selfish desires attains the highest peace. – Bhagavad Gita 5.12",
    "Arise, awake, and stop not till the goal is reached. – Katha Upanishad 1.3.14"
];




const button = document.querySelector('button');
button.addEventListener('click',()=>{
    const element = document.getElementById('quote');
    const index = Math.floor(Math.random()*hinduismQuotes.length);
    element.innerHTML = hinduismQuotes[index];
})

// addEventListener --> It is listening to your actions. It expects some action like click, dblclick etc and a call back function.

// click --> Upon single click.
// dblclick --> Upon double click.
// mousemove --> Just moving mouse would change it.
// mouseover --> Mouse going over the button.

// There are keyboard events also.
// 1) keydown --> When I am pressing the key.
// 2) keyup --> When I am releasing the key.
document.addEventListener('keydown', ()=>{
    const text = document.getElementById("quote");
    const index = Math.floor(Math.random()*hinduismQuotes.length);
    text.textContent = hinduismQuotes[index];
})

// Event Object --> Contains every bit of information. 
document.addEventListener('keydown', (event)=>{
    console.log(event); // If I am pressing a key, then it contains information about that key --> KeyboardEvent
    console.log(event.key); // if entered enter, then enter will be output on console.
    console.log(event.target); // What is the target
    console.log(event.type); // Konse type ka event hai.
    console.log(event.clientX); // click on x position.
    console.log(event.clientY); // Y position.
    const text = document.getElementById("quote");
    const index = Math.floor(Math.random()*hinduismQuotes.length);
    text.textContent = hinduismQuotes[index];
})



