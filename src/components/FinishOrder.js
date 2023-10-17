import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const FinishOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  background-color: #fff;
  color: #333;
`;

const Header = styled.div`
  background-color: #ff9900;
  height: 60px;
`;

const Content = styled.div`
  flex: 1;
  text-align: center;
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px;
`;

const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Total = styled.div`
  font-weight: bold;
  margin-top: 20px;
`;

const PaymentButton = styled.button`
  background-color: #ff9900;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
`;

const ResetButton = styled.button`
  background-color: red !important;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
`;

const FinishOrder = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Carregar o carrinho do localStorage e calcular o preço total
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const parsedCart = JSON.parse(savedCart);
            setCart(parsedCart);

            const total = parsedCart.reduce((acc, item) => {
                return acc + item.price * item.quantity;
            }, 0);
            setTotalPrice(total);
        }
    }, []);

    // Função assíncrona para lidar com o pagamento
    const handlePayment = async () => {
        try {
            // Simule a lógica de pagamento assíncrona aqui

            // Aguarde algum tempo para simular o pagamento
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Após o pagamento bem-sucedido, você pode prosseguir com o restante do código
            const order = {
                id: Math.random().toString(20).substr(2, 9),
                total: totalPrice,
                items: cart,
                date: new Date().toISOString(),
            };

            const existingOrdersJSON = localStorage.getItem('orders');
            const existingOrders = existingOrdersJSON ? JSON.parse(existingOrdersJSON) : [];
            existingOrders.push(order);

            const ordersJSON = JSON.stringify(existingOrders);
            localStorage.setItem('orders', ordersJSON);

            localStorage.removeItem('cart');
            setIsModalOpen(true);
        } catch (error) {
            console.error('Erro no pagamento:', error);
            // Lógica de tratamento de erro aqui, se necessário
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const resetCart = () => {
        setCart([]); // Zera o carrinho
        setTotalPrice(0); // Zera o preço total
        localStorage.removeItem('cart'); // Remover o carrinho do Local Storage
    };

    return (
        <FinishOrderContainer>
            <Header />
            <Content>
                {!isModalOpen ? (
                    <div>
                        <h2>Resumo do Pedido</h2>
                        <ProductList>
                            {cart.map((product) => (
                                <ProductItem key={product.id}>
                                    <span>
                                        {product.name} x {product.quantity}
                                    </span>
                                    <span>R$ {product.price * product.quantity}</span>
                                </ProductItem>
                            ))}
                        </ProductList>
                        <Total>Total: R$ {totalPrice.toFixed(2)}</Total>
                        <PaymentButton onClick={handlePayment}>Efetuar Pagamento</PaymentButton>
                        <NavLink to="/shop">
                            <ResetButton onClick={resetCart}>Limpar Carrinho</ResetButton>
                        </NavLink>
                    </div>
                ) : (
                    <div>
                        <p>Compra bem-sucedida!</p>
                        <NavLink to="/">
                            <PaymentButton onClick={closeModal}>Finalizar</PaymentButton>
                        </NavLink>
                    </div>
                )}
            </Content>
            {/* ... restante do código */}
        </FinishOrderContainer>
    );
};

export default FinishOrder;
