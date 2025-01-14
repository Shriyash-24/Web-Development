// Object data is stored in heap. Now, comes V8 engine how are they implementing object data in memory and it is browser dependent.

let obj = {
    name: "rohit",
    age:20
};

// Name and age eksath nahi hoo sakta kyu, kyuki data change hoo sakta hai. Maanle rohit ki jagah "Bahut hii bada naam" daal toh ab uske liye memory hai hii nahi.

// Key value pair ko kaha store karoge bhai. Uske liye Hashing techniques ka use hota hai. Mei chahta hu ki fatafat mere pass data aaye.
// Hashing means finding where to store data.
