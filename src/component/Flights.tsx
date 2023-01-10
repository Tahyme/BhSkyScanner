import axios from 'axios';



export const Flights = async (data: { date: string; isLoading: boolean; origin: string; destination: string; flights: any[]; error: boolean }) => {
    try {
        const response = await axios.get('https://skyscanner50.p.rapidapi.com/api/v1/searchFlights', {
            headers: {
                'X-RapidAPI-Key': "c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf",
                'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
            },
            params: {
                origin: data.origin,
                destination: data.destination,
                date: data.date,
                currency: 'EUR'
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
