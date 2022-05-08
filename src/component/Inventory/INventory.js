import React from 'react';
import PageTitle from '../../hooks/PageTitle/PageTitle';
import BestDeals from '../BestDeals/BestDeals';
import inventoryimg from '../images/home-img/re-221.png'

const INventory = () => {
    return (
        <div className='mt-20'>
            <PageTitle title="INVENTORY"></PageTitle>
            <div>
                <img src={inventoryimg} alt="" />
            </div>
            <BestDeals></BestDeals>
        </div>
    );
};

export default INventory;