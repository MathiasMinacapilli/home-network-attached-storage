
function handleSubmit(url) {
    const data = new FormData();
    const request = new XMLHttpRequest();
    request.responseType = "json";

    const progressWraper = document.querySelector('#progress_wrapper');
    progressWraper.classList.remove('d-none');

    const input = document.querySelector('#file-input');
    const file = input.files[0];
    const filename = file.name;
    const filesize = file.size;
    document.cookie = `filesize=${filesize}`;

    data.append("file", file);

    request.upload.addEventListener("progress", function (e) {
        // Get the loaded amount and total filesize (bytes)
        var loaded = e.loaded;
        var total = e.total

        // Calculate percent uploaded
        var percent_complete = (loaded / total) * 100;

        // Update the progress text and progress bar
        progress.setAttribute("style", `width: ${Math.floor(percent_complete)}%`);
        progress_status.innerText = `${Math.floor(percent_complete)}% uploaded`;
    })

    request.addEventListener("load", function (e) {
        if (request.status == 200) {
            alert(`Correctamente subido.`);
        }
        else {
            alert(`Error uploading file`);
        }
    });

    request.addEventListener("error", function (e) {
        alert(`Error uploading file`);
    });

    request.open("POST", url);
    request.send(data);
}

function hideProgressBar() {
    const progressWrapper = document.querySelector('#progress_wrapper');
    progressWrapper.classList.add("d-none");
}
