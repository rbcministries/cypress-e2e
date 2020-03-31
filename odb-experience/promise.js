const data = getData();

let apiData;

// async/await
async getAPIData() {
    const data = await getData();

}


getAPIData()
    .then(response => {
        // do something
        apiData = response;
        console.log(apiData);

        callOtherFunction(apiData);
    })
    .then(response => {
        // do something
        apiData = response;
        console.log(apiData);

        callOtherFunction(apiData);
    })
    .then(response => {
        // do something
        apiData = response;
        console.log(apiData);

        callOtherFunction(apiData);
    })




getAPIData(function(data) {
    console.log(data);
});

function getAPIData(callback) {
    // does somethings

    callOtherFunction(apiData, callback);

}

function callOtherFunction(apiData, callback) {
    callback();
}
