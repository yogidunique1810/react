import SingleProduct from './../components/SingleProduct'
import {useSelector,useDispatch}  from 'react-redux'
import { remove } from '../store/cartSlice';
const Cart = () => {
    const dispatch = useDispatch();
    const products=useSelector((state)=>state.cart)
    const updateCart=(product)=>{
        console.log(product);
        dispatch(remove(product))
    }
    const productDiv = products && products.map((singleProduct)=>(
        <SingleProduct singleProduct={singleProduct} key={singleProduct.id} updateCart={updateCart} action="remove"/>
        
    ))
    return(
        <>
            <div className="row">    
                {productDiv}
            </div>
            
        </>
    )
}

export default Cart