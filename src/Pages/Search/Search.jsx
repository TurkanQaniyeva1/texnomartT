import { useContext, useState, useEffect } from "react";
import "./search.css";
import { ProductContext } from "../../Context/ProductContext";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { GiScales } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";
import Footer from "../../Components/Footer/Footer";

const Search = () => {
  const { products } = useContext(ProductContext);
  const [sortedProducts, setSortedProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (value) => {
    setSearchQuery(value);

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    setSortedProducts(filteredProducts);
  };

  const handleSort = (sortType) => {
    let sorted = [...sortedProducts];

    if (sortType === "a-z") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "z-a") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortType === "ucuzdan-bahaliya") {
      sorted.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    } else if (sortType === "bahalidan-ucuza") {
      sorted.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
    }

    setSortedProducts(sorted);
  };

  const handleGoBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.product-name, .product-description');
    const titles = document.querySelectorAll('.title');

    const applyHoverEffects = (elements) => {
      elements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = text.split(' ').map(word => {
          return word.split('').map(letter => `<span>${letter}</span>`).join('');
        }).join(' ');

        element.querySelectorAll('span').forEach(span => {
          span.addEventListener('mouseover', () => {
            const randomColor = ['red', 'blue', 'green', 'yellow'][Math.floor(Math.random() * 4)];
            span.style.transform = 'translateX(3px) translateY(-5px)';
            span.style.color = randomColor;
          });

          span.addEventListener('mouseout', () => {
            span.style.transform = 'none';
            span.style.color = '';
          });
        });
      });
    };

    const applyTitleHoverEffect = (titles) => {
      titles.forEach(title => {
        title.addEventListener('mouseover', () => {
          const randomColor = ['red', 'blue', 'green', 'yellow'][Math.floor(Math.random() * 4)];
          title.style.color = randomColor;
        });

        title.addEventListener('mouseout', () => {
          title.style.transform = 'none';
          title.style.color = '';
        });
      });
    };

    applyHoverEffects(elements);
    applyTitleHoverEffect(titles);

    return () => {
      elements.forEach(element => {
        element.querySelectorAll('span').forEach(span => {
          span.removeEventListener('mouseover', null);
          span.removeEventListener('mouseout', null);
        });
      });

      titles.forEach(title => {
        title.removeEventListener('mouseover', null);
        title.removeEventListener('mouseout', null);
      });
    };
  }, []);

  return (
    <div className="search-page">
      <div className="inpRes">
      <div className="search-res">
<div className="search-container">
        <input
          type="text"
          value={searchQuery}
          placeholder="Search by name..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
</div>
<div className="search-res2">
<div className="sorting-buttons">
        <button onClick={() => handleSort("a-z")}>A-Z</button>
        <button onClick={() => handleSort("z-a")}>Z-A</button>
        <button onClick={() => handleSort("ucuzdan-bahaliya")}>
          Ucuzdan-bahaliya
        </button>
        <button onClick={() => handleSort("bahalidan-ucuza")}>
          Bahalidan-ucuza
        </button>
        <button className="go-back-btn" onClick={handleGoBack}>
          Go Home
        </button>
      </div>
</div>
      </div>
      <h1 className="title">Sizin Üçün Tapdıq</h1>
      <div className="product-grid">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <div className="product-actions">
              <button className="btn add-to-cart"><LuShoppingCart/></button>
              <button className="btn add-to-favorites"><FaRegHeart/></button>
              <button className="btn compare"><GiScales/></button>
            </div>
          </div>
        ))}
      </div>
      < Footer/>
    </div>
  );
};

export default Search;
