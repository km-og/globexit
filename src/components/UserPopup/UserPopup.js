import { useEffect } from "react";
import "./UserPopup.css";

function UserPopup({
  name,
  phone,
  email,
  hire_date,
  position_name,
  department,
  address,
  onClose,
}) {
  function onClick(e) {
    e.stopPropagation();
    if (e.target.classList.contains("popup")) {
      onClose();
    }
    if (e.target.classList.contains("popup__close-button")) {
      onClose();
    } else {
      return;
    }
  }

  useEffect(() => {
    const closePopupTouchEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
        document.removeEventListener("keydown", closePopupTouchEsc);
      }
    };

    document.addEventListener("keydown", closePopupTouchEsc);
  }, []);

  return (
    <section className="popup " onClick={onClick}>
      <div className="popup__container box-shadow">
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__close-button"
        ></button>
        <h2 className="popup__title">{name}</h2>
        <div className="popup__info">
          <div className="popup__wrap">
            <h3 className="popup__parameter">Phone:</h3>
            <p className="popup__value">{phone}</p>
          </div>
          <div className="popup__wrap">
            <h3 className="popup__parameter">Email:</h3>
            <p className="popup__value">{email}</p>
          </div>
          <div className="popup__wrap">
            <h3 className="popup__parameter">Date of admission:</h3>
            <p className="popup__value">{hire_date}</p>
          </div>
          <div className="popup__wrap">
            <h3 className="popup__parameter">Position name:</h3>
            <p className="popup__value">{position_name}</p>
          </div>
          <div className="popup__wrap">
            <h3 className="popup__parameter">Department:</h3>
            <p className="popup__value">{department}</p>
          </div>
          <div className="popup__addition">
            <h3 className="popup__parameter popup__parameter_place_addition">
              Additional information:
            </h3>
            <p className="popup__value">{address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserPopup;
