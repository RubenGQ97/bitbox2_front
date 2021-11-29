import axios from "axios";


const getItemByCode = async (code) => {
    let url = 'http://localhost:8080/bitboxer2/articulos/code/'+code        
    const response = await axios.get(url)
        .catch(error =>{
            console.log(error)
        });
        if(response){
            return response.data[0];
        }
 
}




async function saveItem(json){
        const url = "http://localhost:8080/bitboxer2/articulos/save";
        const response = await axios.post(url,json)
            .catch(error => {
                console.log(error);
            });
            return response.status;

}


export default {getItemByCode,saveItem};