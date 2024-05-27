import { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Users.css";
import * as UsersApi from "../../utils/UsersApi";
import UserCard from "../UserCard/UserCard";

function Users() {
  const [users, setUsers] = useState([]);
  const [usersRenderArr, setUsersRenderArr] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function searchUsers({ formValue }) {
    if (formValue === "") {
      setUsersRenderArr(users);
      return;
    }
    getMatchesFromApi(formValue);
  }

  function getMatchesFromApi(formValue) {
    UsersApi.getMatches({ query: formValue })
      .then((info) => {
        setUsersRenderArr(info);
      })
      .catch((err) => console.log(err));
  }

  function getInfo() {
    UsersApi.getInfo()
      .then((info) => {
        setUsers(info);
        setUsersRenderArr(info);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getInfo();
  }, []);

  function openPopup() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <div className="users">
      <SearchForm onSubmit={searchUsers} />
      <ul className="users__list">
        {usersRenderArr.map((user) => (
          <UserCard
            key={user.email}
            name={user.name}
            phone={user.phone}
            email={user.email}
            hire_date={user.hire_date}
            position_name={user.position_name}
            department={user.department}
            address={user.address}
            onClick={openPopup}
            onClose={closePopup}
            isPopupOpen={isPopupOpen}
          />
        ))}
      </ul>
    </div>
  );
}

export default Users;
