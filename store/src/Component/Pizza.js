import { useState,useEffect  } from "react";
import axios from 'axios';

function Pizza(){

      const [Pizza , setPizza]=useState([ ]);

      useEffect(()=>{
         axios.get('http://localhost:5000/Pizza')
              .then(response => {
                  setPizza(response.data);
              })
              .catch(error => {
                  console.error('There was an error fetching the pizza data', error)
              })
      }, [])

      return (
            <div className="container mt-4">
                  <h2>Pizza list</h2>
                  <div className="row">
                        {Pizza.map(Pizza => (
                              <div className="col-md-4" key={Pizza.id}>
                              <div className="card mb-4">
                                    <img src={Pizza.image} height={300} className="card-img-top"/>
                                    <div className="card-body">
                                          <h5 className="card-title">{Pizza.name}</h5>
                                          <p className="card-text">Price: ${Pizza.price}</p>
                                          <p className="card-text">Ingerident: {Pizza.ingeridient}</p>
                                          <p className="card-text">Size: {Pizza.size}</p>
                                          <p className="card-text">Rating: {Pizza.rating}</p>
                                          <p className="card-text">Description: {Pizza.description}</p>
                                    </div>
                              </div>
                              </div>
                        ))}
                  </div>

            </div>
      )
}

export default Pizza;