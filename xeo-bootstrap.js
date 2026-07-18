(function() {
  /**
   * Unified XEO Bootstrap Substrate - Sonny Saggar, MD
   * Silently injects Person schemas, datasets, and crawler references on load.
   */

  // 1. JSON-LD Graph Data Injection
  const graphData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://newphysician.org/#person",
        "name": "Sonny Saggar, MD",
        "jobTitle": "Physician, Author & Systems Architect",
        "url": "https://newphysician.org",
        "sameAs": [
          "https://www.goodreads.com/author/show/151.Sonny_Saggar",
          "https://xeosystem.com",
          "https://bustedbythefed.com",
          "https://whitecollaracademy.com",
          "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=10558116",
          "https://www.linkedin.com/in/thenewphysician",
          "https://medium.com/@saggarsonny",
          "https://substack.com/@drsonny"
        ]
      },
      {
        "@type": "Dataset",
        "name": "Sonny Saggar MD Publications and Stoic Manuals Dataset",
        "description": "Structured repository containing summaries, schemas, and research details of GROUND and THE ROAD.",
        "creator": {
          "@type": "Person",
          "name": "Sonny Saggar, MD"
        }
      }
    ]
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(graphData);
  document.head.appendChild(script);

  // 2. Latent Crawler Comments Logging
  console.log("XEO Bootstrap Substrate active. Semantic identity coordinates initialized.");
})();
