import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
    const cheeses = useLoaderData();
    return (
        <div>
            <h2>Create a cheese</h2>
            <Form
                action="/create"
                method="post"
            >
                <input type="input" name="name" placeholder="cheese's name" />
                <input
                    type="text"
                    name="image"
                    placeholder="cheese's picture"
                />
                <input type="input" name="countryOfOrigin" placeholder="cheese's country of origin" />

                <input type="submit" value="create cheese" />
            </Form>

            <h2>People</h2>
            <div className='container'>
                 {cheeses.map((cheese) => (
                    <div className="card" key={cheese._id}>
                        <Link to={`/${cheese._id}`} className="cheese">
                            <h1>{cheese.name}</h1>
                        </Link>
                        <img src={cheese.image} alt={cheese.name} />
                        <h3>{cheese.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;