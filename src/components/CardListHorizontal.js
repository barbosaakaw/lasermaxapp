import React, { useState } from 'react';
import styled from 'styled-components';
import { cardData } from './cardData'; // Importe os dados
import CardDetailsModal from './CardDetailsModal';

const CardListContainer = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  margin: 20px
`;

const Card = styled.a`
  text-decoration: none;
  border: 1px solid #ccc;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  margin-right: 10px;
  padding: 10px;
  min-width: 100px;
  min-max: 200px;
  background-color: #FFA500;
  color: #fff;
  font-size: 10px;
  display: block;
  height: 220px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardListHorizontal = ({ textString, selectedMenuItem }) => {
    const selectedCards = cardData[selectedMenuItem] || [];
    const [searchText, setSearchText] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
  
    const openModal = (card) => {
      setSelectedCard(card);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setSelectedCard(null);
      setIsModalOpen(false);
    };

    return (
<CardListContainer>
      {selectedCards
        .filter(
          (card) =>
            textString.trim() === '' ||
            card.title.toLowerCase().includes(textString.toLowerCase())
        )
        .map((card, index) => (
          <Card key={index} onClick={() => openModal(card)}>
            <CardImage src={card.imageSrc} alt="Card Image" />
            <h3>{card.title}</h3>
          </Card>
        ))}
      {selectedCard && ( // Verifique se selectedCard não é null
        <CardDetailsModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          cardData={selectedCard}
        />
      )}
    </CardListContainer>
    );
};

export default CardListHorizontal;