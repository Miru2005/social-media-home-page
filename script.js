document.addEventListener("DOMContentLoaded", function() {
    // Handle like button functionality
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', function() {
            let likeCounter = this.nextElementSibling;
            let likes = parseInt(likeCounter.textContent) || 0;
            likeCounter.textContent = likes + 1;
        });
    });

    // Handle comment button functionality
    document.querySelectorAll('.comment-button').forEach(button => {
        button.addEventListener('click', function() {
            let commentSection = this.parentElement.nextElementSibling;
            commentSection.style.display = commentSection.style.display === 'block' ? 'none' : 'block';
        });
    });
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu-items');
    menu.classList.toggle('visible');  // Toggle the 'visible' class
});


    // Add comment functionality
    document.querySelectorAll('.comment-input').forEach(input => {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter' && this.value.trim() !== '') {
                let commentText = this.value.trim();
                let commentsList = this.nextElementSibling;
                let newComment = document.createElement('p');
                newComment.textContent = commentText;
                commentsList.appendChild(newComment);
                this.value = ''; // Clear the input
            }
        });
    });
});
