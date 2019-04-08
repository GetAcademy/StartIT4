MakeButton();
function MakeButton() {
    document.getElementById("MyDiv").innerHTML = `<button onclick="WriteHTML()">get form</button>`
}

function WriteHTML() {
    document.getElementById("MyDiv").innerHTML += ` 
    <form id="testform" action="file" class="dropzone" onchange="MakeMYDay(event)">
        <div class="fallback">
            <input name="file" type="file" multiple />
        </div>
    </form>`
   new Dropzone("form#testform", { url: "/file/post" });
    console.log(myDropzone);
}