import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = styled.div`
  height:85px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color:white;
`;

const LogoLink = styled.div`
  .logo__link {
    font-family: 'KoHo';
  font-weight: 700;
  font-size: 35px;
  text-align: center;
  color: #333333;
  text-decoration: none;
  }
`

const NavUl = styled.ul`
  display: flex;
  list-style: none;

  .navigation__link {
    margin-inline: 40px;

    font-family: 'Inter';
    font-style: normal;
    font-size: 21px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;

    color:#333333;
    text-decoration: none;
  }

`;

const LoginUl = styled.ul`
  display: flex;
  padding: 15px;
  list-style: none;

  .loginOut__link {
    margin-inline: 5px;
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;

    color: #333333;
    text-decoration: none;
  }
`;

function LogoFunc(){
  return (
    <LogoLink>
      <Link to="/" className='logo__link'>청약 알리미</Link>
    </LogoLink>
  )
}

const logoutToken = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('username');
  localStorage.removeItem('totalValue');
}

function Nav(){
  return <NavUl>
    <li><Link to="/introduction/0/a" className="navigation__link">청약 소개</Link></li>
    <li><Link to="/search" className="navigation__link">청약 검색</Link></li>
    <li><Link to="/calendar" className="navigation__link">청약 캘린더</Link></li>
    <li><Link to="/map" className="navigation__link">주택 실거래가</Link></li>
    <li><Link to="/recommend/calculator" className="navigation__link">청약 추천</Link></li>
  </NavUl>
}

function LoginOut(){
  if(localStorage.getItem('accessToken')!==null) {
    return <div>
      <LoginUl>
        <li><a href="/" className='loginOut__link' onClick={logoutToken}>LOG OUT</a></li>
        <li>/</li>
        <li><Link to={"/mypage/"+localStorage.getItem('username')} className='loginOut__link'>MY PAGE</Link></li>
      </LoginUl>
    </div>
  }

  return <div>
    <LoginUl>
      <li><Link to="/login" className='loginOut__link'>LOGIN</Link></li>
      <li>/</li>
      <li><Link to="/signup" className='loginOut__link'>SIGN UP</Link></li>
    </LoginUl>
  </div>
}

function MainHeader() {
  return (
    <>
    <Header>
    <LogoFunc></LogoFunc>
    <Nav></Nav>
    <LoginOut></LoginOut>
    </Header>
    </>
  );
}

export default MainHeader;