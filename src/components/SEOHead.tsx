import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
}

export function SEOHead({ title, description }: SEOHeadProps) {
  const location = useLocation();

  useEffect(() => {
    const defaultTitle = 'RS JADON  - Wholesale Pharmaceutical Distributor';
    const siteTitle = title ? `${title} | RS JADON ` : defaultTitle;
    document.title = siteTitle;

    const metaDescriptionStr = description || 
      'RS JADON  operates as an established, regulated pharmaceutical wholesale partner supplying hospital-grade formulations, critical care, plasma, and specialty therapeutics across India.';

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', metaDescriptionStr);

    // Open Graph
    const setMetaTag = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setTwitterTag = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMetaTag('og:title', siteTitle);
    setMetaTag('og:description', metaDescriptionStr);
    setMetaTag('og:type', 'website');
    setMetaTag('og:url', window.location.href);
    setMetaTag('og:site_name', 'RS JADON ');

    setTwitterTag('twitter:card', 'summary_large_image');
    setTwitterTag('twitter:title', siteTitle);
    setTwitterTag('twitter:description', metaDescriptionStr);

    // Schema.org Structured Data
    let schemaScript = document.querySelector('#structured-data-schema') as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'structured-data-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      'name': 'RS JADON ',
      'alternateName': 'RS JADON  Wholesale',
      'description': metaDescriptionStr,
      'url': window.location.origin,
      'telephone': '+918810660831',
      'email': 'sales@rspharmaindia.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Plot No. 389, Ground Floor, Vinay Nagar Sector 2A, Near Urwai Gate, Ahukhana Kalan, Lashkar',
        'addressLocality': 'Gwalior',
        'addressRegion': 'Madhya Pradesh',
        'postalCode': '474012',
        'addressCountry': 'IN'
      },
      'priceRange': '₹₹₹',
      'openingHours': 'Mo-Fr 08:00-18:00'
    });
  }, [title, description, location]);

  return null;
}
