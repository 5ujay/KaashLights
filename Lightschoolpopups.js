import { React, useState, useEffect } from "react";
import LightschoolLED from "../images/LightschoolLEDs.png";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "./Lightschool.css";
import Lightschoolsports from "../images/Lightschoolsports.png";
import Lightschooltransport from "../images/Lightschooltransport.png";
import Lightschoolhome from "../images/Lightschoolhome.png";
import Lightschoolshop from "../images/Lightschoolshop.png";
import Lightschoolhotel from "../images/Projectchambre2.png";
import Lightschoolurbanpark from "../images/Lightschoolurbanpark.png";
import LightschoolMuseum from "../images/Projectgalerie1a.png";
import Lightschooloffice from "../images/Lightschooloffice.png";
import LightschoolIndustries from "../images/LightschoolIndustries.png";
import Lightschoolheritage from "../images/Lightschoolheritage.png";
import Lightschoolentertainment from "../images/Lightschoolentertainment.png";
import AOS from "aos";
import "aos/dist/aos.css";
// New imported for popups
import { FaArrowRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import LEDpopup from "../images/Lightschool_LEDpopup.png";
import Heritagepopup from "../images/Lightschool_Heritagepopup.png";
import Lightschool_shop_popup from "../images/Lightschool_shop_popup.png";
import Lightschhol_museum_popup from "../images/Lightschool_museum_popup.png";
import Lightschhol_hotel_popup from "../images/Lightschool_hotel_popup.png";
import Lightschhol_intertainment_popup from "../images/Lightschool_entertainment_popup.png";
import Lighschool_urban_popup from "../images/Lightschool_urban_popup.png";
import Lightschool_office_popup from "../images/Lightschool_office_popup.png";
import Lightschool_sports_popup from "../images/Lightschool_sports_popup.png";
import Lightschool_industries_popup from "../images/Lightschool_industries_popup.png";
import Lightschool_home_popup from "../images/Lightschool_home_popup.png";
import Lightschool_transport_popup from "../images/Lightschool_transport_popup.png";

// starts here....
const Lightschool = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [modalContent, setModalContent] = useState({
    imageSrc: "",
    heading: "",
    detailsone: "",
    detailstwo: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [blurBackground, setBlurBackground] = useState(false);

  const openModal = (imageSrc, heading, detailsone, detailstwo) => {
    setModalContent({ imageSrc, heading, detailsone, detailstwo });
    setIsModalOpen(true);
    setBlurBackground(!blurBackground);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setBlurBackground(!blurBackground);
  };

  return (
    <>
      <div className={blurBackground ? "blur-background" : ""}>
        <header className="bg-[#101010]">
          <Navbar />
        </header>
        <main className="yellow-img py-20">
          <div className="px-6 md:px-16 py-16 lg:px-32">
            <h1 className="text-white pt-4 pb-12 text-9xl font-extralight">
              Light School
            </h1>
            <div className="grid grid-cols-2 gap-3">
              <div
                className="overflow-hidden"
                onClick={() =>
                  openModal(
                    LEDpopup,
                    "LEDs",
                    "Since their invention in 1942, LEDs have evolved to become powerful and versatile light source meeting the challenging needs of present world.  These semiconductors though simple to use, are technical instruments of modern engineering, driven by an array of technical factors to ensure durability in their use. ",
                    "Lumen maintenance, colour rendition and damage factors are few nuances to consider while evaluation an optimal solution for your project.At Kaash, we follow a rigorous technical evaluation to ensure an ideal solution for your project. Let's build your project with light."
                  )
                }
              >
                <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                  <p>Hall de locomotives</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={LightschoolLED}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div></div>
                <div
                  className="overflow-hidden"
                  onClick={() =>
                    openModal(
                      Heritagepopup,
                      "Heritage",
                      "Castles, forts, and other heritage architecture are noble embodiments of a society's evolving ideals, beliefs, cultures, and values. They serve as living relics of the past and also provide a glimpse into the future of today's civilisation. Often celebrated for tourism, this heritage is pivotal towards economic development along with culture conservation. ",
                      "Light, as the fourth dimension of architecture, offers enormous value to these structures by illuminating them. Light enhance the architectural subtleties and the grandiosity of the structure. Light metric of colour, rendition, IP and IK are crucial parameters for monuments subjected to adverse weather conditions."
                    )
                  }
                >
                  <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                    <p>Greenwall</p>
                    <FaArrowRight />
                  </div>
                  <div>
                    <img
                      className="object-center object-cover h-full w-full"
                      src={Lightschoolheritage}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3">
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="overflow-hidden"
                  onClick={() =>
                    openModal(
                      Lightschool_shop_popup,
                      "Shop",
                      "Luxury retail and fast fashion are in a continuous endeavour to be unique and attractive. Good lighting create inviting environment and promote sales. Light is an immersive tool to create desired ambience to complement brand image, highlight product details - colour, texture, design and increase business prospects. ",
                      "Dynamic displays in shop windows and adaptive lighting on the inside initiate positive engagement. Colour rendition, temperature and beam angle are crucial parameters for shop lighting, while ensuring minimal glare and maximum visual comfort for the shoppers."
                    )
                  }
                >
                  <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                    <p>Greenwall</p>
                    <FaArrowRight />
                  </div>
                  <div>
                    <img
                      className="object-center object-cover h-full w-full"
                      src={Lightschoolshop}
                    />
                  </div>
                </div>
                <div></div>
              </div>
              <div
                className="overflow-hidden"
                onClick={() =>
                  openModal(
                    Lightschhol_museum_popup,
                    "Museum & Gallery",
                    "Light is the absolute necessity to highlight the colours, contrast, and beauty of the artefacts. Light for art is about finding the perfect balance between light and darkness to create a specific mood and ambiance that complements the exhibits while enhancing every visitor’s experience. ",
                    "As the most sensitive application, light quality is of utmost importance for the longitivtiy of art and successful turnaround for every gallery or a museum. Light damage factor, colour rendition, colour shift, harmonic distortions, and beam angles are few among many difficult answers to look for when you need light for art."
                  )
                }
              >
                <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                  <p>Hall de locomotives</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={LightschoolMuseum}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 pt-3">
              <div
                className="overflow-hidden"
                onClick={() =>
                  openModal(
                    Lightschhol_hotel_popup,
                    "Hotel",
                    "Hotels are a great place to experience the design trends, technology and culture as business and leisure travellers fly around the world. A visitors impression builds from the facade to a gradual progression into the lobby, lounges and guest rooms. ",
                    "Light interaction with user and space function have unique influence on desired atmosphere and experience. Light accent highlight the details, create drama while ambient improves functional experience. Light colour, design, shape and size are significant along with LEDs quality to build a rich comforting environment. "
                  )
                }
              >
                <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                  <p>Greenwall</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={Lightschoolhotel}
                  />
                </div>
              </div>
              <div
                className="overflow-hidden"
                onClick={() =>
                  openModal(
                    Lightschhol_intertainment_popup,
                    "Entertainment",
                    "Light evokes emotions, with every colour triggering a different node. Using the sensorial power of light, immersive spaces are realised to support event theme and create desired ambience.",
                    "Control over DMX and mixing of RGBW LEDs synced with projection mapping can generate imaginative scenes in physical space, elevating the experience. Robust control gears with high switching cycles and flawless programming are must haves for a intuitive lighting experience."
                  )
                }
              >
                <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                  <p>Greenwall</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={Lightschoolentertainment}
                  />
                </div>
              </div>
              <div></div>
              <div
                className="overflow-hidden"
                onClick={() =>
                  openModal(
                    Lighschool_urban_popup,
                    "Urban spaces",
                    "Urban landscape is presenting city planners with new challenges in creating a unified environment for public life which is safe, functional and yet sustainable. Lighting can help in many ways. Bringing communities together at night by providing a safe and comfortable environment for play and conversations and local businesses. ",
                    "Light pollution and low pollination is a rising issue in the urban environment, in the form of unwanted light. Light design with intelligent controls enable light to be reactive towards space use and build greener healthier communities while preserving the bio-diversity and reversing climate change."
                  )
                }
              >
                <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                  <p>Greenwall</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={Lightschoolurbanpark}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3">
              <div
                className="overflow-hidden "
                onClick={() =>
                  openModal(
                    Lightschool_home_popup,
                    "Home",
                    "Our home is an impression of our life, persona and family. Living spaces are packed with collections and aspirations as art, photos, furniture and decor. Light design create a wonderful visual impression unique to our dream space by binding them together",
                    "Technology conceive flexible lighting to support different needs of the family throughout the day, from playful kids corner to dinner with friends or a quite reading corner. Home need a perfect balance of decorative light to complement decor and technical light to support space use with maximum flexibility."
                  )
                }
              >
                <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                  <p>Hall de locomotives</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={Lightschoolhome}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="overflow-hidden"
                  onClick={() =>
                    openModal(
                      Lightschool_transport_popup,
                      "Transport",
                      "Connecting people beyond oceans, transport hubs have created a cohesive ecosystem. Operational 24x7, these spaces should be welcoming and sustainable while allowing travellers to rest, shop and eat.",
                      "Light for facade defines the architectural view at night and support different demands of travellers and businesses on the inside. Creating a brighter ambience to feel fresh from longer journeys is the prime function of light, while sustainable consumption and maintenance are the key challenges for operations. Connected lighting solutions helps easy maintenance of such heavy use facilities."
                    )
                  }
                >
                  <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                    <p>Greenwall</p>
                    <FaArrowRight />
                  </div>
                  <div>
                    <img
                      className="object-center object-cover h-full w-full"
                      src={Lightschooltransport}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 pt-3">
              <div
                className="overflow-hidden"
                onClick={() =>
                  openModal(
                    Lightschool_office_popup,
                    "Office",
                    "Attractive, engaging, and dynamic work spaces helps create successful businesses. Flexible dynamic lighting allow offices to work better and smarter. With balance of natural and artificial light, we create human centric spaces to inspire and focus. ",
                    "Smart technologies of IOT, daylight harvesting and occupancy control can generate up to 80% energy savings. LEDs bio-safety and human circadian rhythm are important for healthy workspaces. While luminaire efficacy and sustainable light design allows to minimise carbon footprint. "
                  )
                }
              >
                <div className="flex justify-between items-center  clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                  <p>Greenwall</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={Lightschooloffice}
                  />
                </div>
              </div>
              <div></div>
              <div
                className="overflow-hidden"
                onClick={() =>
                  openModal(
                    Lightschool_sports_popup,
                    "Sports",
                    "With it's ever growing popularity, stadiums, sports halls and parks demand advanced infrastructure. Built for multi-use, stadiums hosts concerts and sports hall ceremonies. In these multidimensional utility, flexible lighting becomes ultra important.",
                    "It will be a delight for urban skaters to see their park turning to party arena on weekend nights. Well designed lighting begins with minimal glare for players and maximum comfort for spectators. Connected lighting with different colours, beams along with high lumen maintenance for durable functional lighting solution"
                  )
                }
              >
                <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                  <p>Greenwall</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={Lightschoolsports}
                  />
                </div>
              </div>

              <div
                className="overflow-hidden"
                onClick={() =>
                  openModal(
                    Lightschool_industries_popup,
                    "Industries",
                    "A vibrant economy relies on manufacturing and logistical facilities as solid cornerstones. To be stronger, smarter, and faster productive workforce is a must. Light for factories and warehouses should support the safety and production with good quality illuminance but also enhance the well-being of workers by creating a vibrant work environment.",
                    "Daylight harvesting and volumetric brightness are key actors to do so. Integrated light solutions give real-time feedback about space use and light performance for cost-effective decisions. Good lighting creates productive and positive atmosphere to keep people focussed and aware."
                  )
                }
              >
                <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                  <p>Greenwall</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={LightschoolIndustries}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      {isModalOpen && (
        <div className="popup">
          <div className="grid grid-cols-1 sm:gap-4 p-4">
            <div>
              <span
                className="close-button text-3xl lg:text-5xl"
                onClick={closeModal}
              >
                <RxCross2 />
              </span>
            </div>
            <div className="text-2xl lg:text-5xl">{modalContent.heading}</div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 sm:gap-8">
              <div>
                <img
                  className="h-28 sm:h-36 md:h-48 w-full lg:h-full"
                  src={modalContent.imageSrc}
                  alt="Modal Image"
                />
              </div>
              <div className="text-[10px] sm:text-xs  xl:text-sm">
                <p className="modal-detailsone">{modalContent.detailsone}</p>
                <p className="modal-detailstwo pt-4">
                  {modalContent.detailstwo}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Lightschool;
