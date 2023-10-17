import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ShopHeader from './ShopHeader';
import Footer from './Footer';
import { productsData } from './productsData';
import ProductDetailsModal from './ProductDetailsModal';

const ShopContainer = styled.div`
  // Estilos
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 20px;
`;

const Product = styled.div`
  text-align: center;
  margin-bottom: 20px;
  img {
    max-width: 100%;
  }
  h3 {
    margin: 10px 0;
  }
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
`;


const DetailButton = styled.button`
  background-color: #007bff; /* Cor de fundo azul claro */
  color: #fff; /* Cor do texto branca */
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 5px; /* Margem superior de 5px */
`;

const Shop = () => {
    const [cart, setCart] = useState([]); // Estado do carrinho
    const [cartItemCount, setCartItemCount] = useState(0);
    const [isProductDetailsModalOpen, setIsProductDetailsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const products = productsData.products || [];

    const openProductDetailsModal = (product) => {
        setSelectedProduct(product);
        setIsProductDetailsModalOpen(true);
    };

    const closeProductDetailsModal = () => {
        setSelectedProduct(null);
        setIsProductDetailsModalOpen(false);
    };

    // Use useEffect para carregar o carrinho do localStorage quando o componente é montado
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const parsedCart = JSON.parse(savedCart);
            setCart(parsedCart);
            setCartItemCount(parsedCart.length);
        }
    }, []);

    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
            setCart([...cart]);
        } else {
            product.quantity = 1;
            setCart([...cart, product]);
        }

        setCartItemCount(cartItemCount + 1);
        localStorage.setItem('cart', JSON.stringify([...cart, product])); // Salvar o carrinho atualizado
    };

    const resetCart = () => {
        setCart([]); // Zera o carrinho
        setCartItemCount(0); // Reseta o contador
        localStorage.removeItem('cart'); // Remover o carrinho do Local Storage
    };

    return (
        <ShopContainer>
            <ShopHeader cartItemCount={cartItemCount} resetCart={resetCart} />
            <ProductList>
                {products.map((product) => (
                    <Product key={product.id}>
                        <img src={product.imageUrl} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Preço: R$ {product.price.toFixed(2)}</p>
                        <button
                            onClick={() => addToCart(product)}
                            style={{ backgroundColor: 'orange', color: '#fff' }}
                        >
                            Adicionar ao Carrinho
                        </button>
                        <DetailButton
                            onClick={() => openProductDetailsModal(product)}
                        >
                            Detalhes
                        </DetailButton>
                    </Product>
                ))}
            </ProductList>
            <Footer />

            {/* Renderize o modal de detalhes do produto quando isProductDetailsModalOpen for true */}
            <ProductDetailsModal
                isOpen={isProductDetailsModalOpen}
                onRequestClose={closeProductDetailsModal}
                product={selectedProduct}
            />
        </ShopContainer>
    );
};

export default Shop;