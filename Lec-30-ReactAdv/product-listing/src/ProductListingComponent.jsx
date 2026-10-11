import { useState } from "react";
import SearchBarComponent from "./SearchBarComponent";
import SearchListComponent from "./SearchListComponent";

function ProductListingComponent() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1> Product Lisitng Component</h1>
      <SearchBarComponent setSearch={setSearch} />
      <SearchListComponent search={search} />
    </div>
  );
}

export default ProductListingComponent;
