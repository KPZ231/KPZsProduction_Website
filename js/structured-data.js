// Structured data for improved SEO
document.addEventListener('DOMContentLoaded', function() {
  // This script helps with dynamic schema.org JSON-LD implementation
  
  // Add breadcrumb structured data
  const currentPath = window.location.pathname;
  const pageName = currentPath.split('/').pop();
  
  // Create breadcrumb structured data
  if (pageName !== 'index.html' && pageName !== '') {
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://kpz231.github.io/KPZsProduction_Website/"
        }
      ]
    };
    
    // Add current page to breadcrumb
    if (pageName === 'about.html') {
      breadcrumbData.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://kpz231.github.io/KPZsProduction_Website/about.html"
      });
    } else if (pageName === 'proj.html') {
      breadcrumbData.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Projects & Services",
        "item": "https://kpz231.github.io/KPZsProduction_Website/proj.html"
      });
    }
    
    // Add breadcrumb structured data to page
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);
  }
  
  // Track page view for analytics if needed
  // This can be expanded with actual analytics implementation
  console.log('Page viewed: ' + window.location.pathname);
}); 