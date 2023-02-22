function handleSearch() {
    
    fetch('http://localhost:8080/rest-api/aliens')
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}