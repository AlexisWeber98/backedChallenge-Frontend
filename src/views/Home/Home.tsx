import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useStore } from "../../store/products";
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";

export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  img: string;
  category: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  // --------------- GlobalStorage --------------- //

  const { products } = useStore();
  const { totalPages } = useStore();
  const { searchByPage } = useStore();

  // ---------------  LocalStates --------------- //

  const [currentLocalPage, setCurrentLocalPage] = useState(1);
  const [data, setData] = useState<Product[] | any>([]);
  // --------------- Functions -----------------//

  useEffect(() => {
    // addAllProducts();
    searchByPage(currentLocalPage);
  }, [currentLocalPage]);

  useEffect(() => {
    setData(products);
  }, [products]);

  // --------------- Handlers --------------- //

  const handlerAddProduct = () => {
    navigate("/new");
  };

  const handlerNextPage = () => {
    setCurrentLocalPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlerPrevPage = () => {
    setCurrentLocalPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <main className="">
      <SearchBar />
      <div className=" ">
        <div>
          {data && data.length > 0 ? (
            data.map((product: any) => (
              <Cards
                key={product._id}
                id={product._id}
                title={product.title}
                description={product.description}
                price={product.price}
                img={product.img}
                category={product.category}
              />
            ))
          ) : (
            <div>
              <h3>No Hay Coincidencias </h3>
            </div>
          )}

          <div className="flex justify-between items-center pagination p-4">
            <button
              className="p-3 m-2"
              onClick={handlerPrevPage}
              disabled={currentLocalPage <= 1}>
              {"<   "}prev
            </button>
            {currentLocalPage} / {totalPages}
            <button
              className="m-2"
              onClick={handlerNextPage}
              disabled={currentLocalPage >= totalPages}>
              next {"  >"}
            </button>
          </div>
        </div>{" "}
      </div>

      <button type="button" onClick={handlerAddProduct}>
        Add Product
      </button>
    </main>
  );
};

export default Home;
