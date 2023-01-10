import axios from 'axios';


export const Airports = async (searchText: string) => {
    try {
        const response = await axios.get('https://skyscanner50.p.rapidapi.com/api/v1/searchAirport', {
            headers: {
                'X-RapidAPI-Key': "c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf" ,
                'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
            },
            params: {
                query: searchText
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
