import { Container } from '@mui/material'
import React from 'react'
import about from "../../assets/image/bg/privacypolicy.webp";
import { Typography } from '@material-tailwind/react';
import t2 from "../../assets/image/icons/t2.webp"
import t3 from "../../assets/image/icons/t3.webp"
import t1 from "../../assets/image/icons/t1.webp"
import Touch from '../components/commercial/Touch';
import { Card, CardMedia } from '@mui/material'
import YoutubePlayer from 'react-youtube-player';
import Footer from '../components/Footer';
import { useEffect } from 'react';




export default function PrivacyPolicy() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
  }, []);

    
  return (
    <>
        <div className="relative h-[40vh] lg:h-[75vh] w-full" >
        <img
          src={about}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end justify-center bg-gradient-to-t from-r-tvoi to-transparent to-50%">
          <div className="justify-center align-center">
            <div
              variant="h1"
              color="white"
              className="mb-5 md:mb-20 text-white text-5xl lg:text-7xl gilroyEBold text-center"
              style={{lineHeight: "65px"}}
            >
               Privacy&nbsp;Policy
            </div>
            
          </div>
        </div>
    </div>
      <Container>
      <div>
        <div className="title-container">
            <div className="gold-line"></div>
            <h1 className="text-xl md:text-2xl lg:text-4xl text-justify gilroyBold text-r-tvoi"> 
            Privacy Policy
            </h1>
        </div>
        <h5 className="mb-8 text-sm sm:text-xl text-justify gilroyMedium">
        At Royal Furniture, we take privacy protection very seriously and set the highest standards in this 
        regard. We value the trust you place in us and ensure the privacy protection of all our users. Kindly read 
        our privacy policy document for more information.
        </h5>
       </div>

       <div>
        <div className="title-container">
            <div className="gold-line"></div>
            <h1 className="text-xl md:text-2xl lg:text-4xl text-justify gilroyBold text-r-tvoi"> 
             When And What Information Does Royal Furniture Collect?
            </h1>
        </div>
        <h5 className="mb-8 text-sm sm:text-xl text-justify gilroyMedium">
        We collect basic information that is necessary to fulfill your requests, such as your name, mailing 
        address, email address, and phone number. This information is obtained at the time of your purchase of 
        our products or gift certificates or when you sign up for email notifications. We only request your card 
        information when you place an order, and it is submitted using the highest level of encryption to ensure 
        the utmost safety and security.
        </h5>
       </div>

       <div>
        <div className="title-container">
            <div className="gold-line"></div>
            <h1 className="text-xl md:text-2xl lg:text-4xl text-justify gilroyBold text-r-tvoi"> 
            Why Do We Collect This Information?
            </h1>
        </div>
        <h5 className="mb-8 text-sm sm:text-xl text-justify  gilroyMedium">
        We collect your personal information primarily for the purpose of processing orders, shipping, and 
        providing customer service. For instance, we may use your information to update you on the status of 
         your purchase, clarify any questions related to your order, and provide you with a personalized 
         shopping experience. We may also use your information to notify you of updates, new activities, and 
        the latest content available on the website, special offers, schemes, and other products/services. 
        Additionally, we may use this information to enhance our products, services, website content, and 
        navigation.
        </h5>
       </div>

       <div>
        <div className="title-container">
            <div className="gold-line"></div>
            <h1 className="text-xl md:text-2xl lg:text-4xl text-justify gilroyBold text-r-tvoi"> 
             With whom your information will be shared:
            </h1>
        </div>
        <h5 className="mb-8 text-sm sm:text-xl text-justify gilroyMedium">
        Royal Furniture will only use your personal information to complete your transaction with them. They 
         do not rent, sell, or share your personal information with third parties. However, in cases where you 
         have granted permission to provide products or services you requested and sharing your information is 
          necessary to complete the transaction, Royal Furniture may share your information with their in-house 
          team. Additionally, they keep records of your previous transactions and orders, including product, price, 
         and date of purchase, payment, and transaction history.
        </h5>
       </div>

       <div>
        <div className="title-container">
            <div className="gold-line"></div>
            <h1 className="text-xl md:text-2xl lg:text-4xl text-justify gilroyBold text-r-tvoi"> 
            Policy updates
            </h1>
        </div>
        <h5 className="mb-8 text-sm sm:text-xl text-justify gilroyMedium">
        our privacy policy may change regularly and without notice. To stay up to date on any changes, we 
        recommend reviewing the policy periodically. Please note that this policy only applies to our own 
        practices and does not extend to any third-party partners, franchisees, or associates. If you interact with 
        other parties, we encourage you to review their privacy policies as well.
        </h5>
       </div>
      
      </Container>
      {/* <Touch /> */}
      <Footer />
    </>
  )
}
