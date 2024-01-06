// fetching data from my api

import { BaseUrl } from "./apiurl";

const getDataProduct = async () => {
    try {
      const response = await fetch(`${BaseUrl}/products`);
      const jsonData = await response.json();
      // console.log(jsonData);
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/q?query=${query}`);
      const data = response.data;

      if (data.message) {
        setResults([]);
        setErrorMessage(data.message);
      } else {
        setResults(data);
        setErrorMessage('');
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setResults([]);
      setErrorMessage('Error fetching search results.');
    }
  };
  
  export { getDataProduct, handleSearch };
  