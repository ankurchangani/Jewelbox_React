import { CartProvider, useCart } from "./components/AddToCart/AddTocart"; // Import the CartProvider and useCart
import ProductPage from './components/ProductPage/ProductPage';
import topLogo from './assets/top-logo/top-logo.jpg'
import { BiCartAdd } from "react-icons/bi";

function CartIcon() {
  const { cart } = useCart();
  return (
    <div className="relative">
      <i className="fas fa-shopping-cart text-2xl"></i>
      {cart.count > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cart.count} <BiCartAdd />
        </span>
      )}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <div className="flex justify-between items-center px-4 py-2 ">
        {/* Center the logo */}
        <div className="flex-1 flex justify-center">
          <img src={topLogo} alt="Logo" className="w-[265px] h-[40px]" />
        </div>

        {/* Cart Icon aligned to the right */}
        <div className="relative">
          <CartIcon />
        </div>
      </div>

      <ProductPage />
    </CartProvider>
  );
}

export default App;
