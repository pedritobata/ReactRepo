const firebaseUrl = 'https://like-app-94bda.firebaseio.com/';

export const createMeetup = async (meetup) => {
    const response = await fetch(firebaseUrl + 'meetups.json', {
        method: 'POST',
        body: JSON.stringify(meetup),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let message = '';
    if(response.status === 200) {
        message = 'Meetup created succesfully'
    } else {
        message = 'Error: No se pudo crear el Meetup'
    }
    return message;
}

export const getAllMeetups = async () => {
    let result = {
        message: 'Error: No se pudo obtener meetups',
        meetups: []
    }
    const response = await fetch(firebaseUrl + 'meetups.json');
    const data = await response.json();
    const meetUpsData = [];
    if(response.status === 200){
        for(const key in data){
            meetUpsData.push({
                id: key,
                ...data[key]
            })
        }

        result = {
            message: 'Meetups cargados',
            meetups: meetUpsData
        }
    }
    console.log('GetAllMeetups', meetUpsData, result);
    return result;
}