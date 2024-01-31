import React from 'react'
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item.id}`);
    }
    return (
        <div key={item.id} onClick={showDetail}>
            <Image className='img' src={item?.img} fluid />
            <div>{item?.title}</div>
            <div>₩ {item?.price}</div>
            <div className='color-div'>{item?.color.map((color) => (
                <div key={color} className={`color${color}`}></div>
            ))}</div>
            <div>{item?.choice === true ? "Concious Choice" : " "}</div>
            <div className='choice-select'>{item?.new === true ? "신제품" : " "}</div>
        </div>
    )
}

export default ProductCard