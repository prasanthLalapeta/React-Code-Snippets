import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin: 30px auto;
  max-width: 500px;
  padding: 0px;
  text-align: center;
`;
export const Main = styled.div`
  border-radius: 8px;
  background: #69009E;
  box-shadow: 2px 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;
export const Header = styled.div`
  margin: 10px;
  padding-top: 20px;
`;
export const HeaderTxt = styled.h2`
  font-weight: 600;
  color: #FEFEFF;
`;
export const HeaderHlpTxt = styled.p`
  color: #AEA5CF;
  font-size: 16px;
  transform: rotate(-2deg);
`;
export const PasswordHelperBlock = styled.div`
  position: relative;
  max-width: 275px;
  margin: 65px auto;
  margin-top: 50px;
  margin-bottom: 80px;
`;
export const PasswordIcon = styled.div`
  position: absolute;
  width: 275px;
  left: -30px;
  height: 240px;
  margin: 20px auto;
  background: #00000024;
  top: -45px;
  border-radius: 55% 30% 30% 55%;
  svg {
    position: absolute;
    left: -5px;
    top: 25px;
    width: 100px;
    transform: rotate(-25deg);
  }
  svg path {
    fill:#FF008A;
  }
  svg circle {
    fill: #fff;
  }
`;
export const PasswordHelper = styled.ul`
  position: relative;
  transform: rotate(-2deg);
  margin: 10px 0px 0px 35px;
  text-align: left;
  background: #FEFEFF;
  border-radius: 6px;
  list-style: none;
  color: #1A0A4D;
  font-weight: 500;
  padding: 0px;
  &::before {
    content: '';
    position: absolute;
    left: 30px;
    height: 100%;
    width: 2px;
    background: #F80087;
  }
  &::after {
    content: '';
    position: absolute;
    left: 1px;
    top:1px;
    height: 98%;
    width: 4px;
    border-radius: 6px;
    background: #ccc;
  }
`;
export const HelperItem = styled.li`
  position: relative;
  padding: 5px 0px 5px 50px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  transition: all .4s cubic-bezier(1, 0, 0.58, 0.97);
  &:last-child {
    border-bottom: none;
  }
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 4px;
    top: calc(50% - 1.5px);
    right: 0;
    background: #00C79B;
    transition: inherit;
  }
  &.accepted {
    span {
      opacity: 0.2;
      animation: shake .2s ease;
    }
  }
  &.accepted::before {
    left: 48px;
    width: 70%;
  }
  @keyframes shake {
    0% {
      margin-left: 0px;
    }
    50% {
      margin-left: 10px;
    }
    100% {
      margin-left: 0px;
    }
  }
`;
export const PasswordCheck = styled.div`
  position: absolute;
  top: -10px;
  right: 15px;
  svg {
    width: 30px;
  }
  svg path {
    fill: #00C79B;
  }
  animation: iconOpenAnimation 0.4s ease-in;
  @keyframes iconOpenAnimation {
    0% {
      transform: scale(0);
    }
    25% {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(1);
    }
  }
`;
export const PasswordInput = styled.input`
  margin-bottom: 40px;
  background: #FEFEFF;
  max-width: 375px;
  color: #080317;
  font-size: 22px;
  font-weight: 500;
  padding: .825rem 0 .825rem 1rem;
  border-radius: 4px;
  &::placeholder {
    font-size: 18px;
  }
`;
export const PasswordSubmitButton = styled.button`
  width: 100%;
  padding: 17px;
  color: #563D4A;
  font-size: 18px;
  font-weight: bold;
  background: #FFC300;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  &.disabled {
    background: #ccc;
    span {
      opacity: 0.3;
    }
    &:hover {
      cursor: not-allowed;
    }
  }
  &:hover {
    cursor: pointer;
  }
`;
export const Footer = styled.div`
  margin: 60px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  span {
    text-align: center;
    padding: 10px 0px;
    font-size: 14px;
    font-weight: 200;
    color: #1A0A4D;
  }
`;
export const Author = styled.div`
  display: flex;
  text-align: left;
  justify-content: center;
  margin-bottom: 15px;
  .media {
    margin-right: 15px;
    img {
      width: 55px;
      height: 55px;
      border-radius: 100%;
    }
  }
  .mediaBody {
    h4 {
      color: #444;
      font-size: 16px;
    }
    span {
      margin-right: 7px;
      color: #999;
    }
    a {
      color: #3a8bbb;
      font-weight: 500;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;
