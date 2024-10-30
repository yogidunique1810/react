import {useState,useEffect} from 'react'
import SingleProduct from '../components/SingleProduct';
import {useDispatch,useSelector} from 'react-redux'
import { add } from '../store/cartSlice';
import { getProductsData } from '../store/productSlice';
const Product = () =>{
    const dispatch = useDispatch();
    //const [products,setProducts] = useState([]);
    const {products,loading,error,status} = useSelector(state=>state.product)
    
    useEffect(()=>{
        /*fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))*/
        dispatch(getProductsData())
    },[])
    const updateCart=(product)=>{
        dispatch(add(product));
    }
    if(status==="pending"){
        return <h3>Data is Loadding .....</h3>
    }
    if(status==="rejeted"){
        return <h3>Data is NOt Correct .....</h3>
    }
    
    const productDiv = products && products.map((singleProduct)=>(
        <SingleProduct singleProduct={singleProduct} key={singleProduct.id} updateCart={updateCart} action="add"/>
        
    ))
    
    return(
        <>
            <div className="row">    
                {productDiv}
            </div>
            
        </>
    )
}

export default Product