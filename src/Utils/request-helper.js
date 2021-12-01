import axios from "axios";


const getItemByCode = async (code) => {
    let url = 'http://localhost:8080/bitboxer2/articulos/code/' + code
    const response = await axios.get(url)
        .catch(error => {
            console.log(error)
        });
    if (response) {
        return response.data[0];
    }

}

export const getOtherSuplier = (callback,idArticulo) => {
    const url = "http://localhost:8080/bitboxer2/articulos/other/" + idArticulo;
    const response =  axios.get(url)
        .then(res => {
            callback(res.data);
        }).catch(error => {
            console.log(error);
        });
}



export const getAllSuplier = (callback) => {
    const url = "http://localhost:8080/bitboxer2/articulos/suplier";
    const response = axios.get(url)
        .then(res => {
            callback(res.data);
        }).catch(error => {
            console.log(error);
        });

}



export const getSuplier = (item) => {
    
    return item?.proveedor.map(function (proveedor) {
        if(proveedor.nombre){
            console.log("dddd",proveedor.nombre)
            return (<div>
                <a >{proveedor.nombre}</a><br />
            </div>)
        }else{
            console.log("cccc",proveedor)
            return (<div>
                <a >{proveedor}</a><br />
            </div>)
        }
        
        
    });
}





export async function saveItem(json) {
    const url = "http://localhost:8080/bitboxer2/articulos/save";
    const response = await axios.post(url, json)
        .catch(error => {
            console.log(error);
        });
    if (response) {
        console.log(response.status)
        return response.status;
    }


}


export async function getItem(code) {
    let url = 'http://localhost:8080/bitboxer2/articulos/code/' + code
    const response = await axios.get(url)
        .catch(error => {
            console.log(error)
        });
    if (response) {
        return response.data[0];
    }
}


export default { getItemByCode, saveItem };