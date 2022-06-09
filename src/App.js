import "./app.css";
import GiftSvg from "./assets/gift.svg";
import LoveSvg from "./assets/love.svg";
import SimpleImageSlider from "react-simple-image-slider";
import Image from "react-image-enlarger";
import React from "react";
import Modal from "react-modal";

const imageAddr = [
  "https://lh3.googleusercontent.com/hu2nsJpEFMZ07aR6Stb7Jp-HJ3uEu71JRc8ckv--Au69WkEELM0iFD-JyEoR7L8s3ZV6cjVLzaKIYOKODaJyt_UoBv_GKp8boaRLXtRhYE1eLXAMDVF_8pDyNiuIBqhBaTxzD52CqzD2Cui0gdYgjjDch-BrwP96Ye5VI26TcfQ3lZwaoT4Wz5bpXQJUDaSKovvKZt1Gyw3kYfxccIdqKsZud-SoJvjA3YjHd6gQATLRQfVUBC4L1-UHwqWhk7Y25NEjOxc7jbHVuwhH_NKm1Ft_wHrmU5C2IVD3kClOl-knakRxD0Pp5nPVZqRVt2ra9OsrOo7COVaL-8ltJCSP-JYMbCGn0lYQZPnA2XsE8lkdvP0OhJJS_nDG2DmklwH_a38ek0N3S_wrQVF3yGoY1F4eG4vUTaRaQxS2XtT3hTW_5AH6_Q6lyF2qQ5YTCRgEmep79AiRRs7uUf10YM7larNS4ODwz4zcI6lIdGGf6UOT68ufqOxqLHs-xjUX4aVj5xQi-uN_HDLXrcIARVIknvcM0TaWZKVTni-4ylnmb7uAlR3bBHVpBDcQyFTXftl23eQq6UvOrK6lDGhvVvtuBfDyIAPZmkqv36klR9XqKNy-CFCtToyzUYi2gxQiqOGJBh2HhlWlsGYYZonRmFVLKTmlJ7_bdqNe2rHtMC0-2--0Qw_pgyuCZEiE3fVX_L6ShPapL5yAV0rpFKA5RMrro7UvnGoViRHPdpnGu3RP8Bbcg7PDBUA4dCw8Q6I=w1264-h949-no?authuser=0",
  "https://lh3.googleusercontent.com/vD9i6V0t2bXDyfxXZ4mk_-sguwKs0Jlc7JX2VOJ4rSf8y4EYZMPqy1oCAiBgCYr8I7USrUCJBPKdoJBVGKKC7wetfNPkpoOmdunAr7nGEruqqzW3W5tiES7LIt_dQxdYRftltqLT34ylo7NpWtw_vQ2q7LbQ_F5bV3oEbtlZH7Cgt1-ccei1Fpiy1D_yljs8Q2zk4Qh6EuIxZ0qija29sTMpBclFdByrJJJn-eN1CNp9iBGMawIJD1qyd1XRTZMtpaDkNLbibLRgLNgkkPoxNfC8C66j0gGXCUAzK3KmM8Nk72RUMozD3vSPFnlc6fOZJr94nc4vnLmF6xJzKRJZS4dHotX_Kz9oCvBxY5l3Gi4km0Xe_eLspypuwP0CDobAWU1uT23tuXGxezlzHTrBChQdRY82ejUsinaRyn7LiRR8q95hqru42Iu9V_ox0kuWFYpMqdh1sVXiD_2C8a4FWWEp1Gyqrdfi8Dl3zT6mbG0QJcOFiNu4zHMDDcHgdQizFQySNwF8KlmblikpMQZlmP68-nmXp1n81flvf5fxkQsz-ycUNdsqj8omgOylUB_TL-oqejHkj1mC_5E4TLhdGDfRahNM7OvD5Pb7Sn3CZlE1ZX4UTHsygdhIs2BDCbV2igYcfrNzSz0-AUhr5dCCX5QYYwE_Z67q0y5YvR-eQ3whVKM6nsIaD0QcyEvSrEtOEnXAN4TaOJMzmALaLB7KmEAyvsWCuqSsAY8vC_rWUjlXCYPEp5EWt5RebnE=w711-h948-no?authuser=0",
  "https://lh3.googleusercontent.com/EqTPZqInzw2BbOWwMUrWeC0TCuSBCmGtPbLyM1XpyvUJC3ZMcigDn2JbBUu6gG3nKip191YQIZcSFQcFrw0A_aZ2m3zNWydFNTGYU7fqPsv0W6eLHTwLnSqt_KT4PfghrCufCDQE83x27VDD16tgUNH3BSys-L5YUvHruXvwc_60oOhPbsbQ0fLDl57LSi1W3URGqNjizYhrWk8YUeeI-7yNrmI_wKXM4Yq7KeC6Y8cqMUQLu6EgFEG39UOQ0Twmqw7y6ZtYOT4FBVuotO7Dmg16iunO5q7YuWLd-N7iUjVFZ-6yhPdIzhtcHySiBlxRdjnb5oYY4Mz_EVeKO5hmPbgXHua_xpJ3UmGa3bSpNxd0mVHfM5SzklrFn2vtmkOczblnUHXc_SCWjWsVTV1ROQTnt49_wGzZaSz_3-Strm56TGTrUDjworXLa-e1MJo8MMWawJ6cdXUIt1hsnY3T690VYzb1jNr5tTbwaHseKS2l8BP1pthevw1VzHL2na8IX0Bu_oxeOoMGKpd21MChFfsllwngVqkN09JyvDw3h_7Ae_smV5g97lDo9Bj3FfWSa7QHV7RBhgSMU-T7KVne4WXUvkEVJOhBBY84LqTu8x3aQHQSStSlzSrcFAfvRgVJtXcAio477dxZzofsfIxU-WFWfWEVHt5rYvVJLo39gkdPfsUBWg8_Hg76wg8QQhzQcuu0zW7R_QcR_lRPqBbTJqHfuCL3-UONJewTKHgr0YZFL-Sj9daGPMFguUs=w711-h948-no?authuser=0",
  "https://lh3.googleusercontent.com/g9BQK9zBpB4g3Gfpc1LZNpuwRUvTA-iN5xJFtNuMHt8BBZrPHzkl6UUefNOkeDfXlUWklwAeoaMX405WOldUN8XnSGTbL6jrX4Y8slna0jm-QTzWGsh7lJFXRYFwHTb6Ca8jPE5zaFJb-ZTjQ43XJrfcZuN6d1AgLwn4PfNKkkqXflj4Dn5xsaaduzoODOAF9E7dTvSWMjyX-E-6HojfAKvS6Eehhghuh8hLhwhUmr2hifguCBt9ByL4-Tlw2oClMJVvMwUaV6UQ_KzSXNQ5cnWLteetPFTvJfSqiO_TeLUo6YdN4VmphzSN-4wOsrw3yAgfSC2OJ2eJL-i_RXXsGPAfHUvZUA5hEWnMMxNQ5QnhRDzlm1X3JtnpBxO5AIEDcpnsXP35vhoL7IMcwym-JU5nenza8nuBYCIPJ9oFKRB1jE8GB2dfGwFz2PK5rAfO9WmVP_y93T9SOEtje59cA0xuM04QaR9iWp9zicOb1YjmC9Nn2NB3khhqnOrrh1fV8JUJxWBmvjNbY_vRhfiLSUgXAW-q6apWMqIlrOQKTUSECZ3scO0kAG6fhMhxKM7J9Iq6Kciq7leEhhE9zyNYE04vlwmG2AqFrjPMnYdhUhg5rWR6hY3ZsLQFvfjbX9rMBk37k9QsMYj86tZFh4eKh23O-vpvEIe7UXgtD_tjyh2OpVoPus4M2EdXSXHphGWVPR2g3WbJhu3gC3pxIrRrsb7fUALSS8kVY1XO-1uaFCqsWlicPboxhXMdY8Q=w489-h244-no?authuser=0",
  "https://lh3.googleusercontent.com/qlqmFGP4CAdtmggJ-7FFPsATC0xfu_10a7C0yag8iAC5obr-hXmbaSSKKVK4XyO8E69f9vBjDF-04dIH1n-q9qy2rlkogtcYULpLwCORuAA83gCFy6tQDS4A5TovMOD_-TwJ8HiaZE1RMEFSDgieSybLJIdZWcvi2Ww1SHWldfVg3mL-d--FQYJfna6m-1Xfd3tJ0IAHNpRFBkDCurHfvrC_AwQhVSSwWNgNwCfBkJUjQu3Kce3ER98nx8uwyegARz1DA7Z7QvLoCsE5QmPV43d6T9dG49U9aAayrMpVnFFFl7MbhrgZvY9ONL_Y9EhbyLPkNap9Uypomk4OaZepYRtOl2E7XyyADWpEhE9_VgcV4Eb9JBoISp2u93W1jiVZJlOEoVVgV7J8MG1Ov5Tc8U_UmxwdxCAqdLdMrAaMI8IaTAN2eHMnnB06bjKT4YiWBUPzrLuKdvUhPlbr4f3FxlTrLxyQ-YS_Mnd5aO3TfVyOLvH5VuHJwjbAnitmNLR78XYhvhLK2tdj0mBFZD5qvr64InnTbsFAfVot14PKPrySOU1yOTlHeOj_Xnpyv53cGub81eNCtKzWwmTa9dpCDz4GyYC_LFGxR9Us8LEr-Ar11IYzaIC5neLhL7jSZjK8WWF9P3e5U2kOJpev6SrAQsciJH2xBNce7gGGxX8ZBAdDG6Au5B-MX122kC1vqSam5ut6kC-4av8Z1fZIoVjYiQNynpu48zQS3QzK-T1iqh3nAV4h2_xmek5PbVY=w183-h244-no?authuser=0",
  "https://photos.app.goo.gl/zuRcCVkQHKmCwXoE9",
  "https://photos.app.goo.gl/MkhDZYK75Wauc8nK6",
  "https://photos.app.goo.gl/sMAkFYgVmMe69agn8",
  "https://photos.app.goo.gl/HkKRGxB5PnwRJ8DEA",
  "https://photos.app.goo.gl/HGxoHaFXAuU2SMfb8",
  "https://photos.app.goo.gl/JDmqWVdXD5wj2Fef7",
  "https://photos.app.goo.gl/UT1Dc13a1EqKeuh3A",
  "https://photos.app.goo.gl/tU1154jS53VHN5tY8",
  "https://photos.app.goo.gl/LbCaepGLaABq1uf56",
];

// Modal.setAppElement("#clickable_gift");

const customStyles = {
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#febe10",
  },
};

function App() {
  const [image, setImage] = React.useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="container">
      {/* <iframe
        src="https://giphy.com/embed/T2J86H6QVTHoDnysnW"
        width="400px"
        height="800px"
        style={{ position: "absolute" }}
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe> */}
      <div className="slider">
        <SimpleImageSlider
          width="390px"
          height="250px"
          // width="100%"
          // height="100%"
          images={imageAddr}
          // showBullets={true}
          showNavs={true}
          onClick={(idx, event) => {
            setImage(imageAddr[idx]);
          }}
          autoPlay
          autoPlayDelay={2}
        />
      </div>

      {image && (
        <Image
          style={{ width: "200px", height: "auto" }}
          // style={{ width: "0px", height: "0px" }}
          zoomed={image ? true : false}
          src={image}
          // onClick={() => setZoomed(true)}
          onRequestClose={() => setImage(null)}
        />
      )}
      <div className="anni-text-wrapper">
        <div className="year">28</div>
        <div className="greet-text">
          <p>YEARS</p>
          <p>ANNIVERSARY</p>
          <p>CELEBRATION</p>
        </div>
      </div>

      <img
        // id="clickable_gift"
        alt="gift"
        src={GiftSvg}
        width="180px"
        className="gift hithere"
        onClick={openModal}
      />
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        {/* <button onClick={closeModal}>close</button> */}
        <img
          // id="clickable_gift"
          alt="love"
          src={LoveSvg}
          width="180px"
        />
        <p className="message">
          {/* Mom and Dad, I cannot begin to describe how blessed I am to have
          amazing parents in my life. Seeing true love through you both makes my
          heart happy. As your son I see perfection in both of you. I
          love you. */}
          माँ और पिताजी, मैं वर्णन करना शुरू नहीं कर सकता कि मैं कितना धन्य हूँ
          मेरे जीवन में अद्भुत माता-पिता। आप दोनों के द्वारा सच्चा प्यार देखकर
          मेरा दिल खुश. आपकी बेटे के रूप में मैं आप दोनों में पूर्णता देखता हूं।
          मुझे तुमसे प्यार है।
        </p>
        <button onClick={closeModal} className="closeBtn">
          बंद करो
        </button>
      </Modal>
    </section>
  );
}

export default App;
