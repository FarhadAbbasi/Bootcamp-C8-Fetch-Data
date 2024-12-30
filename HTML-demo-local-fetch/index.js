

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log("response : ", response);
    const data = await response.json();
    console.log("data : ", data);
}
// getData();

async function postData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(
            { title: 'My Info',
                body: 'Data',
                userID: '4'
            }),
        headers: {
            'Content-type': 'application/json; charset= UTF-8'
        },
    });

    console.log("response = ", response);
    const data = await response.json();
    console.log("data : ", data);
}
postData();

//if there's a prob in fetching, We can verify the API or data/server using the POSTMAN service. Then we check the code.

// 4x Rest APIs. getAPI(for fetching the data), postAPI(for sending the data), put(), del().