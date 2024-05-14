import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'Basir',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
      ],

    products: [
        {
            // _id:'1',
            name: 'Nike slim shirt',
            slug: 'nike-slim-shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 70,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.3,
            numReviews: 10,
            description: 'High quality products'
        },
        {
            // _id:'2',
            name: 'Addidas slim shirt',
            slug: 'addidas-slim-shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 120,
            countInStock: 0,
            brand: 'Addidas',
            rating: 4.5,
            numReviews: 9,
            description: 'High quality products'
        },
        {
            // _id:'3',
            name: 'Puma slim shirt',
            slug: 'puma-slim-shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 100,
            countInStock: 9,
            brand: 'Puma',
            rating: 4.2,
            numReviews: 10,
            description: 'High quality products'
        },
        {
            // _id:'4',
            name: 'HM slim pant',
            slug: 'hm-slim-pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 340,
            countInStock: 12,
            brand: 'HM',
            rating: 4.6,
            numReviews: 11,
            description: 'High quality products'
        }

    ],
};

export default data;