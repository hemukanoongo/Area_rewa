import React, { useEffect, useState } from 'react';
import axios from 'axios';


const MyComponent = () => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://170.64.134.68/server/token');
      const data = await response.json();
      console.log(data); // Handle the response data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();

  // ...
};
export default MyComponent;