import React from "react";
import faqImg from "../images/faq.png";
import Footer from "./Footer";
import Navigration from "./Navigration";

const Faq = () => {
   return (
   
      
       <div className="faq">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-md-6 text-center">
                  <img className="img-fluid" src={faqImg} alt="" />
               </div>
               <div className="col-md-6">
                  <h2 className="header-text">FAQ's</h2>
                  <div
                     className="accordion accordion-flush"
                     id="accordionFlushExample"
                  >
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                           <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                           >
                              What is an NFT
                           </button>
                        </h2>
                        <div
                           id="flush-collapseOne"
                           className="accordion-collapse collapse"
                           aria-labelledby="flush-headingOne"
                           data-bs-parent="#accordionFlushExample"
                        >
                           <div className="accordion-body">
                              <p>
                                 Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Aperiam, veritatis.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                           <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                           >
                              What is a Meta Astra NFT
                           </button>
                        </h2>
                        <div
                           id="flush-collapseTwo"
                           className="accordion-collapse collapse"
                           aria-labelledby="flush-headingTwo"
                           data-bs-parent="#accordionFlushExample"
                        >
                           <div className="accordion-body">
                              <p>
                                 Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Aperiam, veritatis.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="accordion-item">
                        <h2
                           className="accordion-header"
                           id="flush-headingThree"
                        >
                           <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                           >
                              What are Meta Astra Gods?
                           </button>
                        </h2>
                        <div
                           id="flush-collapseThree"
                           className="accordion-collapse collapse"
                           aria-labelledby="flush-headingThree"
                           data-bs-parent="#accordionFlushExample"
                        >
                           <div className="accordion-body">
                              <p>
                                 Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Aperiam, veritatis.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                           <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFour"
                              aria-expanded="false"
                              aria-controls="flush-collapseFour"
                           >
                              How can I buy a Meta Astra NFT?
                           </button>
                        </h2>
                        <div
                           id="flush-collapseFour"
                           className="accordion-collapse collapse"
                           aria-labelledby="flush-headingFour"
                           data-bs-parent="#accordionFlushExample"
                        >
                           <div className="accordion-body">
                              <p>
                                 Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Aperiam, veritatis.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                           <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFive"
                              aria-expanded="false"
                              aria-controls="flush-collapseFive"
                           >
                              What does MINT mean?
                           </button>
                        </h2>
                        <div
                           id="flush-collapseFive"
                           className="accordion-collapse collapse"
                           aria-labelledby="flush-headingFive"
                           data-bs-parent="#accordionFlushExample"
                        >
                           <div className="accordion-body">
                              <p>
                                 Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Aperiam, veritatis.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
     
   );
};

export default Faq;
