import {  useState } from 'react';

import Header from './components/Layout/Header';
import Medicine from './components/Medicine/Medicine';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import MedicineProvider from './store/MedicineProvider'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    < MedicineProvider>
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Medicine />
      </main>  
    </CartProvider>
    </MedicineProvider>
  );
}

export default App;
