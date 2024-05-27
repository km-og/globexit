import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSubmit }) {
  const [formValue, setFormValue] = useState({});

  function handleSearchChange(e) {
    setFormValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ formValue });
  }

  return (
    <form
      className="search__form"
      id="searchForm"
      name="searchForm"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="search__container">
        <input
          className="search__input"
          type="text"
          minLength="2"
          maxLength="200"
          name="inputSearch"
          onChange={handleSearchChange}
        />

        <button type="submit" className="search__btn cursor"></button>
      </div>
    </form>
  );
}

export default SearchForm;
