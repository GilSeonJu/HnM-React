import React from 'react'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';


const ProductAll = () => {
    const [productsList, setProductsList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProduct = async () => {
        let searchQuery = query.get('q') || '';
        console.log('searchQuery', searchQuery);
        /*
          1. json-server 데이터를 받기 위해 localhost:5000을 사용하고 있다.
            - let url = `http://localhost:5000/products?q=${searchQuery}`;
          2. 배포할때는 localhost를 사용할수 없으니까(다른사람이 내 웹사이트 못봄. 다른 사용자 컴퓨터는 localhost:5000이 돌고 있지 않으니까...)
          3. json-server를 배포하기 위해 https://my-json-server.typicode.com/ 이 사이트를 이용함.
            
          * 먼저 github에 repository 생성하기.
          * https://my-json-server.typicode.com/<your-username>/<your-repo>
          * 여기서 <your-username> 과 <your-repo>를 변경해줌
        */
        let url = `https://my-json-server.typicode.com/GilSeonJu/HnM-React/products?q=${searchQuery}`;
        let response = await fetch(url);
        console.log('response', response);
        let data = await response.json();
        console.log('data', data);
        setProductsList(data);
    };
    console.log('productsList',productsList);
    useEffect(() => {
        getProduct();
        console.log('query', query);
    }, [query]);

   /*  const searchUrl = () => {
        const searchValue = productsList?.filter((value) => value.title.includes(query));
        setGetValue(searchValue);
        console.log('filter값 확인: ', searchValue);
        console.log('useSearchParams 확인: ', query);
    } */
/* 
    useEffect(()=> {
        searchUrl();
    }, [productSearch])
 */


    /*  useEffect(() => {
       const test =  productsList.filter((item) => 

           item.title.includes(productSearch)
           )
           console.log('setSearchTest==> ', test);
           setSearchTest(test);
           
        }, [productSearch]);
         */
    return (
        <Container>
            <ul>
                <Row>
                    {productsList.map((item) => (
                        <Col xs={12} md={6} lg={3} key={item.id}><ProductCard item={item} /></Col>
                    ))}
                </Row>

            </ul>
        </Container>
    )
}

export default ProductAll