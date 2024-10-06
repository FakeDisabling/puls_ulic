import React, { useState } from "react";
import "./ChooseTaxi.css";
import { motion } from "framer-motion";

function ChooseTaxi() {
  const [selectedCategory, setSelectedCategory] = useState("hybrid");

  const cars = {
    hybrid: [
      {
        image:
          "https://demothemesflat.co/conexikit/wp-content/uploads/2022/11/Taxis-01.png",
        logo: "https://cdn.skoda-storyboard.com/2020/11/SKODA-3D-Standard-Logo_sRGB-e1478246875778.png",
        model: "Skoda Octavia",
        baseRate: "$4.30",
        perMile: "$2.00",
        passengers: 4,
      },
      {
        image:
          "https://demothemesflat.co/conexikit/wp-content/uploads/2022/11/Taxis-02.png",
        logo: "https://i.pinimg.com/736x/3a/2a/c4/3a2ac47e1f4f22ba320e72110af25d30.jpg",
        model: "Mercedes E-Class",
        baseRate: "$4.30",
        perMile: "$2.00",
        passengers: 4,
      },
      {
        image:
          "https://w7.pngwing.com/pngs/272/521/png-transparent-2015-toyota-yaris-car-2014-toyota-yaris-2018-toyota-yaris-ia-toyota-yaris-compact-car-sedan-car.png",
        logo: "https://image.similarpng.com/very-thumbnail/2020/09/Toyota-logo-icon-on-transparent-background-PNG.png",
        model: "Toyota Yaris",
        baseRate: "$4.30",
        perMile: "$2.00",
        passengers: 4,
      },
    ],
    town: [
      {
        image:
          "https://e7.pngegg.com/pngimages/51/1011/png-clipart-2014-toyota-corolla-car-2016-toyota-corolla-2013-toyota-corolla-sedan-toyota-compact-car-sedan-thumbnail.png",
        logo: "https://image.similarpng.com/very-thumbnail/2020/09/Toyota-logo-icon-on-transparent-background-PNG.png",
        model: "Toyota Corolla",
        baseRate: "$4.30",
        perMile: "$2.00",
        passengers: 4,
      },
      {
        image: "https://static.pakwheels.com/2022/02/Honda-Civic-png.jpg",
        logo: "https://banner2.cleanpng.com/20180611/zjt/aa8qwx13u.webp",
        model: "Honda Civic",
        baseRate: "$4.30",
        perMile: "$2.00",
        passengers: 4,
      },
      {
        image:
          "https://e7.pngegg.com/pngimages/526/251/png-clipart-2012-audi-a8-car-luxury-vehicle-audi-a8-l-audi-compact-car-sedan-thumbnail.png",
        logo: "https://i.pinimg.com/736x/d0/27/dd/d027dddb727d742d8c209be8e8bbe624.jpg",
        model: "Audi A8",
        baseRate: "$4.30",
        perMile: "$2.00",
        passengers: 4,
      },
    ],
    limousine: [
      {
        image:
          "https://rk.mb-qr.com/media/thumbnails/cards/205040_000_200221_101604_SFL2052_8.png.860x860_q95.png",
        logo: "https://i.pinimg.com/736x/3a/2a/c4/3a2ac47e1f4f22ba320e72110af25d30.jpg",
        model: "C Class Model",
        baseRate: "$4.30",
        perMile: "$2.00",
        passengers: 4,
      },
      {
        image:
          "https://www.pngplay.com/wp-content/uploads/13/Audi-A7-PNG-HD-Quality.png",
        logo: "https://i.pinimg.com/736x/d0/27/dd/d027dddb727d742d8c209be8e8bbe624.jpg",
        model: "A7 Model",
        baseRate: "$4.30",
        perMile: "$2.00",
        passengers: 4,
      },
      {
        image: "https://freepng.pictures/get-logo.php?id=18822",
        logo: "https://www.maxxtech.de/pic/Emblem-Bowtie-Heck-OEM-16-24-Chevy-Camaro.GM-84003919a.jpg",
        model: "Chevrolet Camaro",
        baseRate: "$4.30",
        perMile: "$2.00",
        passengers: 4,
      },
    ],
    suv: [
      {
        image:
          "https://rk.mb-qr.com/media/thumbnails/cards/447_705_front_V1_Final.png.860x860_q95.png",
        logo: "https://i.pinimg.com/736x/3a/2a/c4/3a2ac47e1f4f22ba320e72110af25d30.jpg",
        model: "Mercedes Vito",
        baseRate: "$4.30",
        perMile: "$2.00",
        passengers: 4,
      },
      {
        image:
          "https://www.pngkey.com/png/detail/826-8261315_sprinter-mercedes-benz-sprinter-png.png",
        logo: "https://i.pinimg.com/736x/3a/2a/c4/3a2ac47e1f4f22ba320e72110af25d30.jpg",
        model: "Mercedes Sprinter",
        baseRate: "$4.30",
        perMile: "$2.00",
        passengers: 4,
      },
      {
        image:
          "https://w7.pngwing.com/pngs/235/322/png-transparent-volkswagen-california-car-volkswagen-transporter-t5-volkswagen-compact-car-van-car.png",
        logo: "https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_web_1600.jpg?1649155356",
        model: "Volkswagen T5",
        baseRate: "$4.30",
        perMile: "$2.00",
        passengers: 4,
      },
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="choose-taxi">
      <div className="container">
        <h2 className="section-title">выберите такси</h2>

        <div className="categories">
          <button
            className={`category-button ${
              selectedCategory === "hybrid" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("hybrid")}
          >
            эконом
          </button>

          <button
            className={`category-button ${
              selectedCategory === "town" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("town")}
          >
            премиум
          </button>

          <button
            className={`category-button ${
              selectedCategory === "limousine" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("limousine")}
          >
            бизнес
          </button>

          <button
            className={`category-button ${
              selectedCategory === "suv" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("suv")}
          >
            грузовой
          </button>
        </div>

        <div className="cars-grid">
          {cars[selectedCategory].map((car, index) => (
            <motion.div
              key={`${selectedCategory}-${index}`} // Добавляем ключ, зависящий от категории
              className="car-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
            >
              <div className="image-container">
                <motion.img // Оборачиваем картинку в motion.img
                  src={car.image}
                  alt={car.model}
                  initial={{ opacity: 0, scale: 0.8 }} // Начальное состояние: невидимый, уменьшенный
                  animate={{ opacity: 1, scale: 1 }} // Конечное состояние: видимый, нормальный размер
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
              <div className="logo-container">
                <img src={car.logo} alt={car.model} />
              </div>
              <motion.h3
                className="car-model" // Оборачиваем заголовок модели в motion.h3
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {car.model}
              </motion.h3>
              <ul className="car-details">
                <li>Ставка: {car.baseRate}</li>
                <li>За 1 км: {car.perMile}</li>
                <li>Кол-во пассажиров: {car.passengers}</li>
              </ul>
              <motion.button
                className="book-taxi-button" // Оборачиваем кнопку в motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                выбрать авто
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChooseTaxi;
