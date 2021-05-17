import { parsedFaqData } from "./data";

export const FAQJsonLD: React.VFC = () => {
  const mainEntity = parsedFaqData.map(([question, answer], i) => {
    const index = i + 1;
    return {
      "@type": "Question",
      name: question,
      url: `https://pastak.github.io/vaccines-kyoto-city-faq/#faq-${index}`,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    };
  });
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  });
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />;
};
