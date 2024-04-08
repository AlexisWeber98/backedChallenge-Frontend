import React from "react";
import { useStore } from "../../store/products";

interface CardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  img: string;
  category: string;
}

const Cards: React.FC<CardProps> = ({
  id,
  title,
  description,
  price,
  category,
  img,
}) => {
  const { deleteById } = useStore();
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{category}</p>
      <h5>${price}</h5>
      <img src={img} alt={title} />
      <button
        onClick={() => {
          deleteById(id);
        }}>
        Delete this product
      </button>
    </div>
  );
};

export default Cards;
