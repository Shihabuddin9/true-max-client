import React from 'react';
import FitureImg from '../FitureImg/FitureImg'
import Brands from '../Brands/Brands'
import BestDeals from '../BestDeals/BestDeals';
import ViewINventory from '../ViewInventory/ViewINventory';
import TrustedDealers from '../TrustedDealers/TrustedDealers';
import BodyTypes from '../BodyTypes/BodyTypes';
import BestServices from '../BestServices/BestServices';
import LatestCars from '../LatestCars/LatestCars';
import PageTitle from '../../hooks/PageTitle/PageTitle';

const Home = () => {
    return (
        <div className='mt-12' id="homePage">
            <PageTitle title="HOME"></PageTitle>
            <FitureImg></FitureImg>
            <Brands></Brands>
            <BestDeals></BestDeals>
            <ViewINventory></ViewINventory>
            <TrustedDealers></TrustedDealers>
            <BodyTypes></BodyTypes>
            <BestServices></BestServices>
            <LatestCars></LatestCars>
        </div>
    );
};

export default Home;