const apiKey = 'oiG9qra3Z8St3igJYgieaA8ACpNhKF7vsAfF8zwKBN7ZZEUB95eCOLEb8-gozwGa7LKUSbKqZZKlmWFh5Xnk5K2z6XgCaBKUQ2RrL3aH0ftUsWnjlB9JFK-fHXj2XnYx'; // Insert API key here.


const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }});
        }
      });
    }
  };
  
  export default Yelp;