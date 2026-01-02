import { NavLink, Outlet } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaBars } from "react-icons/fa6";
import { useState, createContext, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import Berry from "../assets/berry.jpg";

// ============================================
// TypeScript Interfaces & Types
// ============================================

// Define Product structure
interface Product {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

// Define Cart Item (Product + quantity)
interface CartItem extends Product {
  quantity: number;
}

// Define what the Cart Context provides
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  totalItems: number;
  removeFromCart: (productName: string) => void;
  updateQuantity: (productName: string, change: number) => void;
  totalPrice: number;
}

// ============================================
// Create Context for Cart
// ============================================
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use cart context with type safety
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartContext.Provider");
  }
  return context;
};

// ============================================
// Main Layout Component
// ============================================
export default function Layout() {
  const [show, setShow] = useState<boolean>(false);

  // Cart state with TypeScript type
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCartSidebar, setShowCartSidebar] = useState<boolean>(false);

  // Function to add items to cart
  const addToCart = (product: Product): void => {
    const existingItem = cart.find((item) => item.name === product.name);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Calculate total items for badge
  const totalItems: number = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate total price
  const totalPrice: number = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Remove item from cart
  const removeFromCart = (productName: string): void => {
    setCart(cart.filter((item) => item.name !== productName));
  };

  // Update quantity
  const updateQuantity = (productName: string, change: number): void => {
    setCart(
      cart
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Checkout function
  const handleCheckout = (): void => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(
      `Order placed successfully!\nTotal items: ${totalItems}\nTotal: $${totalPrice.toFixed(
        2
      )}`
    );
    setCart([]);
    setShowCartSidebar(false);
  };

  // Link styling functions
  const linkClass = ({ isActive }: { isActive: boolean }): string =>
    `cursor-pointer underline transition-colors ${
      isActive ? "text-red-500 font-bold" : "text-gray-800 hover:text-red-400"
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }): string => {
    const base =
      "cursor-pointer transition-all duration-300 block px-6 py-3 rounded-xl text-xl font-black uppercase italic tracking-tighter mb-2 border-2";

    const active =
      "text-white bg-red-600 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1";

    const inactive =
      "text-gray-900 bg-white border-transparent hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(239,68,68,1)] hover:-translate-y-1";

    return `${base} ${isActive ? active : inactive}`;
  };

  // Cart context value
  const cartContextValue: CartContextType = {
    cart,
    addToCart,
    totalItems,
    removeFromCart,
    updateQuantity,
    totalPrice,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto shadow-md bg-yellow-100 relative">
          <nav
            className="
              flex items-center justify-between h-16 px-6
              bg-white
              bg-[linear-gradient(90deg,rgba(239,68,68,0.25)_50%,transparent_50%),linear-gradient(rgba(239,68,68,0.25)_50%,transparent_50%)]
              bg-[length:32px_32px]
              shadow-md
            "
          >
            <img
              src={Berry}
              alt="logo"
              className="w-15 h-15 rounded-full object-cover"
            />

            <ul className="hidden md:flex gap-20 text-2xl font-medium lg:gap-32">
              <li>
                <NavLink to="/" end className={linkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={linkClass}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/order" className={linkClass}>
                  Order
                </NavLink>
              </li>
              <li>
                <NavLink to="/opening" className={linkClass}>
                  Opening
                </NavLink>
              </li>
            </ul>

            <div className="flex gap-2">
              {/* Cart Icon with Badge */}
              <button
                className="p-2 text-2xl hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out relative"
                onClick={() => setShowCartSidebar(!showCartSidebar)}
                aria-label="Shopping cart"
              >
                <TiShoppingCart />
                {/* Badge showing cart count */}
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                className="p-2 md:hidden text-2xl hover:text-gray-500
                           transition-all duration-300 ease-in-out"
                onClick={() => setShow(!show)}
                aria-label="Toggle menu"
              >
                <span
                  className={`inline-block transform transition-all duration-300
                    ${show ? "rotate-90 opacity-100" : "rotate-0 opacity-100"}`}
                >
                  {show ? <AiOutlineClose /> : <FaBars />}
                </span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {show && (
            <div className="md:hidden flex justify-center flex-col items-center bg-yellow-100 shadow-md p-4 absolute z-50 right-10 top-16 w-48 rounded-lg">
              <ul className="flex flex-col gap-3 text-2xl font-medium w-full">
                <li>
                  <NavLink
                    to="/"
                    end
                    className={mobileLinkClass}
                    onClick={() => setShow(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={mobileLinkClass}
                    onClick={() => setShow(false)}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/order"
                    className={mobileLinkClass}
                    onClick={() => setShow(false)}
                  >
                    Order
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/opening"
                    className={mobileLinkClass}
                    onClick={() => setShow(false)}
                  >
                    Opening
                  </NavLink>
                </li>
              </ul>
            </div>
          )}

          {/* Cart Sidebar */}
          {showCartSidebar && (
            <div
              className="fixed inset-0 z-50"
              onClick={() => setShowCartSidebar(false)}
            >
              <div
                className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl p-6 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Shopping Cart</h2>
                  <button
                    onClick={() => setShowCartSidebar(false)}
                    className="text-gray-500 hover:text-gray-700 text-3xl"
                    aria-label="Close cart"
                  >
                    ×
                  </button>
                </div>

                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    Your cart is empty
                  </p>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg"
                        >
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold">{item.name}</h4>
                            <p className="text-blue-600 font-bold">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.name, -1)}
                              className="text-xl hover:text-red -500 cursor-pointer transition-all duration-300 ease-in-out "
                              aria-label="Decrease quantity"
                            >
                              <CiCircleMinus />
                            </button>
                            <span className="w-8 text-center font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.name, 1)}
                              className=" text-xl hover:text-green-500 cursor-pointer transition-all duration-300 ease-in-out "
                              aria-label="Increase quantity"
                            >
                              <CiCirclePlus />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.name)}
                              className="px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 ml-2 text-xl cursor-pointer transition-all duration-300 ease-in-out "
                              aria-label="Remove item"
                            >
                              <MdDelete />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4 mb-4">
                      <div className="flex justify-between text-lg font-semibold mb-2">
                        <span>Total Items:</span>
                        <span>{totalItems}</span>
                      </div>
                      <div className="flex justify-between text-xl font-bold text-blue-600">
                        <span>Total Price:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleCheckout}
                      className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-bold"
                    >
                      Checkout
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          {/* BODY */}
          <div className="w-full min-h-screen">
            <Outlet />
          </div>
        </div>

        {/* Footer */}
        <div>
          <div
            className="bg-[#fdfdfd] 
     bg-[linear-gradient(90deg,rgba(239,68,68,0.1)_50%,transparent_50%),linear-gradient(rgba(239,68,68,0.1)_50%,transparent_50%)]
     bg-[length:32px_32px] 
     border-t-2 border-red-500/20 shadow-inner
                font-bold grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto p-7 gap-6 pt-24 pb-24"
          >
            <div className="flex flex-col items-start">
              <h1 className="mb-4 text-xl font-black italic">OPEN HOURS</h1>
              <p>Feel free to reach out to us!</p>
              <p>Monday - Sunday</p>
              <p>8:00 AM - 10:00 PM</p>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="mb-4 text-xl font-black italic">FOLLOW US</h1>
              <p>Follow our news below</p>
              <div className="flex gap-2 mt-4">
                <a
                  href="https://www.facebook.com/share/1BnhvE2gcm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 cursor-pointer text-4xl bg-white rounded-2xl flex items-center justify-center"
                >
                  <FaFacebookSquare />
                </a>

                <a
                  href="https://www.instagram.com/blue_lalyy/?igsh=MWlxOXA4cTR1ZDQ5Zg%3D%3D&fbclid=IwY2xjawPEhspleHRuA2FlbQIxMABicmlkETFmbU9FNmY3N1FyQUl6NDhSc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvNRhaVrum1B1Ukt3GPfK_OwOcdVaWxJ6mFaM31xoT6WOnGrMSlS_r9KJ56Q_aem_XwnaLJtAT86dk6vjzO8Dbw#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 cursor-pointer text-4xl bg-white rounded-2xl flex items-center justify-center"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="mb-4 text-xl font-black italic">CONTACT US</h1>
              <p>Phone: 020 91355941</p>
              <p>Email: Berry@loveproject.com</p>
              <p>Address: 123 Main St, City</p>
            </div>
            <div className="flex flex-col items-start  ">
              <h1 className="mb-4 text-xl font-black italic">Best Service!</h1>
              <p className="font-normal text-sm leading-tight">
                "The atmosphere here is incredible and the staff is so friendly.
                I highly recommend them to everyone!"
              </p>
              <div className="mt-4 flex gap-1 text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-xs mt-1 opacity-80">- Xay Phunthavee</p>
            </div>
          </div>

          <div className="text-center p-4 bg-gray-200 text-gray-600 max-w-7xl mx-auto">
            &copy; 2025 Love Project. All rights reserved.
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}
