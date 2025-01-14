// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <h1>Shopie</h1>
        <p>Your Ultimate Online Shopping Destination</p>
    </header>
    <nav>
        <a href="#">Home</a>
        <a href="#features">Features</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact Us</a>
    </nav>
    <section className="hero">
        <h2>Welcome to Shopie</h2>
        <p>Find the best deals on the latest products. Shop now and enjoy exclusive discounts!</p>
        <button>Start Shopping</button>
    </section>
    <section id="features" className="features">
        <div className="feature">
            <h3>Fast Shipping</h3>
            <p>Get your orders delivered quickly and safely.</p>
        </div>
        <div className="feature">
            <h3>Secure Payments</h3>
            <p>Your transactions are protected with the highest security standards.</p>
        </div>
        <div className="feature">
            <h3>24/7 Support</h3>
            <p>Our team is here to help you anytime, anywhere.</p>
        </div>
    </section>
    <footer>
        <p>&copy; 2025 Shopie. All rights reserved.</p>
    </footer>
    </div>
  );
}
