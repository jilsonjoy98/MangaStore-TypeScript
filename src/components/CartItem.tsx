import { useAppDispatch } from "../app/hooks"
import { decrease, increase, removeFromCart } from "../features/shopSlice"
import { Manga } from "../interfaces/Manga"
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa"


function CartItem({id, title, price, imgUrl, quantity}:Manga) {
    const dispatch =useAppDispatch()
  return (
    <div key={id} className="py-5">
        <img src={imgUrl} alt={title}  className="w-25"/>
        <h3 className="text-muted fs-4 my-4">{title}</h3>
        <h1 className="fs-2 my-2">{price}$</h1>
        <h1 className="fs-2 my-2">{quantity}</h1>
        <button className="btn btn-outline-danger me-2" onClick={()=>{
            if(quantity ===1){
                dispatch(removeFromCart(id))
                return
            }dispatch(decrease({id}))
        }}><FaMinus/></button>
        <button className="btn btn-outline-danger " onClick={()=>{
            dispatch(removeFromCart(id))
        }}><FaTrashAlt className="me-2"/>Remove</button>
        <button className="btn btn-outline-danger ms-2" onClick={()=>{
            dispatch(increase({id}))
        }}><FaPlus className="me-2"/></button>
    </div>
  )
}

export default CartItem