import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const modalStyle = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '80%',
    maxHeight: '60%',
    margin: 'auto',
  },
  text: {
    fontSize: '16px',
    margin: '10px 0',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '24px',
  },
};

const getOrdersFromLocalStorage = () => {
  const ordersJSON = localStorage.getItem('orders');
  console.log(ordersJSON)
  return ordersJSON ? JSON.parse(ordersJSON) : [];
};

const MyOrdersModal = ({ isOpen, onRequestClose }) => {
  const orders = getOrdersFromLocalStorage();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Meus Pedidos"
      style={modalStyle}
    >
      <button
        onClick={onRequestClose}
        style={modalStyle.closeButton}
      >
        &#10006;
      </button>
      <h2>Meus Pedidos</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <p>ID do Pedido: {order.id}</p>
            <p>Total: R$ {order.total.toFixed(2)}</p>
            <p>Data: {new Date(order.date).toLocaleString()}</p>
            <ul>
              {order.items.map((item) => (
                <li key={item.id}>
                  {item.name} x {item.quantity}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default MyOrdersModal;
