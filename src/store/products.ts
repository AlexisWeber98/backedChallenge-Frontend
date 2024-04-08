import { create } from "zustand";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  img: string;
  category: string;
}

interface ProductsStoreType {
  products: Product[];
  totalPages: number;
  currentPage: Number;
  productDetail:Product;
  addAllProducts: () => Promise<void>;
  deleteById: (id: number) => Promise<void>;
  postProduct: (newProduct: Product) => Promise<void>;
  searchByTitle: (title: string) => Promise<void>;
  findbyId: (id: number) => Promise<void>;
  searchByPage: (page: number) => Promise<void>;
}

export const useStore = create<ProductsStoreType>((set) => ({
  products: [],
  totalPages: 0,
  currentPage: 1,
  productDetail:{} as Product,
  addAllProducts: async () => {
    const response = await axios.get("/product");
    set({
      products: response.data.products,
      totalPages: response.data.totalPages,
    });
  },
  deleteById: async (id) => {
    await axios.delete(`product/${id}`);
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    }));
  },
  postProduct: async (newProduct) => {
    const response = await axios.post("/product", newProduct);
    set((state) => ({ products: [...state.products, response.data] }));
  },
  searchByTitle: async (title) => {
    if (title) {
      const response = await axios.get(`/product?title=${title}`);
      set({ products: response.data.products});
    } else {
      useStore.getState().addAllProducts();
    }
  },
  findbyId: async (id) => {  
    const {data} = await axios.get(`/product?id=${id}`);
    console.log("data",data);
    set({ productDetail: data});
    
  },
  searchByPage: async (page) => {
    const { data } = await axios.get(`/product?page=${page}`);
    set({ products: data.products });
  },
}));
