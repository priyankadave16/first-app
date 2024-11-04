
// pages/carCatalogue.tsx
// import React, { useEffect, useState } from 'react';
import CarCard from '../../components/CarCard';
import { HomeProps } from '../../types';
import { fetchCars } from '../../utils';


const CarCatalogue = async ({ searchParams }: HomeProps) => {
  // const [cars, setCars] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState('');
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  
  // const [allCars, setAllCars] = useState([]); 
  // const isClicked = false
  // const fetchCarsDetail = async () => {
  //   const allCars = await fetchCars({
  //     manufacturer: searchParams.manufacturer || "",
  //     year: searchParams.year || 2022,
  //     fuel: searchParams.fuel || "",
  //     limit: searchParams.limit || 10,
  //     model: searchParams.model || "",
  //   });
  //   console.log(allCars.length)
    
  // }
  // const handleButtonClick = () => {
  //   // Throttle or debounce this function if needed
  //   const isClicked = true
  //   fetchCarsDetail();
  // };
  // const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;


  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
  //         method: 'GET',
  //         headers: {
  //           'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
  //           'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  //         },
  //       });

  //       if (!response.ok) {
  //         const errorDetails = await response.json();
  // console.error('Error details:', errorDetails); // Log the error details
  // throw new Error(`Error: ${errorDetails.message}`);
  //       }

  //       const data = await response.json();
  //       console.log(data); // Log the data to see its structure
  //       setCars(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCars();
  // }, []);
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
      {/* You can add more content here */}
      {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            {/* <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            /> */}
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
    </div>
  );
};

export default CarCatalogue;

