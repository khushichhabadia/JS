const xhr = new XMLHttpRequest();
//This line creates a new instance of the XMLHttpRequest object, which is used to interact with servers and make HTTP requests.
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

xhr.onload = function() {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    }
};

xhr.send();
