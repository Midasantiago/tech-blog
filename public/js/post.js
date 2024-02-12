const commentSubmitHandler = async (event) => {
    event.preventDefault();

    const postId = window.location.pathname.split('/').pop();
    const commentText = document.querySelector('#comment-text').value.trim();

    if (commentText) {
        try {
            const response = await fetch(`/api/comments/${postId}`, {
                method: 'POST',
                body: JSON.stringify({ comment_body: commentText }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                // If the comment is successfully added, you might want to reload the page or update the comments dynamically
                document.location.reload();
            } else {
                alert('Failed to add comment');
            }
        } catch (error) {
            console.error('Error adding comment:', error);
            alert('Something went wrong');
        }
    }
};

// Attach the commentSubmitHandler to the comment form
document
    .querySelector('.comment-form')
    .addEventListener('submit', commentSubmitHandler);
