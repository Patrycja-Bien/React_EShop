import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import CartTable from '../components/CartTable';

const OrderSummary: React.FC = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const orderData = {
      products: cart,
      total: cart.reduce(
        (sum, item) =>
          sum + item.quantity * (item.price.main + item.price.fractional / 100),
        0
      ),
    };
    localStorage.setItem('orderData', JSON.stringify(orderData));
    navigate('/orderconf');
  };

  return (
    <div>
      <h1>Podsumowanie zamówienia</h1>
      <CartTable cartItems={cart} editable={false} />
      <button onClick={handleSubmit}>Złóż Zamówienie</button>
    </div>
  );
};

export default OrderSummary;
