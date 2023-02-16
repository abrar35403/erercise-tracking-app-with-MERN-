import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";
import React from "react";
import { Delete } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Review_Card from "./Review_Card";
import { fontSize } from "@mui/system";
import Footer from "./Footer";
import ClintsGallery from "./ClintsGallery";

const content = [
  {
    title: "Jump in and lose yourself.",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "c_photo/gentrit-sylejmani-JjUyjE-oEbM-unsplash.jpg",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png",
  },
  {
    title: "When you run, the road belongs to you",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "c_photo/chander-r-z4WH11FMfIQ-unsplash.jpg",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png",
  },
  {
    title: "If you brake, you do not win.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Read More",
    image: "c_photo/viktor-bystrov-Gi0OMNguFaw-unsplash.jpg",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
];

const Home = () => {
  return (
    <div>
      <Slider className="slider-wrapper" autoplay={3000}>
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner" >
						<h1 style={{textAlign:'center'}}>{item.title}</h1>
						<p>{item.description}</p>
						<button style={{borderRadius:50}}> {item.button}</button>
					</div>
            {/* <section>
						<img src={item.userProfile} alt={item.user} />
						<span>Posted by <strong>{item.user}</strong>

						</span>
					</section> */}
          </div>
        ))}
      </Slider>







      
      <br />
      <br />
      <hr />
      <center>
        <Typography
          variant="h4"
          style={{ margin: 40, color: "blue", fontSize: 40 }}
        >
          Our Clients
        </Typography>
      </center>
            <ClintsGallery/>
            <hr />
      <center>
        <Typography
          variant="h4"
          style={{ margin: 40, color: "blue", fontSize: 40 }}
        >
          Our Happy Clients Reviews
        </Typography>
      </center>

      <Review_Card />
					<hr/>
					<Footer/>



    </div>
  );
};

export default Home;
