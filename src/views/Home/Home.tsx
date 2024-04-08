import React, { useEffect, useState } from "react";
import { useStore } from "../../store/products";
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home: React.FC = () => {
  const { products } = useStore();
  const { totalPages } = useStore();
  const { searchByPage } = useStore();
  const [currentLocalPage, setCurrentLocalPage] = React.useState(1);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setData(products);
  }, [products]);
  
  useEffect(() => {
    // Llamar a searchByPage con el valor actualizado de currentLocalPage
    searchByPage(currentLocalPage);
  }, [currentLocalPage, searchByPage]);

  const handlerNextPage = () => {
    setCurrentLocalPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlerPrevPage = () => {
    setCurrentLocalPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="container">
      <SearchBar />
      <div>
        {data.map((product: any) => (
          <Cards
            key={product._id}
            id={product._id}
            title={product.title}
            description={product.description}
            price={product.price}
            img={product.img}
            category={product.category}
          />
        ))}
        <div>
          <button onClick={handlerPrevPage} disabled={currentLocalPage <= 1}>
            prev
          </button>
          {currentLocalPage} / {totalPages}
        </div>{" "}
        <button
          onClick={ handlerNextPage}
          disabled={currentLocalPage >= totalPages}>
          next
        </button>
      </div>

      <button type="button">Add Product</button>
    </div>
  );
};

export default Home;
