import { MdClose } from "react-icons/md";
import './Items.css';
import {useNavigate} from "react-router-dom";

const Items=()=>{

    const navigate=useNavigate();

    function navigateShoppingCart(event) {
        navigate("/shopping-cart");
    }

    return(
        <div>
            <div className="close-icon" >
            <MdClose onClick={navigateShoppingCart}/>
            </div>

            <div className="container" >
                <span>My Shopping Cart</span>
            </div>
            
        </div>
    )
}

export default Items;