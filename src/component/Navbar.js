import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ authenticate, setAuthenticat, productSearch, setProductSearch }) => {
    const menuList = ['여성', '남성', '신생아/유아', '아동', '스포츠', '홈 & 라이프', 'Sale'];
    const navigate = useNavigate();
    
    const search = (e) => {
        if(e.key === "Enter") {
            //console.log('나 방금 Enter쳤어');
            // 입력한 검색어 읽어봐서 
            //console.log('검색어는? ', e.target.value);
            let value = e.target.value;
            // url 바꿔준다.
            navigate(`/?q=${value}`);
        }
    }
    const getToLogin = () => {
        console.log("로그아웃 클릭시 확인: ", authenticate);
        return authenticate === true ? (navigate('/login'), setAuthenticat(false)) : navigate('/login');

    /*  위에 삼항연산자랑 똑같음. 
        if (authenticate === true) {
            navigate('/login')
            setAuthenticat(false);
        }else{
            navigate('/login')
        }
    */
    }

    return (
        <div>
            <div className='login-button' onClick={getToLogin}>
                {/* Link 사용해도 됨. */}
                {/* <Link to={'/login'} className='link'> */}
                <FontAwesomeIcon icon={faUser} className='login-icon' />
                <div>{authenticate ? '로그아웃' : '로그인'}</div>
                {/* {authenticate === true ? <div>로그아웃</div> : <div>로그인</div>} */}
                {/* </Link> */}
            </div>
            <Link to={'/'} className='link'>
                <div className='logo'>
                    <img className='logo-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png' alt='H&MLog' />
                </div>
            </Link>
            <div className='category-div'>
                <ul>
                    {menuList.map((menu, index) => (
                        <li className='category' key={index}>{menu}</li>
                    ))}
                </ul>
                <div className='search-div'>
                    <label className='search-bar'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                        {/* <input className='search-input' placeholder='제품검색' onChange={onChange} value={productSearch} /> */}
                        <input className='search-input' placeholder='제품검색' onKeyDown={search} />
                    </label>
                </div>
            </div>

        </div>
    )
}

export default Navbar