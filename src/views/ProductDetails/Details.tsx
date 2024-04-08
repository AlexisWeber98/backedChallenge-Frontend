import React from "react";
import { useStore } from "../../store/products";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

const ProductDetails: React.FC = () => {
  // ----------- store ---------//
  const { searchByPage } = useStore();
  const { deleteById } = useStore();
  const { findbyId } = useStore();
  const { productDetail } = useStore();

  // --------------------------//
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const numberId = Number(id);

  useEffect(() => {
    findbyId(numberId);
  }, []);

  const handleDelete = (id: number) => {
    navigate("/");
    deleteById(id);
  };

  const handlerBack = () => {
    searchByPage(1);
    navigate("/");
  };

  if (!productDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-3">
      <button onClick={handlerBack}>Back to Home</button>
      <h3>{productDetail.title}</h3>
      <p>{productDetail.description}</p>
      <p>{productDetail.category}</p>
      <h5>${productDetail.price}</h5>
      <div className="content-center flex justify-around mt-4 p-3">
        <img
          src={productDetail.img}
          alt={productDetail.title}
          className="rounded-[2rem]"
        />
      </div>
      <button onClick={() => handleDelete(numberId)}>
        Delete this product
      </button>
    </div>
  );
};

export default ProductDetails;
