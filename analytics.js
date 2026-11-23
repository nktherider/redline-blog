// Vercel Web Analytics initialization
// This script initializes Vercel Analytics for page view tracking

(function() {
  // Initialize analytics queue
  if (window.va) return;
  
  window.va = function a(...params) {
    if (!window.vaq) window.vaq = [];
    window.vaq.push(params);
  };

  // Set environment mode
  window.vam = 'production';

  // Load the analytics script from Vercel
  // The actual script endpoint is provided by Vercel when analytics is enabled
  // For development, analytics are disabled
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('[Vercel Analytics] Running in development mode - analytics disabled');
    return;
  }

  // Vercel automatically injects the analytics script when deployed
  // This initialization ensures the queue is ready
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/insights/script.js';
  script.onerror = function() {
    console.log('[Vercel Analytics] Script not loaded - ensure analytics is enabled in Vercel dashboard');
  };
  document.head.appendChild(script);
})();
