import {arr} from '../../utils/array/array';
import './task.scss';

interface Array {
    product_title:string,
    img:string,
    description:string,
    price:string
}

interface ArrayProps{
    items:Array[]
}

export function CreaterProduct(){


    return( 
    <> 
    {
        arr.map((item) =>(
        <div className="mainDiv">
            <div className='productTitle'>Product title:{item.Product_title}</div>
            <img className='img' src={item.img} alt="productImage" />
            <div className='description'>Description:{item.Description}</div>
            <div className='price'>Price:{item.Price}</div>

        </div>
    ))} 
    </>
    )
}
