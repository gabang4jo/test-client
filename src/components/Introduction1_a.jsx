import styled from 'styled-components'
import React from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'
import bbook_o from "../assets/bbook_o.png"
import bbook_x from "../assets/bbook_x.png"

const IntroductionContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;

    .mt_10 {
      margin-top: 10px;
    }
  
    .mt_30 {
      margin-top: 30px;
    }
  
    .color_gray {
      color: #555555;
    }
  
    .color_red {
      color: #bd413d;
    }
  
    .color_blue {
      color: #3964e5;
    }
  
    .color_black {
      color: #333333;
    }
`;

const IntroductionNameBox=styled.div`
  color: white;
  background-color: #3964E5;
  height: 200px;
  text-align: left;
  padding-left: 140px;
  line-height: 270px;
  font-weight: 600;
  font-size: 50px;
`;

const IntroductionBody = styled.div`
  color: #333333;

  .menu_name {
    margin-left: 80px;
    margin-top: 80px;
    font-size: 27px;
    font-weight: 550;
  }

  .menu_name_sub {
    margin-left: 80px;
    margin-top: 30px;
    font-size: 22px;
    font-weight: 550;
  }
`;

const IntroductionMenu=styled.div`
li { 
  display: table-cell; 
  position: relative; 
}

a {
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  
  display: inline-block;
  padding: 15px 20px;
  position: relative;
}

a:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #3964E5;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a:hover:after { 
  width: 100%; 
  left: 0; 
}  
`;

const IntroductionSubMenu = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  width: 100vw;
  margin-top: 40px;

  .navigation__link_now {
    height: 80px;
    width: 450px;

    text-decoration: none;
    font-size: 23px;
    color: #ffffff;
  }

  .navigation__link {
    height: 80px;
    width: 450px;

    text-decoration: none;
    font-size: 23px;
    color: #333333;
  }

  div:hover {
    height: 80px;
    border: none;
    background-color: #3964E5;
    color: #ffffff;
    transition: ease 0.4s;
  }
`;

const NavUl = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 40px;

  .navigation__link_now {
    margin-inline: 40px;

    font-family: 'Inter';
    font-style: normal;
    font-size: 21px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;

    color:#333333;
    text-decoration: none;
  }

  .navigation__link {
    margin-inline: 40px;

    font-family: 'Inter';
    font-style: normal;
    font-size: 21px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;

    color:#666666;
    text-decoration: none;
  }
`;

const IntroductionContent = styled.div`
  height: 500px;

  .content_name {
    margin-left: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 400;
  }

  .content_tip {
    margin-left: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 17px;
    font-weight: 500;
  }

  .content_box {
    border: solid 1px #c9c9c9;
    background-color: #f9f9f9;
    color: #0768c9;
    text-align: center;
    line-height: 30px;
    padding: 10px;
    height: 60px;
    width: 90vw;
    margin: 0 auto;
  }

  .first_content {
    border-top: 2px solid #3964E5;
    border-bottom: 1px solid #c9c9c9;
    margin: auto;
    padding: 60px 0;
    height: 300px;
    width: 90vw;

    ul {
      display:flex;
      list-style: none;

      li:first-child{
        border-left : none;
      }

      li{
        width: 50%;
        display: table-cell;
        text-align: center;
        border-left : 1px solid #c9c9c9;
      }
    }

    ul.bbook_kind > li.join_confirm b {
      background: #1964dc;
    }

    ul.bbook_kind > li b {
      font-size: 1rem;
      color: #ffffff;
      background: #db4f18;
      padding: 3px 5px;
      border-radius: 4px;
    }

    ul.bbook_kind > li.join_confirm h5 {
      color: #1964dc;
    }

    ul.bbook_kind > li.join_confirm span {
      color: #1964dc;
    }

    ul.bbook_kind > li h5 {
      font-size: 1.375rem;
      color: #888888;
      margin-top: 10px;
    }

    ul.bbook_kind > li span {
      font-size: 1rem;
      color: #db4f18;
    }

    ul.bbook_kind > li.join_confirm p {
      color: #333333;
    }

    ul.bbook_kind > li p {
      color: #888888;
      font-size: 1rem;
      font-weight: 550;
    }
  }
`;

const Bar = styled.hr`
  border:none;
  height:1px;
  background-color: #e6e6e6;
  width: 100%;
`;

const Box1 = styled.div`
  height: 80px;
  width: 100%;
  background-color: #3964E5;
  text-align: center;
  line-height: 80px;
`;

const Box2 = styled.div`
  height: 78px;
  width: 100%;
  background-color: #ffffff;

  border: 1px solid #e1e1e1;
  text-align: center;
  vertical-align: middle;
  line-height: 80px;
`;

function Nav(){
  return <NavUl>
    <li><Link to="/introduction/0/a" className="navigation__link">청약주택</Link></li>
    <li><Link to="/introduction/1/a" className="navigation__link_now">청약통장</Link></li>
    <li><Link to="/introduction/2/a" className="navigation__link">청약자격</Link></li>
    <li><Link to="/introduction/3/a" className="navigation__link">청약신청방법</Link></li>
  </NavUl>
}

function Introduction() {
    return (
      <IntroductionContainer>
        <MainHeader></MainHeader>
        <IntroductionNameBox>청약 소개</IntroductionNameBox>
        <IntroductionBody>
          <IntroductionMenu>
          <Nav></Nav>
          <Bar></Bar>
          </IntroductionMenu>
          <div className='menu_name'>■ 청약통장</div>
          <IntroductionSubMenu>
            <Link to="/introduction/1/a" className="navigation__link_now"><Box1>청약통장 종류</Box1></Link>
            <Link to="/introduction/1/b" className="navigation__link"><Box2>주택청약종합저축</Box2></Link>
            <Link to="/introduction/1/c" className="navigation__link"><Box2>청약저축</Box2></Link>
            <Link to="/introduction/1/d" className="navigation__link"><Box2>청약예금ㆍ청약부금</Box2></Link>
          </IntroductionSubMenu>
          <div className='menu_name_sub'>■ 청약통장 종류</div>
          <IntroductionContent>
            <div className='mt_30'></div>
            <div className='first_content'>
              <ul className='bbook_kind'>
                <li className="join_confirm">
                  <b>가입가능</b>
                  <h5>주택청약종합저축<br/>
                    <span>(농협, 신한, 우리, 하나, 기업,<br/>국민, 대구, 부산, 경남)</span>
                  </h5>
                  <img src={bbook_o} alt=""></img>
                  <p>국민주택과 민영주택을<br/> 공급받기 위한 청약통장</p>
                </li>
                <li>
                  <b>가입불가</b>
                  <h5>청약저축<br/>
                    <span>신규가입 중단<br/>(15년 9월 1일 부터)</span>
                  </h5>
                  <img src={bbook_x} alt=""></img>
                  <p>국민주택을 공급받기 위한<br/>청약통장</p>
                </li>
                <li>
                  <b>가입불가</b>
                  <h5>청약예금<br/>
                    <span>신규가입 중단<br/>(15년 9월 1일 부터)</span>
                  </h5>
                  <img src={bbook_x} alt=""></img>
                  <p>민영주택을 공급받기 위한<br/>청약통장</p>
                </li>
                <li>
                  <b>가입불가</b>
                  <h5>청약부금<br/>
                    <span>신규가입 중단<br/>(15년 9월 1일 부터)</span>
                  </h5>
                  <img src={bbook_x} alt=""></img>
                  <p>주거전용면적 85m² 이하의<br/>민영주택을 공급받기 위한<br/>청약통장</p>
                </li>
              </ul>
            </div>
          </IntroductionContent>
        </IntroductionBody>
      </IntroductionContainer>
    );
}
    
export default Introduction;