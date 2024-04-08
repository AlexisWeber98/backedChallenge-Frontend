import { useStore } from "../../store/products";
import { useNavigate } from "react-router-dom";

export interface CardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  img: string;
  category: string;
}

const Cards: React.FC<CardProps> = ({ id, title, price, img }) => {
  const { findbyId } = useStore();
  const navigate = useNavigate();
  const numberId = Number(id)

  const handleNavigate = (id: string) => {
    navigate(`/product/${id}`);
   
    findbyId(numberId);
  };

  return (
    <div
      onClick={() => handleNavigate(id)} 
      className="bg-gray-500 border border-white m-3">
      <p className="text-white">{title}</p>
      <h5 className="text-white">${price}</h5>
      <div className="content-center flex justify-around mt-4 p-2">
        <img src={img} alt={title} className="rounded-[2rem]" />
      </div>
    </div>
  );
};

export default Cards;
