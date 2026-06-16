import Script from "next/script";

interface SchemaMarkupProps {
  schemaData: Record<string, any>;
}

export default function SchemaMarkup({ schemaData }: SchemaMarkupProps) {
  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
