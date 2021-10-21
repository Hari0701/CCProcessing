import React, { useState, useEffect } from 'react';
import './Product.css';
import axios from 'axios';
export default function Product() {
    const [products, setProducts] = useState([]);

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
        <div className="container">
            <main className="grid">
                {products.map((product) => (
                    <article key={product._id}>
                        <img src={product.imageUrl} alt={product.title} />
                        <div className="text">
                            <h2>{product.title}</h2>
                            <a href="#" className="btn btn-primary btn-block">
                               ${product.price}
                            </a>
                        </div>
                    </article>
                ))}
            </main>
        </div>
    );
}
