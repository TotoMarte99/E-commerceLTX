import { useState } from 'react';
import Button from 'react-bootstrap/Button';


function ItemCount(props){
    const [rate, setRate] = useState(0);

    const handleClickUp = () => {
    setRate(rate+1);

        if(rate === props.stock){
        setRate(props.stock);
        }
    }

    const handleClickDown = () => {
    setRate(rate-1);

        if(rate <= 0){
        setRate(0)
        }
    }

    const AddToCarts = () =>{
        alert(`You have added ${rate} products to your cart`);
    }

    const AddToCart = () =>{
        if(rate === 0){
            alert(`You can't add 0 products to your cart`);
        }else{
            AddToCarts();
        }
    }

    return(
        <>
            <Button onClick={handleClickUp} variant="warning">+</Button>
            {rate}
            <Button onClick={handleClickDown} variant="warning">-</Button>
            <button onClick={AddToCart} className="btn btn-warning m-2">Add to cart</button>
        </>
    )
}

export default ItemCount