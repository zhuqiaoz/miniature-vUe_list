import axios from 'axios'



export const Listitem  = params =>{
    return axios.get('/api/Listitem',{
        params: params
    });
};

export const pl =params =>{
    return axios.post('/api/Listitems',params).then(res => res.data)
}