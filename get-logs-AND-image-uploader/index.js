document.getElementById('uploadForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.text();
      alert(result);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please try again.');
    }
  });

// this will use DOM manipulation to request a GET request to the AWS Server to get the logs
document.getElementById('getLogs').addEventListener('click', async function (event) {
    // event.preventDefault();
    console.log('clicked on Get Logs button, making a GET request now');
    try{
        const response = await fetch('/getLogs', {
            method: 'GET',
        });
        const result = await response.text();
        alert(result);
    }
    catch(error){
        console.error('Error getting logs:', error);
        alert('Error getting logs. Please try again.')
    }
  });

