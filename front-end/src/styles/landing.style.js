import styled from 'styled-components';

export const BgPage = styled.div`
    background-image: url("./Image/pixel.jpg");
    
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 1500px;
    
`;

export const BgImage = styled.div`
    margin-top: 50px;
    background-image: url("./Image/note.jpg");
    background-size: 100% 100%;
    width: 450px;
    height: 600px;
`;

export const Display = styled.form`
    display: flex;
    background-color: #f3f8fc;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 372px;
    height: 322px;
    right: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.9;
    
`;

export const MainButton = styled.button`    
    background-color: #ffea00;
    color: #000;
    border-radius: 5px;
    width: 120px;
    height: 40px;

    &:hover {
        background-color: #81c147;
        color: #fff;
    }
   
`;


