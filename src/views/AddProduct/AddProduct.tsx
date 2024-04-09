import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useStore } from "../../store/products";


const AddProduct: React.FC = () => {
  const navigate = useNavigate();

  const { postProduct } = useStore();
  const [dataform, setDataForm] = useState({
    title: "",
    description: "",
    price: 0,
    img: "",
  });

  const handlerChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>
  ) => {
    setDataForm({ ...dataform, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postProduct(dataform);
    setDataForm({
      title: "",
      description: "",
      price: 0,
      img: "",
    });

    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="justify-center flex-col m-2">
        <div className="justify-center">
          <label className="p-2 m-2" htmlFor="title">
            Title
          </label>
          <input
            className="p-2 m-2"
            type="text"
            name="title"
            id="title"
            onChange={handlerChange}
          />
        </div>
        <div className="justify-center">
          <label className="p-2 m-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="p-2 m-2"
            name="description"
            id="description"
            onChange={handlerChange}></textarea>
        </div>
        <div className="justify-center">
          <label className="p-2 m-2" htmlFor="price">
            Price
          </label>
          <input
            className="p-2 m-2"
            type="number"
            name="price"
            id="price"
            onChange={handlerChange}
            
          />
          <div className="justify-center">
            <label className="p-2 m-2" htmlFor="img">Image</label>
            <input  className="p-2 m-2" onChange={handlerChange} type="text" name="img" id="img" />
          </div>
        </div>
        <hr />

        <button className="justify-center p-3 m-3" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
