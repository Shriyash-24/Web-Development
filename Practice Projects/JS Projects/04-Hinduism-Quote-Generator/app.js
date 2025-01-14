const hinduismQuotes = [
    { quote: "You are what your deep, driving desire is. (Chandogya Upanishad 3.14.1)" },
    { quote: "The mind is everything. What you think, you become. (Bhagavad Gita 6.5)" },
    { quote: "Even the wise are confused about what is action and what is inaction. (Bhagavad Gita 4.16)" },
    { quote: "That which is imperishable, immutable, and infinite is Brahman. (Mundaka Upanishad 2.2.2)" },
    { quote: "The self is its own friend, and the self is its own enemy. (Bhagavad Gita 6.5)" },
    { quote: "The soul is never born, nor does it die. (Bhagavad Gita 2.20)" },
    { quote: "As is the human body, so is the cosmic body. (Yajur Veda 34.5)" },
    { quote: "Do your duty without attachment to the fruits of action. (Bhagavad Gita 2.47)" },
    { quote: "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place. (Bhagavad Gita 6.19)" },
    { quote: "The universe is the eternal play of consciousness. (Rig Veda 10.90.1)" },
    { quote: "Truth alone triumphs, not falsehood. (Mundaka Upanishad 3.1.6)" },
    { quote: "The wise sees all beings in the Self, and the Self in all beings. (Isha Upanishad 6)" },
    { quote: "He who sees all beings in his own self, and his own self in all beings, hates no one. (Isha Upanishad 6)" },
    { quote: "From joy are born all creatures, by joy they are sustained. (Taittiriya Upanishad 3.6)" },
    { quote: "Be friendly and compassionate; hate not any being. (Bhagavad Gita 12.13)" },
    { quote: "Whatever a great man does, others imitate. (Bhagavad Gita 3.21)" },
    { quote: "One should uplift oneself by one’s own mind. (Bhagavad Gita 6.5)" },
    { quote: "The world is a family. (Maha Upanishad 6.72)" },
    { quote: "Lead me from the unreal to the real, from darkness to light, from death to immortality. (Brihadaranyaka Upanishad 1.3.28)" },
    { quote: "All this universe is in truth Brahman. (Chandogya Upanishad 3.14.1)" },
    { quote: "There is no purifier like knowledge. (Bhagavad Gita 4.38)" },
    { quote: "The Self is not revealed to the weak and timid. (Mundaka Upanishad 3.2.4)" },
    { quote: "The man who has no self-control can never find peace. (Bhagavad Gita 2.66)" },
    { quote: "He who gives liberally goes straight to the gods. (Rig Veda 1.125.5)" },
    { quote: "By the mind one knows Brahman. (Kena Upanishad 2.4)" },
    { quote: "Non-violence is the highest duty and the highest teaching. (Mahabharata Anushasana Parva 115.1)" },
    { quote: "Let your aim be truth and your goal be truth. (Atharva Veda 12.1.1)" },
    { quote: "This whole world is pervaded by the Supreme. (Isha Upanishad 1)" },
    { quote: "As rivers flow into the ocean but cannot make the ocean overflow, so flows desire into the mind of the wise, but it does not make them restless. (Bhagavad Gita 2.70)" },
    { quote: "Meditation brings wisdom; lack of meditation leaves ignorance. (Bhagavad Gita 6.15)" },
    { quote: "There is no happiness for him who always doubts. (Bhagavad Gita 4.40)" },
    { quote: "May all beings look at me with a friendly eye. (Yajur Veda 36.18)" },
    { quote: "The universe arises from the unmanifest, and dissolves into it. (Bhagavad Gita 8.18)" },
    { quote: "That which pervades the entire universe is indestructible. (Bhagavad Gita 2.17)" },
    { quote: "The Supreme resides in the lotus of the heart. (Katha Upanishad 2.20)" },
    { quote: "A gift is pure when given without expectation. (Bhagavad Gita 17.20)" },
    { quote: "The best way to worship God is by helping others. (Mahabharata Shanti Parva 354.71)" },
    { quote: "The person who has conquered the mind is tranquil. (Bhagavad Gita 6.7)" },
    { quote: "One who sees inaction in action, and action in inaction, is wise. (Bhagavad Gita 4.18)" },
    { quote: "One is dear to God who is free from malice towards all beings. (Bhagavad Gita 12.13)" },
    { quote: "Know that which pervades all and is imperishable. (Bhagavad Gita 2.17)" },
    { quote: "The sun does not shine there, nor the moon and the stars. (Katha Upanishad 2.2.15)" },
    { quote: "The Self cannot be pierced by weapons or burned by fire. (Bhagavad Gita 2.23)" },
    { quote: "The wise man lets go of all results, whether good or bad. (Bhagavad Gita 2.50)" },
    { quote: "When the mind is still, the Self is revealed. (Katha Upanishad 2.3.10)" },
    { quote: "Arise! Awake! Stop not till the goal is reached. (Katha Upanishad 1.3.14)" },
    { quote: "He who sees the Self in all beings achieves peace. (Isha Upanishad 7)" },
    { quote: "He who does good never comes to a bad end. (Bhagavad Gita 6.40)" },
    { quote: "In the heart of all things dwells the Lord. (Bhagavad Gita 18.61)" },
    { quote: "All paths lead to the same truth. (Rig Veda 1.164.46)" }
];

const btnEl = document.getElementById('btn');
const result = document.getElementById('result');

function generate(){
    const index = Math.floor(Math.random()* hinduismQuotes.length);
    result.innerHTML = hinduismQuotes[index].quote;
}

btnEl.addEventListener('click', generate)

generate();

