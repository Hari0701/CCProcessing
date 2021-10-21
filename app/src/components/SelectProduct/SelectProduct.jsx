import React, { useState, useEffect } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import './SelectProduct.css';
import axios from 'axios';
import bg from '../../images/shopping.jpg';
import Login from "../Login/Login"
import { Link } from 'react-router-dom';

const SelectProduct = () => {
    const [item, setItem] = useState();
    let [allItems, setAllItems] = useState([]);
    const [products, setProducts] = useState([]);
    allItems = allItems.filter((allItem) => allItem);
    
    let amount = 0;
    let counts = {};

    allItems.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    products.map((product) => {
        return Object.keys(counts).find((item) => {
            if (product.title === item) {
                return (amount += product.price * counts[`${item}`]);
            }
        });
    });
    const handleAddItem = () => {
        setAllItems([...allItems, item]);
    };
    const handleDelete = (id) => {
        const newItems = [...allItems];
        newItems.splice(id, 1);
        setAllItems(newItems);
    };
 
    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get('http://localhost:3000/product/')
                .then((res) => {
                    setProducts(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchData();
    }, []);
    return (
        <div>
        <div className="addProductPage">
            <div>
                <img src={bg} alt="shopping cart" className="cart" />
            </div>
            <div className="allProducts">
                <div className="addItem">
                    <div className="select">
                        <select
                            className="selectInput"
                            placeholder="Add Item"
                            type="text"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                        >
                        <option>Select Product</option>
                            {products.map((product) => (
                                <option>{product.title}</option>
                            ))}
                        </select>
                    </div>

                    <BsFillPlusCircleFill onClick={() => handleAddItem()} className="addIcon" />
                </div>
                <div>
                    <h1 className="yourItems">Your Items</h1>
                    <div>
                        {allItems &&
                            allItems.map((item, id) => (
                                <div className="addedItem" key={id}>
                                    <p className="addedItemName">{item}</p>
                                    <AiOutlineDelete onClick={() => handleDelete(id)} className="deleteBtn" />
                                </div>
                            ))}
                    </div>
                    <h2 className="yourItems">Total Amount: ${amount}</h2>
                </div>
                <Link to ={{pathname: '/check',Amount: amount}}  > <button className = "doneBtn">Done</button></Link>
            </div>
        </div>
        </div>
    );
};
export default SelectProduct;
