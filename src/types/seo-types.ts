export interface SEOProps {
    data: {
      html: string;
      json: {
        title: string;
        description: string;
        robots: {
          index: string;
          follow: string;
          "max-snippet": string;
          "max-image-preview": string;
          "max-video-preview": string;
        };
        canonical: string;
        og_locale: string;
        og_type: string;
        og_title: string;
        og_description: string;
        og_url: string;
        og_site_name: string;
        article_publisher: string;
        article_modified_time: string;
        twitter_card: string;
        twitter_misc: {
          [key: string]: string;
        };
        schema: {
          "@context": string;
          "@graph": Array<{
            "@type": string;
            "@id"?: string;
            url?: string;
            name?: string;
            isPartOf?: {
              "@id": string;
            };
            datePublished?: string;
            dateModified?: string;
            description?: string;
            breadcrumb?: {
              "@id": string;
            };
            inLanguage?: string;
            potentialAction?: Array<{
              "@type": string;
              target: string[];
            }>;
          }>;
        };
      };
      status: number;
    };
  }