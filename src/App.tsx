import axios from "axios";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  images: string[];
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
   async function fetchProducts() {
    try{

      const response = await axios.get("https://dummyjson.com/products");

      setProducts(response.data.products);
    }catch(error){
      console.log(error)
    }
 }
 fetchProducts()
  }, []);
  return (
    <div className=" uppercase italic text-[12px] font-semibold text-green-600 p-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product,_id)=>(<div className=" ring flex flex-col items-center p-2  rounded hover:bg-green-600 hover:text-white " key={product.id}><h1>{_id + 1}. {product.title}</h1>
        <img className="w-40 h-40 " src={product.images[0]}/>
      </div>))}
    </div>
  );
}

export default App;
