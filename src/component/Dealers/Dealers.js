import React from 'react';
import PageTitle from '../../hooks/PageTitle/PageTitle';
import TrustedDealers from '../TrustedDealers/TrustedDealers';

const Dealers = () => {
    return (
        <div className='md:my-28 my-14'>
            <PageTitle title="DEALERS"></PageTitle>
            <TrustedDealers></TrustedDealers>
        </div>
    );
};

export default Dealers;