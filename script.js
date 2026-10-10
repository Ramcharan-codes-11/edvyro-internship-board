
const internships = [
  {
    title: "Frontend Developer Intern",
    company: "TechNova",
    domain: "Full Stack Development",
    location: "Remote",
    description: "Build and improve website interfaces."
  },
  {
    title: "Web Development Intern",
    company: "CodeWorks",
    domain: "Full Stack Development",
    location: "Hyderabad",
    description: "Learn and work on web development projects."
  },
  {
    title: "Data Analyst Intern",
    company: "DataWorks",
    domain: "Data Analytics",
    location: "Hyderabad",
    description: "Explore data and prepare useful reports."
  },
  {
    title: "Junior Data Intern",
    company: "Insight Labs",
    domain: "Data Analytics",
    location: "Remote",
    description: "Assist with basic data analysis."
  },
  {
    title: "UI/UX Design Intern",
    company: "Creative Labs",
    domain: "UI/UX Design",
    location: "Remote",
    description: "Help design simple, user-friendly interfaces."
  },
  {
    title: "Product Design Intern",
    company: "Pixel Studio",
    domain: "UI/UX Design",
    location: "Hybrid",
    description: "Create and improve digital design ideas."
  }
];

/* Connect JavaScript to the HTML elements */
const searchInput = document.getElementById("search");
const domainSelect = document.getElementById("domain");
const clearButton = document.getElementById("clear-button");
console.log("clearButton",clearButton)
const internshipList = document.getElementById("internship-list");
const resultsMessage = document.getElementById("results-message");

/* Display the internship cards */
function displayInternships() {
  const keyword = searchInput.value.trim().toLowerCase();
  const selectedDomain = domainSelect.value;

  // Filter internships based on search and selected domain
  const filteredInternships = internships.filter(function(item) {
    const details = (
      item.title + " " +
      item.company + " " +
      item.domain + " " +
      item.location + " " +
      item.description
    ).toLowerCase();

    const matchesSearch = details.includes(keyword);

    const matchesDomain =
      selectedDomain === "all" ||
      item.domain === selectedDomain;

    return matchesSearch && matchesDomain;
  });

  // Remove the previous cards
  internshipList.replaceChildren();

  // Display the number of matching results
  resultsMessage.textContent =
    filteredInternships.length + " internship(s) found";

  // Show a message if there are no matches
  if (filteredInternships.length === 0) {
    resultsMessage.textContent =
      "No internships found. Try another search.";
    return;
  }

  // Create a card for every matching internship
  filteredInternships.forEach(function(item) {
    const card = document.createElement("article");
    card.className = "internship-card";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const company = document.createElement("p");
    company.className = "company";
    company.textContent = item.company;

    const domain = document.createElement("p");
    const domainTag = document.createElement("span");
    domainTag.className = "domain-tag";
    domainTag.textContent = item.domain;
    domain.appendChild(domainTag);

    const location = document.createElement("p");
    location.className = "card-details";
    location.textContent = "Location: " + item.location;

    const description = document.createElement("p");
    description.textContent = item.description;

    card.append(
      title,
      company,
      domain,
      location,
      description
    );

    internshipList.appendChild(card);
  });
}

/* Update results whenever the user types or changes domain */
searchInput.addEventListener("input", displayInternships);
domainSelect.addEventListener("change", displayInternships);

/* Reset both filters */
clearButton.addEventListener("click", function() {
  searchInput.value = "";
  domainSelect.value = "all";
  displayInternships();
});

/* Show all internships when the page first loads */
displayInternships();