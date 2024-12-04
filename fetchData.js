import { API_KEY } from './config.js';

const API_URL = `https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=${API_KEY}`;


function fetchVolunteerOpportunities() {
  const opportunitiesSection = document.getElementById('opportunities');
  
  fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayOpportunities(data.projects.project);
    })
    .catch(error => {
      console.error("Error fetching opportunities:", error);
      const errorMessage = document.getElementById("error-message");
      errorMessage.innerText = "Could not load opportunities. Please try again later.";
    });
}

function displayOpportunities(opportunities) {
  const opportunitiesSection = document.getElementById('opportunities');
  opportunitiesSection.innerHTML = ""; // Clear loading message

  opportunities.forEach(opportunity => {
    const card = document.createElement('div');
    card.className = "opportunity-card";
    
    card.innerHTML = `
      <h3>${opportunity.title}</h3>
      <p>${opportunity.summary}</p>
      <a href="${opportunity.projectLink}" target="_blank">Learn More</a>
    `;
    
    opportunitiesSection.appendChild(card);
  });
}

// Initialize fetch on page load
document.addEventListener("DOMContentLoaded", fetchVolunteerOpportunities);
