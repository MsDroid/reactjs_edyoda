import React from 'react';


const Card = ({index, name, age, salary}) => {
    return ( 
        <>
            <div class="card" style={{ width: '18rem' }} key={index}>
                <img src={'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{age}</p>
                    <a href="#" class="btn btn-primary">{salary}</a>
                </div>
            </div>
        </>
     );
}
 
export default Card;