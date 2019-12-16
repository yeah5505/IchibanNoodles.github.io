const submit = document.querySelector(".comment-submit");
const Delete = document.querySelector(".comment-delete");
const commentList = document.querySelector(".comments");
const commentInput = document.querySelector(".comment-input");

function template(data) {
    commentList.insertAdjacentHTML(
        "beforeend",
        `
  <div class="comment flex items-start justify-start">   
  <div class="flex-1">
        <h3 class="comment-author">${data.author}</h3>
        <p class="comment-body">${data.comment}</p>
      </div>
    </div>
  </div>`
    );
}

function appendComment(event) {
    const data = {
        comment: commentInput.value,
        author: "Customers"
    };

    event.preventDefault();
    // If the value is nothing just return
    if (commentInput.value.length < 1) return;

    template(data);

    // Reset textrea value
    commentInput.value = "";

    // Save the list to localStorage
    localStorage.setItem("commentListing", commentList.innerHTML);
}

submit.addEventListener("click", appendComment, false);

// Check for saved wishlist items
const saved = localStorage.getItem("commentListing");

// If there are any saved items, update our list
if (saved) {
    commentList.innerHTML = saved;
}