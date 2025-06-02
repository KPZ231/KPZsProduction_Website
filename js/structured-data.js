document.addEventListener('DOMContentLoaded', function() {
  // Create the JSON-LD script element
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  
  // Define the structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kacper Duda",
    "url": "https://kpz231.github.io/KPZsProduction_Website/",
    "image": "https://kpz231.github.io/KPZsProduction_Website/img/portfolio-preview.jpg",
    "jobTitle": "Software Engineer and Game Developer",
    "sameAs": [
      "https://github.com/KPZ231"
    ],
    "knowsAbout": [
      "Game Development",
      "Software Engineering",
      "Web Development",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "C#",
      "C++",
      "SQL",
      "Python"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://kpz231.github.io/KPZsProduction_Website/"
    }
  };
  
  // Set the script content
  script.textContent = JSON.stringify(structuredData);
  
  // Append to the document head
  document.head.appendChild(script);
}); 