// import { render, screen } from '@testing-library/react';
// import { describe, expect, it, vi } from 'vitest';
// import { Provider } from 'react-redux';
// import { store } from '@/app';
// import { MemoryRouter } from 'react-router-dom';
// import { ProductCard } from './ProductCard';

// const singleProduct = {
//     id: 1,
//     img: "/ducati-panigale-v4/ducati-panigale-v4-red.png",
//     title: "DUCATI PANIGALE V4",
//     price: 1250000,
//     categories: [0, 1],
//     rating: 10,
//     type: "Спортивный",
//     brand: "DUCATI",
//     variants: [
//       {
//         article: "17930",
//         color: "#f24444",
//         images: [
//           "/ducati-panigale-v4/ducati-panigale-v4-red.png",
//           "/ducati-panigale-v4/ducati-panigale-v4-red2.png",
//           "/ducati-panigale-v4/ducati-panigale-v4-red3.png"
//         ],
//         available: true,
//         stock: 3
//       }
//     ]
//   }

// describe('ProductCard component', () => {
//   it('renders ProductCard with props', () => {
//     render(<Provider store={store}><MemoryRouter><ProductCard product={singleProduct} /></MemoryRouter></Provider>);
//     expect(screen.getByText(/DUCATI PANIGALE V4/i)).toBeInTheDocument();
//     expect(screen.getByText(/1 250 000/)).toBeInTheDocument();
//     expect(screen.getByText('Артикул: 17930')).toBeInTheDocument();
//     expect(screen.getByText('В наличии: 3')).toBeInTheDocument();
//   });
// });