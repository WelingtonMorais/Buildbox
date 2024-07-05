import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 96px; /* Altura ajustada em 4px */
  background-color: #2B2B2B;
  border-bottom: 1px solid #494949; /* Adiciona borda na parte inferior */
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; /* Garante que o header esteja acima dos demais conteúdos */
`;

export const HeaderContent = styled.div`
  text-align: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  color: #71BB00;
`;

export const Subtitle = styled.h2`
  font-size: 9px; /* Reduz a fonte do subtítulo */
  margin: 0;
  color: #ccc;
  font-family: 'Roboto', sans-serif;
`;

export const FeedText = styled.h2`
  font-size: 14px; /* Reduz a fonte do subtítulo */
  margin-bottom: 2px;
  color: #ccc;
  font-family: 'Roboto', sans-serif;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 20px;
  background-color: #343434;

  font-family: 'Roboto', sans-serif;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
`;

export const PostItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #494949;
  background-color: #313131;
  margin-bottom: 10px;
  border-radius: 5px;
  align-items: center;
  color: #888;
  font-family: 'Roboto', sans-serif;
  position: relative;
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 20px;
  color: #888;
`;

export const PostActions = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: #e06733;
  cursor: pointer;
  font-size: 24px;

  &:hover {
    color: #e06733;
  }
`;

export const DescartButton = styled.button`
  background: none;
  border: none;
  color: #5F5F5F;
  cursor: pointer;
  font-size: 16px;
  position: absolute; 
  top: 27%; 
  color: #e06733;
  right: 43%; 

  &:hover {
    text-decoration: underline;
  }
    @media screen and (max-width: 768px) {
    /* Exemplo de ajuste responsivo para telas menores */
    top: 27%;
    right: 26%;
    font-size: 14px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #494949;
  background-color: #494949;
  color:white;
  border-radius: 5px;
  width: 100%;
  font-family: 'Roboto', sans-serif;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  color:white;
  margin-bottom: 10px;
  border: 1px solid #494949;
  background-color: #494949;
  border-radius: 5px;
  width: 100%;
  height: 80px;
  font-family: 'Roboto', sans-serif;
`;

export const PhotoInput = styled.input`
  display: none;
`;

export const PhotoPreview = styled.label`
  width: 100px;
  height: 100px;
  border: 1px solid #888;
  border-radius: 40%;
  color: #888;
  background-color: #313131;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #888;
  }

  &:hover {
    background-color: #e0e0e0;
  }

  &:after {
    content: " ";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover:after {
    opacity: 1;
  }
`;

export const PostImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 40%;
  object-fit: cover;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #494949; 
  padding: 20px;
  background-color: #313131;
  margin-bottom: 40px;
  border-radius: 5px;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  &:last-of-type {
    justify-content: flex-end;
  }
`;

export const PostText = styled.p`
  margin: 0;
  color: #888;
`;

export const PostSender = styled.small`
  margin-top: 10px;
  font-weight: bold;
  color: #888;
`;

export const AddPostButton = styled.button<{ canPublish: boolean }>`
  padding: 10px 15px;
  margin-left: 10px;
  background-color: ${props => props.canPublish ? '#71BB00' : '#5F5F5F'};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.canPublish ? '#71BB00' : '#5F5F5F'};
  }
`;

export const LinkButton = styled.button`
  background: none;
  border: none;
  color: #5F5F5F;
  cursor: pointer;
  margin-right: 10px;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
  
`;
