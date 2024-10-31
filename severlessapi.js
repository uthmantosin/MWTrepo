updateVisitCount();
function updateVisitCount() {
    fetch('https://wsbz975ihd.execute-api.us-east-1.amazonaws.com/MWT')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById('count').innerHTML = data;
        })
    }
