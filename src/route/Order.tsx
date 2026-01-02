import { useState } from "react";
import { useCart } from "./Layout"; // ← IMPORTANT: Import useCart from Layout!

// ============================================
// TypeScript Interfaces & Types
// ============================================

// Define the structure of a Product
interface Product {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

// Props for BoxOrder component
interface BoxOrderProps {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  onAdd: () => void;
}

// Props for BoxList component
interface BoxListProps {
  onAddToCart: (product: Product) => void;
  cartCount: number;
}

// ============================================
// Main Order Component
// ============================================
export default function Order() {
  // ✅ GET cart functions from Layout (via Context)
  // Don't create a new cart here!
  const { addToCart, totalItems } = useCart();

  return (
    <div>
      <BoxList 
        onAddToCart={addToCart}    // ← Use Layout's addToCart
        cartCount={totalItems}      // ← Use Layout's totalItems
      />
    </div>
  );
}

// ============================================
// BoxList Component - Shows all products
// ============================================
function BoxList({ onAddToCart, }: BoxListProps) {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  // Handle when user clicks "Add to order"
  const handleAddToOrder = (product: Product): void => {
    // This will add to Layout's cart!
    onAddToCart(product);
    
    // Show success alert
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  // Products array
  const products: Product[] = [
 
 
{ 
    name: "Salted Caramel Toffee Cheesecake", 
    price: 9.50, 
    imageUrl: "https://i.pinimg.com/736x/67/62/a5/6762a58e0929c11cd8b195c792eada3f.jpg", 
    description: "Decadent New York-style cheesecake topped with a cascading salted caramel glaze and handmade toffee crunch." 
  },
  { 
    name: "Fresh Strawberry Glaze Cheesecake", 
    price: 9.50, 
    imageUrl: "https://i.pinimg.com/1200x/de/a0/1a/dea01a87b4e0389b06ea43a19e6af30c.jpg", 
    description: "Classic New York-style cheesecake layered with a vibrant strawberry coulis and topped with hand-picked, macerated fresh strawberries." 
  },
{ 
    name: "Berry Harvest Buttermilk Pancakes", 
    price: 12.50, 
    imageUrl: "https://i.pinimg.com/1200x/46/71/ed/4671edb2dcc08e47761236613072b09e.jpg", 
    description: "A fluffy triple-stack of golden buttermilk pancakes topped with a dollop of whipped cream, mountain-grown berries, and a generous drizzle of pure maple syrup." 
  },
  { 
    name: "Banana Hazelnut Crepes Delight", 
    price: 10.75, 
    imageUrl: "https://i.pinimg.com/1200x/7d/44/95/7d4495c4580062ebbd49a4e13ccf1e69.jpg", 
    description: "Delicate, golden-brown crepes layered with rich hazelnut chocolate spread and fresh banana slices, finished with a dusting of powdered sugar." 
  },
{ 
    name: "Rustic Heart-Shaped Sourdough", 
    price: 9.50, 
    imageUrl: "https://i.pinimg.com/736x/46/bb/e8/46bbe8f813cc3b0bde0521d624e1bf06.jpg", 
    description: "A specialty artisan loaf hand-scored into a heart shape, featuring a crisp floured crust and a light, tangy interior." 
  },
  { 
    "name": "Triple-Layer Strawberry Fudge Cake", 
    "price": 12.00, 
    "imageUrl": "https://i.pinimg.com/736x/d4/b3/34/d4b334ebba7d60699317bb6abd873833.jpg", 
    "description": "A decadent multi-layered chocolate cake featuring rich cocoa frosting, a luscious dark chocolate pour, and a crown of fresh whole strawberries." 
  },
{ 
    "name": "Classic Tiramisu Square Cake", 
    "price": 8.75, 
    "imageUrl": "https://i.pinimg.com/736x/ac/65/db/ac65db648783045069e34d1b14f13d5b.jpg", 
    "description": "Traditional Italian layers of espresso-soaked ladyfingers and light mascarpone cream, finished with a generous dusting of cocoa." 
  },
  { 
    "name": "Blueberry Glaze Cheesecake", 
    "price": 9.25, 
    "imageUrl": "https://i.pinimg.com/736x/04/67/1b/04671b9c29bf7e0440bd38280dbdd26f.jpg", 
    "description": "A velvety cheesecake slice on a golden graham crust, smothered in a vibrant blueberry reduction and topped with fresh, plump blueberries and mint." 
  },
  { 
    "name": "Pistachio Almond Croissant", 
    "price": 6.50, 
    "imageUrl": "https://i.pinimg.com/736x/3c/f5/e6/3cf5e64ad91f6ef4ddc327c9708485a5.jpg", 
    "description": "A golden, flaky butter croissant generously drizzled with a sweet pistachio cream glaze and topped with toasted almond slivers." 
  },
  { 
    "name": "     Gourmet Cinnamon cream Roll ", 
    "price": 5.75, 
    "imageUrl": "https://i.pinimg.com/736x/97/89/40/9789408e72421bca27f3292ba42cacaa.jpg", 
    "description": "A warm, soft-baked cinnamon swirl roll heavily frosted with a rich, melting cream cheese glaze." 
  },
  { 
    "name": "Chocolate Fudge Brownie Stack", 
    "price": 8.50, 
    "imageUrl": "https://i.pinimg.com/736x/b1/db/98/b1db98a8182316a568052e8cdb3e88d9.jpg", 
    "description": "Double-stacked, dense chocolate fudge brownies smothered in warm chocolate ganache and topped with fresh strawberry halves." 
  },
  { 
    "name": "Festive Chocolate Yule Log cake", 
    "price": 14.00, 
    "imageUrl": "https://i.pinimg.com/1200x/f3/76/b9/f376b909711de02a3470147bbde197de.jpg", 
    "description": "A delicate chocolate sponge roll filled with cocoa cream, coated in chocolate ganache 'bark' and finished with festive holly berries." 
  }
  
];
    
  return (
    <div className="flex flex-col items-center p-6 relative">
      {/* Success Alert */}
      {showAlert && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50 
                  flex items-center gap-3 px-8 py-4 
                  bg-white border-l-8 border-green-500 
                  text-[#3D2314] shadow-[0_20px_50px_rgba(0,0,0,0.15)] 
                  rounded-r-xl font-bold animate-bounce">
          ✓ Item added successfully!
        </div>
      )}

      <h1 className="text-3xl font-bold mb-4 text-center underline">MENU</h1>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {products.map((product, index) => (
          <BoxOrder
            key={index}
            imageUrl={product.imageUrl}
            name={product.name}
            description={product.description}
            price={product.price}
            onAdd={() => handleAddToOrder(product)}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================
// BoxOrder Component - Individual product card
// ============================================
function BoxOrder({ imageUrl, name, description, price, onAdd }: BoxOrderProps) {
  return (
    <div className="flex flex-row md:flex-col w-full p-4 mt-6 gap-4 bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 mx-auto object-cover rounded-full"
      />

      <div className="flex flex-col items-center text-center gap-2">
        <h1 className="text-xl font-bold text-[#3D2314]">{name}</h1>
        <p className="text-sm text-gray-500 italic h-10 line-clamp-2">
          {description}
        </p>
      </div>
      
      <div className="flex flex-col md:flex-col items-center text-center gap-2">
        <p className="font-black text-[#8D6E63] md:text-lg text-sm">
          Price: ${price.toFixed(2)}
        </p>

        <button
          onClick={onAdd}
          className="mt-2 px-4 py-4 text-white bg-[#3D2314] rounded-lg
                     hover:bg-[#52301c] active:scale-95 transition md:text-lg text-sm font-bold w-full"
        >
          Add<span className="hidden md:inline"> to order</span>
        </button>
      </div>
    </div>
  );
}