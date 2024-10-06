import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingForm.css";
import { useInView } from "react-intersection-observer"; // Импортируем useInView
import { motion } from "framer-motion"; // Импортируем motion

interface Errors {
  name?: string;
  passengers?: string;
  dropOffAddress?: string;
  email?: string;
  pickUpAddress?: string;
  date?: string;
  time?: string;
}

interface FormData {
  name: string;
  passengers: string;
  dropOffAddress: string;
  time: string;
  email: string;
  pickUpAddress: string;
  date: Date;
}

function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    passengers: "",
    dropOffAddress: "",
    time: "12:00",
    email: "",
    pickUpAddress: "",
    date: new Date(),
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "time") {
      const timeRegex = /^[0-9:]+$/;
      if (!timeRegex.test(value)) {
        return;
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date: Date) => {
    setFormData({ ...formData, date });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: Errors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "This field is required.";
      isValid = false;
    }

    if (formData.passengers.trim() === "") {
      newErrors.passengers = "This field is required.";
      isValid = false;
    }

    if (formData.dropOffAddress.trim() === "") {
      newErrors.dropOffAddress = "This field is required.";
      isValid = false;
    }
    if (formData.email.trim() === "") {
      newErrors.email = "This field is required.";
      isValid = false;
    }
    if (formData.pickUpAddress.trim() === "") {
      newErrors.pickUpAddress = "This field is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Форма отправлена:", formData);
    }
  };

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="booking-form" ref={ref}>
      <div className="container">
        <motion.div
          className="booking-form-content"
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="booking-text">
            <h2>ищете такси?</h2>
            <h1>делайте заказ сейчас!</h1>
            <p>
              наша компания обязуется сделать вашу поездку уникальной, <br />
              наилучшим образом удовлетворяя ваши потребности.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="form-fields">
            <div className="form-column">
              <input
                type="text"
                placeholder="имя"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <input
                type="text"
                placeholder="кол-во пассажиров"
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
              />
              {errors.passengers && (
                <span className="error">{errors.passengers}</span>
              )}

              <input
                type="text"
                placeholder="конечный адрес"
                name="dropOffAddress"
                value={formData.dropOffAddress}
                onChange={handleChange}
              />
              {errors.dropOffAddress && (
                <span className="error">{errors.dropOffAddress}</span>
              )}

              <input
                type="text"
                placeholder="время заказа"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
              {errors.time && <span className="error">{errors.time}</span>}
            </div>
            <div className="form-column">
              <input
                type="email"
                placeholder="e-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <input
                type="text"
                placeholder="начальный адрес"
                name="pickUpAddress"
                value={formData.pickUpAddress}
                onChange={handleChange}
              />
              {errors.pickUpAddress && (
                <span className="error">{errors.pickUpAddress}</span>
              )}

              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                placeholderText="выберите дату"
                className="date-picker"
              />

              <button type="submit" className="book-now-button">
                заказать сейчас
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default BookingForm;
