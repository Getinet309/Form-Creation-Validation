// Add an event listener to run the fetchUserData function once the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', fetchUserData);

/**
 * Asynchronously fetches user data from a public API and displays it on the page.
 */
async function fetchUserData() {
    // 1. Define the API URL.
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 2. Select the HTML element where the data will be displayed.
    const dataContainer = document.getElementById('api-data');

    // 3. Use a try-catch block for fetching data and handling errors.
    try {
        // Fetch data from the API.
        const response = await fetch(apiUrl);
        
        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convert the response to JSON.
        const users = await response.json();

        // 4. Clear the "Loading..." message.
        dataContainer.innerHTML = '';

        // 5. Create and append the user list.
        const userList = document.createElement('ul');

        // Loop through each user in the array.
        users.forEach(user => {
            // Create a new list item.
            const listItem = document.createElement('li');
            // Set its text content to the user's name.
            listItem.textContent = user.name;
            // Append the list item to the user list.
            userList.appendChild(listItem);
        });

        // Append the complete list to the data container.
        dataContainer.appendChild(userList);

    } catch (error) {
        // 6. Handle any errors during the fetch process.
        console.error('Fetch error:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
        dataContainer.style.color = 'red';
    }
}
