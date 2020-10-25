const deletePostHandler = async function(event) {
    event.preventDefault();

    fetch("/api/post/" + postId.value, {
        method: "delete",
        // headers: { "Content-Type": "application/json"}
    })
    .then(function() {
        document.location.replace("/dashboard");
    })
    .catch(err => console.log(err))
}

document.querySelector("#delete-btn").addEventListener("button", deletePostHandler)