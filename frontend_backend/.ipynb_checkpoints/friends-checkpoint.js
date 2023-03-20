function getSeason(answer) {
    document.getElementById('season').classList.remove('hide');
    document.getElementById('label_season').classList.remove('hide');
    var season = document.getElementById("season");
    if (answer.id === "graph") {

        document.getElementById('episode').classList.add('hide');
        document.getElementById('label_episode').classList.add('hide');
        const option = document.createElement("option");
        option.text = "All";
        option.value = "All";
        season.appendChild(option)

    } else {
        document.getElementById('episode').classList.remove('hide');
        document.getElementById('label_episode').classList.remove('hide');
        var options = season.options;
        if (options.length === 11) {
            season.remove(10);
        }

    }
}

function getEpisode(answer) {
    const graph_input = document.getElementById("graph");
    if (graph_input.checked) {
        return;
    }
    const select = document.getElementById("episode");
    while (select.options.length > 0) {
        select.remove(0);
    }
    const params = new URLSearchParams();
    params.append("season", answer.value.toString());
    fetch("/get_episode?" + params.toString())
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Something went wrong");
            }
        })
        .then(function (data) {
            var list = data["episodes"];
            for (var i = 0; i < list.length; i++) {
                const option = document.createElement("option");
                option.text = list[i];
                option.value = list[i];
                select.appendChild(option);
            }
        })

}

function update_page(response) {
    document.getElementById('answerblock').innerHTML = response
}


function addDiv() {
    var form = document.getElementById("form");
    const formData = new FormData(form);
    const searchParams = new URLSearchParams(formData);
    const queryString = searchParams.toString();
    // alert(queryString);
    xmlHttpRqst = new XMLHttpRequest()
    xmlHttpRqst.onload = function (e) {
        update_page(xmlHttpRqst.response);
    }
    xmlHttpRqst.open("GET", "/pos?" + queryString);
    try {
        xmlHttpRqst.send(null);
    } catch (err) {
        // alert(err);
    }
}
