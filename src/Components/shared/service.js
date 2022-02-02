import fetchCallData from './fetchData';

export const getUsers =async () => {

    const myData = await fetchCallData('users');

    return myData.json();
};

export const addUsers =async (payload) => {
    const myData = await fetchCallData('users/add', {
        method: 'POST',
        body: JSON.stringify({username:payload})	
    })

    return myData.json();
};

export const userenteredValues =async (payload) => {
    console.log('>>in service payload',payload)

    const myData = await fetchCallData('usersData/add', {
        method: 'POST',
        body: JSON.stringify({
            Weight:payload.Weight,
            BMI:payload.BMI,
            Muscle:payload.Muscle,
            VC_Fat:payload.VC_Fat,
            Fat:payload.Fat,
            Age:payload.Age
        })	
    })

    return myData.json();
};