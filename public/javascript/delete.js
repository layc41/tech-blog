const deletePostHandler = async function(event) {
    console.log("clicked", event)
    event.preventDefault();

    fetch("/api/post/" + postId.value, {
        method: "delete"
    })
    .then(function() {
        document.location.replace("/dashboard");
    })
    .catch(err => console.log(err))
}

document.addEventListener('#delete-btn', deletePostHandler)