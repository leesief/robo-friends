import React from 'react';

const Card = ({name,email,id}) => {
    /*if(true){
        throw new Error('No');
    }*/
    return (
        <div className='tc bg-light-green br3 dib pa3 ma2 grow shadow-5'>                  
                     
            <img alt='random robot' src= {`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    ); 
}   

export default Card;