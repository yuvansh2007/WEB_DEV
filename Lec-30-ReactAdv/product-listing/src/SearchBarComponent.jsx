import { useState } from "react";

function SearchBarComponent({ setSearch }) {
  const [userSearch, setUserSearch] = useState("");

  const onSubmitForm = (event) => {
    event.preventDefault();
    setSearch(userSearch);
    return;
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          placeholder="Search"
          onChange={(event) => {
            setUserSearch(event.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBarComponent;
