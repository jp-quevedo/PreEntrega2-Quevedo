import React from 'react';
import { useState, useEffect } from 'react';
import { getItem } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const [item , setItem] = useState([]);
    const { itemId } = useParams();

    async function requestItem(){
        const response = await getItem(itemId);
        setItem(response);
    }

    useEffect(() => {
        requestItem();
    }, [])

    return(
        <div>
            <ItemDetail {...item} />
        </div>
    )
}

export default ItemDetailContainer