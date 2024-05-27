import UserPopup from "../UserPopup/UserPopup";
import "./UserCard.css";

function UserCard({
  name,
  phone,
  email,
  hire_date,
  position_name,
  department,
  address,
  onClick,
  isPopupOpen,
  onClose,
}) {
  return (
    <>
      {isPopupOpen ? (
        <UserPopup
          name={name}
          phone={phone}
          email={email}
          hire_date={hire_date}
          position_name={position_name}
          department={department}
          address={address}
          onClose={onClose}
        />
      ) : (
        ""
      )}
      <li className="users__card box-shadow cursor" onClick={onClick}>
        <h2 className="users__name">{name}</h2>
        <div className="users__contacts">
          <div className="users__icon users__icon_type_phone">
            <p className="users__text">{phone}</p>
          </div>
          <div className="users__icon users__icon_type_email">
            <p className="users__text">{email}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default UserCard;
