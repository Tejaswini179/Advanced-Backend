import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Product from './components/Product';
export default function App() {

  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pagesize, setPageSize] = useState(5);
  const [filter, setFilter] = useState({});

  useEffect(()=>{
    const fetchProducts = async()=>{
      // setLoading(true);
      const res = await axios.get(`http://localhost:5000/products?page=${page}&pagesize=${pagesize}`);
      setProducts(res.products);
      // setLoading(false)
    }
    fetchProducts()
  },[page])

  const handleSort = (key,val)=>{
    setFilter({key,val})
  }
  
  

  return (
    <div className="App">

<div style={{
          width: "100%",
          height: "100px",
          backgroundColor: "red", lineHeight: "100px",
          display: "flex",
          justifyContent: "space-between",
          
        }}>
         
          <SortButton handleSort={handleSort}/>

          <h3>page number:- {page}</h3>
        </div>


    {products.map((e)=>{
      <Product title={e.title}  />
    })}
      
    </div>
  )
}
