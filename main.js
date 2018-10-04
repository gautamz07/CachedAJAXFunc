cacheAjaxPromiseFuc = (url) => {

    return new Promise((resolve, reject) => {
        fetch(url)
            .then(resp => {
                if (resp && (resp['ok'] === true)) {
                    return resp.json()
                } else {
                    throw new Error('Unable to resolve Ajax request !')
                }
            })
            .then(json => resolve(json))
            .catch(error => reject(error))
    });

}

cacheAjaxPromiseFuc('https://jsonplaceholder.typicode.com/todos/1')
        .then( resp => console.log(resp) )
        .catch( error => console.log(error) )        
        

rapidFireFuction = () => {
    console.log('Just a function !');
}

/* 
cacheAjaxPromiseFuc('https://jsonplaceholder.typicode.com/todo11/1')
        .then( resp => console.log(resp) )
        .catch( error => console.log(error) )        
*/