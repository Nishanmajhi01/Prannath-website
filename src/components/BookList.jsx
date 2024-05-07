import React from "react";
import Cards from "./Cards";

const BookList = () => {
  // Define an array of books with URL and title
  const books = [
    {
      imageUrl: "bitak.png",
      title: "श्री बीतक",
      description: "महामति श्री लालदास जी द्वारा श्री बीतक ग्रन्थको रचना गरिएको थियो, जसमा अक्षरातीत श्री प्राणनाथ जीको माध्यमबाट श्री देवचन्द्र जी (सम्वत् १६३८ देखि १७१२ सम्म), श्री मिहिरराज जी (सम्वत् १७१२ देखि १७५१ सम्म), र श्री छत्रसाल जी (सम्वत् १७५१ देखि १७५८ सम्म) द्वारा आवेशित ब्रह्मलीलाको वर्णन गरिएको छ।",
    },
    {
        imageUrl: "raas.png",
        title: "रास",
        description: "कुलजम सरूप ग्रन्थ में, जो खोजे चित्त लाए। हद बेहद पर धाम लों, आतम दृष्टि लखाए।।",
      },
      {
        imageUrl: "prakash.png",
        title: "प्रकाश गुजराती",
        description: "कुलजम सरूप ग्रन्थ में, जो खोजे चित्त लाए। हद बेहद पर धाम लों, आतम दृष्टि लखाए।।",
      },
      {
        imageUrl: "khatruti.png",
        title: "खटरुती",
        description: "कुलजम सरूप ग्रन्थ में, जो खोजे चित्त लाए। हद बेहद पर धाम लों, आतम दृष्टि लखाए।।",
      },
      {
        imageUrl: "kalas_gujrati.png",
        title: "कलश गुजराती",
        description: "कुलजम सरूप ग्रन्थ में, जो खोजे चित्त लाए। हद बेहद पर धाम लों, आतम दृष्टि लखाए।।",
      },
      {
        imageUrl: "prakash_hindi.png",
        title: "प्रकाश हिन्दुस्तानी",
        description: "कुलजम सरूप ग्रन्थ में, जो खोजे चित्त लाए। हद बेहद पर धाम लों, आतम दृष्टि लखाए।।",
      },
      {
        imageUrl: "kalas.png",
        title: "कलश हिन्दुस्तानी",
        description: "कुलजम सरूप ग्रन्थ में, जो खोजे चित्त लाए। हद बेहद पर धाम लों, आतम दृष्टि लखाए।।",
      },
      {
        imageUrl: "",
        title: "सनन्ध",
        description: "कुलजम सरूप ग्रन्थ में, जो खोजे चित्त लाए। हद बेहद पर धाम लों, आतम दृष्टि लखाए।।",
      },
      
      {
        imageUrl: "kirantan.png",
        title: "किरन्तन",
        description: "कुलजम सरूप ग्रन्थ में, जो खोजे चित्त लाए। हद बेहद पर धाम लों, आतम दृष्टि लखाए।।",
      },
      {
        imageUrl: "khulasa.png",
        title: "खुलासा",
        description: "कुलजम सरूप ग्रन्थ में, जो खोजे चित्त लाए। हद बेहद पर धाम लों, आतम दृष्टि लखाए।।",
      },
      {
        imageUrl: "khilwat.png",
        title: "खिलवत",
        description: "कुलजम सरूप ग्रन्थ में, जो खोजे चित्त लाए। हद बेहद पर धाम लों, आतम दृष्टि लखाए।।",
      },
     
      {
        imageUrl: "parikarma.png",
        title: "परिकरमा",
        description: "कुलजम सरूप ग्रन्थ में, जो खोजे चित्त लाए। हद बेहद पर धाम लों, आतम दृष्टि लखाए।।",
      },
      {
        imageUrl: "sagar.png",
        title: "सागर",
        description: "कुलजम सरूप ग्रन्थ में, जो खोजे चित्त लाए। हद बेहद पर धाम लों, आतम दृष्टि लखाए।।",
      },
      {
        imageUrl: "singhar.png",
        title: "सिनगार",
        description: "कुलजम सरूप ग्रन्थ में, जो खोजे चित्त लाए। हद बेहद पर धाम लों, आतम दृष्टि लखाए।।",
      },
      {
        imageUrl: "sindhi.png",
        title: "सिन्धी",
        description: "कुलजम सरूप ग्रन्थ में, जो खोजे चित्त लाए। हद बेहद पर धाम लों, आतम दृष्टि लखाए।।",
      },
      {
        imageUrl: "",
        title: "मारफत सागर",
        description: "कुलजम सरूप ग्रन्थ में, जो खोजे चित्त लाए। हद बेहद पर धाम लों, आतम दृष्टि लखाए।।",
      },
      
      {
        imageUrl: "",
        title: "कयामतनामा",
        description: "कुलजम सरूप ग्रन्थ में, जो खोजे चित्त लाए। हद बेहद पर धाम लों, आतम दृष्टि लखाए।।",
      },
      
   
  ];

  return (
    <div className="bg-white">
  <h1 className="text-5xl text-center font-bold underline underline-offset-2 py-8">
    ब्रह्मवाणी
  </h1>
  <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4">
    {books.map((book, index) => (
      <div key={index} className="flex justify-center">
        <Cards {...book} />
      </div>
    ))}
  </div>
</div>

  );
};

export default BookList;
