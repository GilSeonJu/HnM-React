import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Col, Container, Dropdown, DropdownButton, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'


const ProductDetail = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState(null);
    const prod = async () => {
        let url = `https://my-json-server.typicode.com/GilSeonJu/HnM-React/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        console.log('data: ', data);
        setProductData(data);

    }
    useEffect(() => {
        prod();
    }, [])
    //console.log('productData: ',productData);
    /*
        const items = ["one", "two"];

        items.forEach(item => {
        console.log(item);
        });
    */
    return (
        <Container>
            <Row className='detailPage'>
                <Col md={6} className='imgDetail'>
                    <Image src={productData?.img} fluid />
                </Col>
                <Col md={6}>
                    <div className='detailInfo'>
                        <h2>{productData?.title}</h2>
                        <h3> ₩ {productData?.price}</h3>
                        <h3>{productData?.choice === true ? "Concious Choice" : " "}</h3>
                        <div className='color-div'>{productData?.color.map((color) => (
                            <h1 key={color} className={`color${color}`}>""</h1>
                        ))}</div>
                        <div>
                            <select className='choice-select'>
                                <option>사이즈선택</option>
                                {productData?.size.map((size) => (
                                    <option key={size} value={size}>{size}</option>
                                ))}
                            </select>
                        </div>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg">
                                추가
                            </Button>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
    )
}

export default ProductDetail