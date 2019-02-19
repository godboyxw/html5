var url = 'https://example.com/profile';
var data = {
  username: 'example'
};

// The actual fetch request
fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
  .catch(error => {
    console.error('Error:', error)
  })