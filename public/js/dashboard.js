const newFormHandler = async (event) => {
    event.preventDefault();

    const post_title = document.querySelector('#post-title').value.trim();
    const post_body = document.querySelector('#post-body').value.trim();

    if (post_title && post_body) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ post_title, post_body }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post');
        }
    }
};

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);