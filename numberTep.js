// script.js

// Function to fetch data from your API and update the link text
async function updateLinkText() {
    try {
        const response = await fetch('https://662a2fff67df268010a2eab5.mockapi.io/thongtinkhachhangshoppe');
        const data = await response.json();
        const fileLink = document.getElementById('fileLink');
        const recordCountSpan = document.getElementById('recordCount'); // Thêm dòng này

        // Check if data is an array
        if (Array.isArray(data)) {
            const numberOfRecords = data.length;
            fileLink.textContent = 'Tệp  ';
            recordCountSpan.textContent = numberOfRecords;
            fileLink.appendChild(recordCountSpan);
        } else {
            fileLink.textContent = 'Tệp';
        }
        
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    updateLinkText();
});
