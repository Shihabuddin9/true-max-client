import React from 'react';
import PageTitle from '../../hooks/PageTitle/PageTitle';

const AboutUs = () => {
    return (
        <div className='py-28 md:w-3/5 w-10/12 mx-auto'>
            <PageTitle title="BLOGS"></PageTitle>
            <div>
                <h1 className='text-2xl font-medium'>#Difference between javascript and nodejs</h1>
                <div className='mt-2 mb-4'>
                    <h1 className='text-xl underline text-green-700 font-medium mb-2'>NODEJS</h1>
                    <p className=' font-serif'>NodeJS is an open-source Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs comes with a lot of modules and is mostly used in web development.We can run Javascript outside the browser with the help of NodeJS.Nodejs does not have capability to add HTML tags.V8 is the Javascript engine inside of node.js that parses and runs Javascript.Nodejs is written in C, C++ and Javascript.</p>
                </div>
                <div className='mt-2 mb-4'>
                    <h1 className='text-xl underline text-green-700 font-medium mb-2'>JAVASCRIPT</h1>
                    <p className=' font-serif'>Javascript is a Scripting language.It Javascript is the updated version of the ECMA script. Javascript is a high-level programming language.Javascript is an used for writing scripts on the website.Javascript can only be run in the browsers.Javascript is capable enough to add HTML and play with the DOM. Chrome’s V8 engine written in C++.</p>
                </div>
            </div>

            <div className='my-12'>
                <h1 className='text-2xl font-medium'>#When should you use nodejs and when should you use mongodb</h1>
                <p className=' font-serif mt-2'>MongoDB and NodeJS are two different technologies.Nodejs is a Javascript engine that you can write any application you want.It runs your Javascript code.NodeJS's responsibilty is especially to execute your application.MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database</p>
            </div>
            <div>
                <h1 className='text-2xl font-medium'>#Differences between sql and nosql databases.</h1>
                <div>
                    <h1 className='text-xl underline text-green-700 font-medium mb-2'>SQL</h1>
                    <ul className='font-serif'>
                        <li>1. Relational Database Management System</li>
                        <li>2. databases are not suited for hierarchical.</li>
                        <li>3. Vertically Scalable</li>
                        <li>4. databases are best suited for complex queries</li>
                    </ul>
                </div>
                <div className='mt-3'>
                    <h1 className='text-xl underline text-green-700 font-medium mb-2'>NO-SQL</h1>
                    <ul className='font-serif'>
                        <li>1. Non-Relational Database Management System</li>
                        <li>2. databases are uited for hierarchical.</li>
                        <li>3. Horizontally scalable</li>
                        <li>4. databases are not suited for complex queries</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;