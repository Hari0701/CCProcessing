import React, { useState, useEffect } from 'react';
import './Product.css';
import axios from 'axios';
export default function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get('http://localhost:3000/products')
                .then((res) => {
                    setProducts(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchData();
    }, []);
console.log(products)
    return (
        <div className="container">
            <main className="grid">
                <article>
                    <img src="https://picsum.photos/600/400?image=1083" alt="Sample photo" />
                    <div className="text">
                        <h3>Seamlessly visualize quality</h3>
                        <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                        <a href="https://codepen.io/collection/XdWJOQ/" className="btn btn-primary btn-block">
                            Here's why
                        </a>
                    </div>
                </article>
                <article>
                    <img src="https://picsum.photos/600/400?image=1063" alt="Sample photo" />
                    <div className="text">
                        <h3>Completely Synergize</h3>
                        <p>
                            Dramatically engage seamlessly visualize quality intellectual capital without superior
                            collaboration and idea-sharing.
                        </p>
                        <a href="https://codepen.io/collection/XdWJOQ/" className="btn btn-primary btn-block">
                            Here's how
                        </a>
                    </div>
                </article>
                <article>
                    <img src="https://picsum.photos/600/400?image=1056" alt="Sample photo" />
                    <div className="text">
                        <h3>Dynamically Procrastinate</h3>
                        <p>Completely synergize resource taxing relationships via premier niche markets.</p>
                        <a href="https://codepen.io/collection/XdWJOQ/" className="btn btn-primary btn-block">
                            Read more
                        </a>
                    </div>
                </article>
                <article>
                    <img src="https://picsum.photos/600/400?image=1050" alt="Sample photo" />
                    <div className="text">
                        <h3>Best in className</h3>
                        <p>Imagine jumping into that boat, and just letting it sail wherever the wind takes you...</p>
                        <a href="https://codepen.io/collection/XdWJOQ/" className="btn btn-primary btn-block">
                            Just do it...
                        </a>
                    </div>
                </article>
                <article>
                    <img src="https://picsum.photos/600/400?image=1041" alt="Sample photo" />
                    <div className="text">
                        <h3>Dynamically innovate supply chains</h3>
                        <p>Holisticly predominate extensible testing procedures for reliable supply chains.</p>
                        <a href="https://codepen.io/collection/XdWJOQ/" className="btn btn-primary btn-block">
                            Here's why
                        </a>
                    </div>
                </article>
                <article>
                    <img src="https://picsum.photos/600/400?image=1015" alt="Sample photo" />
                    <div className="text">
                        <h3>Sanity check</h3>
                        <p>Objectively innovate empowered manufactured products whereas parallel platforms.</p>
                        <a href="https://codepen.io/collection/XdWJOQ/" className="btn btn-primary btn-block">
                            Stop here
                        </a>
                    </div>
                </article>
            </main>
        </div>
    );
}
