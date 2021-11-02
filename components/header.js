import { useRouter } from 'next/router'
import styled from 'styled-components'

const Wrapper = styled.header`
    background-color: #ff6666;
    color: white;
    position: fixed;
    width: 100%;
    height: 10%;
    margin-top: -10px;
    margin-left: -10px;
`;
const Logo = styled.img`
    height: 80%;
    width: 20%;
    margin-top:1%;
    margin-left:1%;
`;

const HeaderText = styled.text`
    font-size: 500%;
    margin-left: 10%;
`;

export default function Header() {
    const router = useRouter()
    return (
        <Wrapper>
            <Logo src="logo.png"/>
            <HeaderText>Quizzalot!</HeaderText>
        </Wrapper>
    )
}