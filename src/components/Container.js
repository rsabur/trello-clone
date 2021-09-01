// import { Button } from "semantic-ui-react";
import styled from "styled-components";
import Lanes from "./Lanes";

const ContainerStyle = styled.div`
    max-width: 1200px;
    padding: 0px 10px 10px;
    margin: 20px auto 0px;
    .button {
        display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(78, 78, 78, 0.13);
    margin-bottom: 10px;
    padding-bottom: 10px;
    }
`
function Container() {
    return (
        <ContainerStyle className='main-container'>
            {/* <Button className='button'>
                + Add New Lane
            </Button> */}
            <div className='second-container'>
                <Lanes />
            </div>
        </ContainerStyle>
    )
}

export default Container;