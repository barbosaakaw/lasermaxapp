import React from 'react';
import styled from 'styled-components';


const generateFakeItems = (count) => {
    const fakeItems = [];
    for (let i = 1; i <= count; i++) {
        fakeItems.push({
            title: `Gravações - Card ${i}`,
            imageUrl: 'https://cdn.dooca.store/1286/posts/dreamstime-s-58978412.jpg?v=1632256363&webp=0',
        });
    }
    return fakeItems;
};

const ListContainer = styled.div`
  margin: 20px;
  font-family: 'Roboto', sans-serif;
`;

const ListTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ListItem = styled.li`
  font-size: 14px;
`;

const VerticalList = () => {
    const fakeItems = generateFakeItems(4);
  
    const listItemStyle = {
      listStyle: 'none', // Remove o marcador padrão do li
      backgroundColor: 'orange', // Cor de fundo laranja
      borderRadius: '20px 0 20px 0px', // Borda superior direita e inferior esquerda arredondadas
      display: 'flex',
      marginLeft: '-16px',
      marginRight: '10px',
      marginBottom: '10px',
    };
  
    const imageStyle = {
      width: '100px',
      height: 'auto',
      marginLeft: '10px',
      margin: 'auto 0',
      borderRadius: '20px 0 20px 0px', // Borda superior direita e inferior esquerda arredondadas
    };

    const titleStyle = {
        margin: 'auto 0',
        marginLeft: '20px',
    }
  
    return (
      <ul>
        {fakeItems.map((item, index) => (
          <li key={index} style={listItemStyle}>
            <img src={item.imageUrl} alt={item.title} style={imageStyle} />
            <p style={titleStyle}>{item.title}</p>
          </li>
        ))}
      </ul>
    );
  };
  
  export default VerticalList;