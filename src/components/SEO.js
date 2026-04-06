import React from "react";
import { Helmet } from "react-helmet-async";

const BASE_URL = "https://www.ahmdfdhilah.online";
const DEFAULT_IMAGE = `${BASE_URL}/profile.png`;
const AUTHOR = "Ahmad Fadillah";
const INSTAGRAM = "https://www.instagram.com/ahmdfdhilah/";
const LINKEDIN = "https://www.linkedin.com/in/ahmdfdhilah/";

function SEO({ title, description, path = "/", image, keywords }) {
  const fullTitle = title
    ? `${title} | Ahmdfdhilah`
    : "Ahmdfdhilah | Personal Portfolio";

  const metaDescription =
    description ||
    "Welcome to the official portfolio of Ahmad Fadillah. Explore my projects, skills, and professional journey.";

  const metaImage = image || DEFAULT_IMAGE;
  const url = `${BASE_URL}/#${path}`;
  const metaKeywords =
    keywords ||
    "Ahmdfdhilah, Ahmad Fadillah, Portfolio, React, Web Developer, Software Engineer, FastAPI, TypeScript";

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={AUTHOR} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content="Ahmdfdhilah Portfolio" />

      {/* Twitter Card */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />
      <meta property="twitter:creator" content="@ahmdfdhilah" />

      {/* Social Profile Links */}
      <link rel="me" href={INSTAGRAM} />
      <link rel="me" href={LINKEDIN} />
    </Helmet>
  );
}

export default SEO;
