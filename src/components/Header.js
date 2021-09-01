import styled from 'styled-components'

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0px;
  background: #192771c2;
  .text-logo {
    font-family: system-ui;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 2.0px;
  } 
`
function Header() {
    return (
        <HeaderStyle className='header'>
            <div className='text-logo'>Trello</div>
        </HeaderStyle>
    )
}

export default Header;