import styled, {keyframes} from 'styled-components'
const loading = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`

module.exports = {
    Global : styled.div`
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;
    li {
      list-style: none;
    }`,
   Button : styled.button`
    color: #e6e6e6;
    background: #0a0a0a;
    border: none;
    font-size: 16px;
    border-radius: 3px;
    width: 200px;
    text-align: center;
    display: block;
    padding: 7px 0;
    margin: 10px auto;
    &:hover:enabled {
    background: linear-gradient(#1a1a1a,#0a0a0a);
    color: #fff;
    text-decoration: none;
    }
    &:active {
    transform: translateY(1px);
    }`,
    Header: styled.div`
    text-align: center;
    font-size: 30px;
    font-weight: 200;
    `,
    Column: styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.center ? 'center' : ''};
    width: ${props => props.width ? props.width : ''};
    input {
      border-radius: 3px;
      margin: 10px 0;
      padding: 5px;
      border: 1px solid rgba(0, 0, 0, 0.43);
      font-size: 16px;
      width: 80%;
    }
    label {
      text-align: center;
      font-size: 30px;
      font-weight: 200;
    }
    `,
    Avatar: styled.img`
    width: 150px;
    border-radius: 50%;
    `,
    Row: styled.div`
      display: flex;
      justify-content: space-around;
    `,
    Loader: styled.div`
    color: #d0021b;
    font-size: 11px;
    text-indent: -99999em;
    margin: 55px auto;
    position: relative;
    width: 10em;
    border-radius: 50%;
    height: 10em;
    box-shadow: inset 0 0 0 1em;
    transform: translateZ(0);

    &:before,
    &:after {
    border-radius: 50%;
    position: absolute;
    content: '';
    }
    &:before {
    width: 5.2em;
    height: 10.2em;
    background: white;
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    transform-origin: 5.2em 5.1em;
    animation: ${loading} 2s infinite ease 1.5s;
    }
    &:after {
    width: 5.2em;
    height: 10.2em;
    background: white;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 5.1em;
    transform-origin: 0px 5.1em;
    animation: ${loading} 2s infinite ease;
    }

    `
}
