import React, { useState } from 'react';
import "./SelectProduct.css"
const SelectProduct = () => {
    const [item, setItem] = useState('');
    let [allItems, setAllItems] = useState([]);
    allItems = allItems.filter((allItem) => allItem);

    const handleAddItem = () => {
        setAllItems([...allItems, item]);
        setItem(null);
    };
    const handleDelete = (id) => {
        const newItems = [...allItems];
        newItems.splice(id, 1);
        setAllItems(newItems);
    };
    return (
        <div>
            <div>
                <input placeholder="Write a task" value={item} onChange={(e) => setItem(e.target.value)} />

                <button onClick={() => handleAddItem()}>+</button>
            </div>
            <div>
                <h1>Your Items</h1>
                <div>
                    {allItems &&
                        allItems.map((item, id) => (
                            <div>
                                {item}
                                <button onClick={() => handleDelete(id)}>delete</button>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
export default SelectProduct;
