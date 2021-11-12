import styled from 'styled-components';

export const NotPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;

  h1 {
    color: #fff;
    font-size: 7rem;
  }

  span {
    color: #fff;
    font-size: 1.5rem;
  }
  a {
    margin-top: 3rem;
    text-decoration: none;
    color: #fff;
    background-color: #0071db;
    padding: 1rem;
    border-radius: 0.4rem;
    transition: 0.3s;

    &:hover {
      opacity: 0.5;
    }
  }
`;
