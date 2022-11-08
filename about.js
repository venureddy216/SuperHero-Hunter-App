var resultId = localStorage.getItem('id');

fetch();
// getting all the data of the superhero
function fetch(){
    var xhrRequest = new XMLHttpRequest();

    var url = `https://gateway.marvel.com/v1/public/characters/${resultId}?apikey=2048812579069ed8fb253647be20bc7d&hash=0a53d469ac1311bdaa53344c1baa055c&ts=1`;
    xhrRequest.open('get',url,true);
    xhrRequest.send();
    xhrRequest.onload = function(){
        var response = JSON.parse(xhrRequest.response);
        console.log(response);
        document.getElementById('title').innerText = " " + response.data.results[0].name;
        var power = document.getElementById('power');
        var p = document.createElement('p');
        p.innerText = "Description : " + response.data.results[0].description;
        power.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Status : " + response.status;
        power.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Modified : " + response.data.results[0].modified;
        power.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Series Available : " + response.data.results[0].series.available;
        power.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Stories Available : " + response.data.results[0].stories.available;
        power.appendChild(p);
        var bio = document.getElementById("bio");
        var p = document.createElement('p');
        p.innerText = "Count : " + response.data.count; 
        bio.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Total : " + response.data.total;
        bio.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Limit : " + response.data.limit;
        bio.appendChild(p);
        var p = document.createElement('p');
        p.innerText = "Offset : " + response.data.offset;
        bio.appendChild(p);
        bio.appendChild(p);
        var p = document.createElement('p');
        p.innerText = p.innerText = "Code : " + response.code; 
        bio.appendChild(p);
    }
}