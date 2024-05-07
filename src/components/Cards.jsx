import React from "react";

const Cards = ({ imageUrl, title, description }) => {

    const handleClickTika = () => {
        if (title === "श्री बीतक") {
            const imageUrl = "./book/beetak_tika.pdf";
            window.open(imageUrl, "_blank");
          } else if (title === "रास") {
            const pdfUrl = "./book/raas_tika.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "प्रकाश गुजराती") {
            const pdfUrl = "./book/prakaas_guj_tika.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "खटरुती") {
            const pdfUrl = "./book/khatruti_tika.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "कलश गुजराती") {
            const pdfUrl = "./book/kalas_guj_tika.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "प्रकाश हिन्दुस्तानी") {
            const pdfUrl = "./book/prakash_hind.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "कलश हिन्दुस्तानी") {
            const pdfUrl = "./book/kalas_hind_tika.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "सनन्ध") {
            const pdfUrl = "./book/sanandh_tika.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "किरन्तन") {
            const pdfUrl = "./book/kirantan_tika.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "खुलासा") {
            const pdfUrl = "./book/khulasa_tika.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "खिलवत") {
            const pdfUrl = "./book/khilwat_tika.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "परिकरमा") {
            const pdfUrl = "./book/parikarma_tika.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "सागर") {
            const pdfUrl = "./book/saagar_tika.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "सिनगार") {
            const pdfUrl = "./book/singaar_tika.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "सिन्धी") {
            const pdfUrl = "./book/sindhi_tika.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "मारफत सागर") {
            const pdfUrl = "./book/maarfat_saagar.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "कयामतनामा") {
            const pdfUrl = "./book/bada_kayamatnama.pdf";
            window.open(pdfUrl, "_blank");
          }
          
      };
    
      const handleClickMulVani = () => {
        if (title === "श्री बीतक") {
            const imageUrl = "./book/beetak_tika.pdf";
            window.open(imageUrl, "_blank");
          } else if (title === "रास") {
            const pdfUrl = "./book/raas.pdf";
            window.open(pdfUrl, "_blank");
          } else if (title === "प्रकाश गुजराती") {
            const pdfUrl = "./book/prakaas_guj.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "खटरुती") {
            const pdfUrl = "./book/khatruti.pdf";
            window.open(pdfUrl, "_blank");
          } else if (title === "कलश गुजराती") {
            const pdfUrl = "./book/kalas_guj.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "प्रकाश हिन्दुस्तानी") {
            const pdfUrl = "./book/prakash_hind.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "कलश हिन्दुस्तानी") {
            const pdfUrl = "./book/kalas_hind.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "सनन्ध") {
            const pdfUrl = "./book/sanandh.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "किरन्तन") {
            const pdfUrl = "./book/kirantan.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "खुलासा") {
            const pdfUrl = "./book/khulasa.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "खिलवत") {
            const pdfUrl = "./book/khilwat.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "परिकरमा") {
            const pdfUrl = "./book/parikarma.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "सागर") {
            const pdfUrl = "./book/saagar.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "सिनगार") {
            const pdfUrl = "./book/singaar.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "सिन्धी") {
            const pdfUrl = "./book/sindhi.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "मारफत सागर") {
            const pdfUrl = "./book/maarfat_saagar.pdf";
            window.open(pdfUrl, "_blank");
          }else if (title === "कयामतनामा") {
            const pdfUrl = "./book/chhota_kayamatnama.pdf";
            window.open(pdfUrl, "_blank");
          }
      };
    

  return (
    
    <div className=" h-84 w-64 rounded overflow-hidden shadow-lg mx-5 py-5">
      <img className="w-64" src={imageUrl} alt={title} />
      <div className="text-center">
        <div className="font-bold text-2xl mb-2 my-5 underline underline-offset-2">{title}</div>
        {/* <p className="text-gray-700 text-base">{description}</p> */}
        <div className="mt-4 flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
            onClick={handleClickTika}
          >
            टिका
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-black font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline ml-4"
            onClick={handleClickMulVani}
          >
            मुलवाणी
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default Cards;
