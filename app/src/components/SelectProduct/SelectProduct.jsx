import React, { useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import {AiOutlineDelete} from 'react-icons/ai'
import './SelectProduct.css';
import bg from '../../images/shopping.jpg';

const SelectProduct = () => {
    const [item, setItem] = useState();
    let [allItems, setAllItems] = useState([]);
    allItems = allItems.filter((allItem) => allItem);

    const handleAddItem = () => {
        setAllItems([...allItems, item]);
    };
    const handleDelete = (id) => {
        const newItems = [...allItems];
        newItems.splice(id, 1);
        setAllItems(newItems);
    };
    console.log(allItems);
    return (
        <div className="addProductPage">
            <div>
                <img src={bg} alt="shopping cart" className = "cart" />
            </div>
            <div className = "allProducts">
                <div className="addItem">
                    <div className="select">
                        <input
                            className="selectInput"
                            placeholder="Add Item"
                            type="text"
                            list="cars"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                        />
                        <datalist id="cars">
                            <option>Volvo</option>
                            <option>Saab</option>
                            <option>Mercedes</option>
                            <option>Audi</option>
                        </datalist>
                    </div>

                    <BsFillPlusCircleFill onClick={() => handleAddItem()} className="addIcon" />
                </div>
                <div>
                    <h1 className = "yourItems">Your Items</h1>
                    <div>
                        {allItems &&
                            allItems.map((item, id) => (
                                <div className = "addedItem" key={id}>
                                    <p className = "addedItemName">{item}</p>
                                    <AiOutlineDelete onClick={() => handleDelete(id)} className = "deleteBtn"/>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SelectProduct;
