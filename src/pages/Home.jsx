import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import SearchBar from '../components/search/SearchBar';




function Home() {
    const [activeTab, setActiveTab] = useState('home');
    const [selectedSize, setSelectedSize] = useState('S');
    const [selectedPrice, setSelectedPrice] = useState(10);
    const [isActive, setIsActive] = useState(false);

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);

        if (e.target.value === 'S') {
            setSelectedPrice(10);
        } else if (e.target.value === 'M') {
            setSelectedPrice(15);
        } else if (e.target.value === 'L') {
            setSelectedPrice(20);
        }
    };

    const handleClick = () => {
        setIsActive(!isActive);
    };

    const [itemList, setItemList] = useState([
        'Shirt', 'Pants', 'Shoes', 'Hat', 'Watch'
    ]);

    const [filteredList, setFilteredList] = useState(itemList); 

    return (
        <div>
            <h1 className="home-title">Ecommerce UI App</h1>

            <SearchBar setFilterList={setFilteredList} />

            <div className='tab-navigation'>
                <button className='tab-button'>Home</button>
                <button className='tab-button'>Collections</button>
                <button className='tab-signin'>Sign in</button>
            </div>

            <div className="tab-content">
                {activeTab === 'home' && <div>Welcome to the Home Page</div>}
                {activeTab === 'overview' && <div>Here is the Overview content</div>}
                {activeTab === 'details' && (
                    <div className="product-page">
                        <div className="product-image-container">
                            <img src="image1.jpg" alt="Product Image" />
                            <img src="image2.jpg" alt="Product Image" />
                        </div>
                        <div className="product-details">
                            <h1>Product Name</h1>
                            <p>Price: ${selectedPrice}</p>
                            <label htmlFor="size-select">Size:</label>
                            <select id="size-select" value={selectedSize} onChange={handleSizeChange}>
                                <option value="S">Small</option>
                                <option value="M">Medium</option>
                                <option value="L">Large</option>
                            </select>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
