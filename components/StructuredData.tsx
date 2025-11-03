export default function StructuredData() {
  const services = [
    {
      type: "Web Development",
      name: "Jasa Pembuatan Website",
      description: "Website modern, responsif, dan SEO-friendly",
      url: "#services",
    },
    {
      type: "Mobile Application Development",
      name: "Jasa Pembuatan Aplikasi Mobile",
      description: "Aplikasi iOS & Android yang user-friendly",
      url: "#services",
    },
    {
      type: "UI/UX Design",
      name: "Jasa Desain UI/UX",
      description: "Desain interface yang menarik dan intuitif",
      url: "#services",
    },
    {
      type: "Graphic Design",
      name: "Jasa Desain Grafis",
      description: "Desain profesional untuk branding dan marketing",
      url: "#services",
    },
    {
      type: "Educational Support",
      name: "Bantuan Tugas Akademik",
      description: "Bantuan tugas, skripsi, dan penelitian",
      url: "#services",
    },
    {
      type: "Technology Consulting",
      name: "Konsultasi Teknologi",
      description: "Konsultasi dan solusi digital untuk bisnis",
      url: "#services",
    },
    {
      type: "Data Analysis",
      name: "Jasa Analisis Data",
      description: "Analisis data untuk pengambilan keputusan bisnis",
      url: "#services",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Codverse",
    url: "https://codverse.site",
    logo: "https://codverse.site/logo.png",
    description:
      "Digital Solutions Provider - Jasa Website, Mobile App, UI/UX Design, dan Academic Support, Data Science.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madura",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-800-000-0000",
      contactType: "Customer Service",
      areaServed: "ID",
      availableLanguage: ["Indonesian", "English"],
    },
    sameAs: ["https://instagram.com/codverse_id"],
  };

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Multiple Service Schemas */}
      {services.map((service, index) => {
        const serviceSchema = {
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: service.type,
          name: service.name,
          description: service.description,
          provider: {
            "@type": "Organization",
            name: "Codverse",
            url: "https://codverse.site",
          },
          areaServed: {
            "@type": "Country",
            name: "Indonesia",
          },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: `https://codverse.site${service.url}`,
          },
        };

        return (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(serviceSchema),
            }}
          />
        );
      })}
    </>
  );
}
