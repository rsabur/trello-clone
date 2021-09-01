import { useState } from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

const LaneStyle = styled.div`
  margin-top: 5px;
  diplay: block;
  .lanes {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
    }
    .list {
        flex-basis: 24%;
        background: rgba(97, 103, 133, 1);
        min-height: 80px;
        box-sizing: content-box;
        margin: 5px 5px 10px;
        padding-bottom: 5px;
    }
    .title {
        position: relative;
        font-weight: bold;
        font-size: 18px;
        background: rgba(19, 19, 19, 0.3);
        padding: 10px 25px 10px 5px;
        display: flex;
        word-break: break-all;
    }
    .new-card-button {
        width: 95%;
        padding: 10px 20px;
        margin: 5px;
        border: none;
        outline: none;
        background: rgba(19, 19, 19, 0.2);
        color: rgb(255, 255, 255);
        cursor: pointer;
    }
`

function Lanes() {
    const [newCard, setNewCard] = useState(false)


    return (
        <LaneStyle >
            <div className='lanes'>
                <div className='list'>
                    <div className='title'>To-Do</div>
                    <Button className='new-card-button' >New Card</Button>  
                </div>
                <div className='list'>
                    <div className='title'>Working</div>
                    <Button className='new-card-button'>New Card</Button>
                </div>
                <div className='list'>
                    <div className='title'>Complete</div>
                    <Button className='new-card-button'>New Card</Button>
                </div>
            </div>
        </LaneStyle>
    )
}

export default Lanes;

{/* <textarea placeholder='Name of Task'></textarea>
                    <textarea placeholder='Description'></textarea>
                    <Button className='new-card-button'>Add</Button>
                    <Button className='cancel-button'>Cancel</Button> */}