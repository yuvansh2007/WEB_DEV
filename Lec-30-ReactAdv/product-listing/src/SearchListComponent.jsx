import "./searchList.css";
function ProductCardComponent({ productData }) {
  return (
    <div
      style={{
        width: "70vw",
        height: "300px",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
      }}>
      <img src={productData.image} style={{ width: "30%", height: "80%" }} />
      <div className="product-description">
        <h3>{productData.title}</h3>
        <p>{productData.description}</p>
      </div>
    </div>
  );
}

function SearchListComponent({ search }) {
  const productDataList = [
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "iPhone 15",
      description:
        "Apple smartphone with a powerful camera and smooth performance",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "iPhone 14",
      description:
        "Premium smartphone with excellent performance and camera quality",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "iPhone 13",
      description:
        "Reliable smartphone with fast performance and long battery life",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "iPhone 12",
      description: "5G smartphone with a bright OLED display",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "iPhone 11",
      description:
        "Popular smartphone with dual cameras and smooth iOS experience",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "Samsung Galaxy S24",
      description: "Flagship Android smartphone with advanced AI features",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "Samsung Galaxy S23",
      description: "Premium Android smartphone with excellent cameras",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "Samsung Galaxy A55",
      description:
        "Mid-range smartphone with a vibrant display and strong battery",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "Google Pixel 9",
      description:
        "Android smartphone with intelligent software and great photography",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "Google Pixel 8",
      description: "Smartphone featuring Google's AI-powered camera experience",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "OnePlus 12",
      description: "Fast Android smartphone with flagship-level performance",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "OnePlus 11",
      description: "Performance-focused smartphone with fast charging",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "Nothing Phone 2",
      description: "Stylish smartphone with a unique transparent design",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "Nothing Phone 2a",
      description: "Affordable smartphone with distinctive Glyph lighting",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "Xiaomi 14",
      description:
        "Flagship smartphone with powerful hardware and premium cameras",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "Redmi Note 13 Pro",
      description: "Value-focused smartphone with a high-resolution camera",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "Realme GT 6",
      description: "High-performance smartphone with fast charging support",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "Vivo V40",
      description: "Stylish smartphone focused on camera and display quality",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "Oppo Reno 12",
      description: "Slim smartphone with strong portrait photography features",
    },
    {
      image:
        "https://controlz.world/cdn/shop/files/1759570078573-Iphone15-Blue.jpg?crop=center&height=1200&v=1783349482&width=1200",
      title: "Motorola Edge 50",
      description: "Clean Android smartphone with a premium curved display",
    },
  ];

  const filteredProductList = productDataList.filter((productData) => {
    if (!search) return productData;
    else if (productData.title.toLowerCase().startsWith(search.toLowerCase()))
      return productData;
  });
  return (
    <div>
      {filteredProductList.map((productData) => {
        return <ProductCardComponent productData={productData} />;
      })}
    </div>
  );
}

export default SearchListComponent;
