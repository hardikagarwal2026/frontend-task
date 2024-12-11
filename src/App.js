import React, { useState } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import Slider from "react-slick";

const cardData = [
  {
    image: "/images/card-1.png",
    heading: "Nutrition",
    paragraph:
      "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
    pill: "121/80 mmHg",
    category: "Nutrition",
  },
  {
    image: "/images/card-2.png",
    heading: "Physical activity",
    paragraph:
      "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
    pill: "32 minutes",
    category: "Physical activity",
  },
  {
    image: "/images/card-3.png",
    heading: "Restorative sleep",
    paragraph:
      "Consistent, quality sleep is essential for cognitive function and physical health.",
    pill: "8 hours",
    category: "Restorative sleep",
  },
  {
    image: "/images/card-4.png",
    heading: "Stress management",
    paragraph:
      "Effective stress management techniques are crucial for mental well-being and overall health.",
    pill: "60 bpm",
    category: "Stress management",
  },
  {
    image: "/images/card-5.png",
    heading: "Social connection",
    paragraph:
      "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
    pill: "Feeling better",
    category: "Social connection",
  },
  {
    image: "/images/card-6.png",
    heading: "Substance abuse",
    paragraph:
      "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
    pill: "62 days",
    category: "Substance abuse",
  },
];

const Card = ({ image, heading, paragraph, pill }) => (
  <div className="card">
    <div className="card-row card-row-1">
      <img src={image} alt={heading} className="card-image" />
      <div className="pill">
        <p className="pill-text">{pill}</p>
      </div>
    </div>
    <div className="card-row card-row-2">
      <h1 className="card-text-h">{heading}</h1>
      <p className="card-text-p">{paragraph}</p>
    </div>
  </div>
);

const CarouselComponent = ({ cardData }) => {
  const settings = {
    dots: true,
    infinite: false, // Set to false to avoid infinite loop
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // Enable center mode
    // No padding around the centered slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false, // Disable center mode for smaller screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, // Disable center mode for smaller screens
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </Slider>
  );
};

function App() {
  const [filteredData, setFilteredData] = useState(cardData);

  const handleFilter = (category) => {
    const filtered = cardData.filter((card) => card.category === category);
    setFilteredData(filtered);
  };

  return (
    <div>
      <Navbar />

      <section className="hero-section">
        <div className="ticker-container">
          <div className="ticker ticker-down">
            <div className="ticker-content">
              <img src="/images/col1-1.png" alt="img-1" />
              <img src="/images/col1-2.png" alt="img-2" />
              <img src="/images/col1-3.png" alt="img-3" />
              <img src="/images/col1-4.png" alt="img-4" />
              <img src="/images/col1-1.png" alt="img-1" />
              <img src="/images/col1-2.png" alt="img-2" />
              <img src="/images/col1-3.png" alt="img-3" />
              <img src="/images/col1-4.png" alt="img-4" />
            </div>
          </div>
          <div className="ticker ticker-up">
            <div className="ticker-content">
              <img src="/images/col2-1.png" alt="img-1" />
              <img src="/images/col2-2.png" alt="img-2" />
              <img src="/images/col2-3.png" alt="img-3" />
              <img src="/images/col2-4.png" alt="img-4" />
              <img src="/images/col2-1.png" alt="img-1" />
              <img src="/images/col2-2.png" alt="img-2" />
              <img src="/images/col2-3.png" alt="img-3" />
              <img src="/images/col2-4.png" alt="img-4" />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h1 className="inter-head">
            Book an appointment with
            <span
              style={{
                background:
                  "linear-gradient(93deg, #1173B3 -34.01%, #0CB9B3 69.91%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: "Inter",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "131.523%",
                letterSpacing: "-0.8px",
              }}
            >
              {" "}
              lifestyle medicine
            </span>{" "}
            experts
          </h1>
          <p>Optimize your lifestyle and reverse chronic diseases.</p>
        </div>
        <div className="search-container">
          <div className="flex">
            <div className="relative input-group-1">
              <input
                type="text"
                id="input-group-1"
                placeholder="Condition, procedure, speciality..."
              />
            </div>
            <div className="relative input-group-2">
              <input
                type="text"
                id="input-group-2"
                placeholder="City, state, or zipcode"
              />
            </div>
            <div className="relative input-group-3">
              <input
                type="text"
                id="input-group-3"
                placeholder="Insurance carrier"
              />
            </div>
            <button className="find-now-button">Find now</button>
          </div>
        </div>
      </section>
      <section className="mt-10 mx-20">
        <div className="flex flex-col gap-5">
          <div className="text-2xl font-bold inter-card-h">HOW IT WORKS</div>
          <div className="inter-sub">
            <span
              style={{
                fontWeight: 600,
                lineHeight: "133%",
                background:
                  "linear-gradient(290deg, #F1CA72 27.25%, #D96E6C 92.08%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <i> Lifestyle as medicine:</i>
            </span>
            The six pillars
          </div>
        </div>
        <div className="filter-container">
          <div className="filter-btn" onClick={() => handleFilter("Nutrition")}>
            Nutrition
          </div>
          <div
            className="filter-btn"
            onClick={() => handleFilter("Physical activity")}
          >
            Physical activity
          </div>
          <div
            className="filter-btn"
            onClick={() => handleFilter("Restorative sleep")}
          >
            Restorative sleep
          </div>
          <div
            className="filter-btn"
            onClick={() => handleFilter("Stress management")}
          >
            Stress management
          </div>
          <div
            className="filter-btn"
            onClick={() => handleFilter("Social connection")}
          >
            Social connection
          </div>
          <div
            className="filter-btn"
            onClick={() => handleFilter("Substance abuse")}
          >
            Substance abuse
          </div>
        </div>
      </section>
      <section className="carousel-section">
        <CarouselComponent cardData={filteredData} />
      </section>
    </div>
  );
}

export default App;
