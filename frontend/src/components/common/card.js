import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ product }) => {
  return (
    <div className="card">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt="Product" style={{ width: '100%', borderRadius: '5px', height: '194px' }} />
      </Link>
      <div className="container">
        <Link to={`/product/${product._id}`}>
          <p>{product.model}</p>
        </Link>
        <p style={{ display: 'flex', alignItems: 'center' }}>
          ₹{product.city} 
        </p>
        <button style={{ width: '100%', height: '40px', color: '#f75d34', border: '1px solid #f75d34', background: '#fff' }}>Check January Offers</button>
      </div>
    </div>
  );
};

export default Card;
