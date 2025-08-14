import { client } from './sanity'

// Article/Blog Post queries
export const getArticles = async () => {
  const query = `*[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    publishedAt,
    readTime,
    "image": mainImage.asset->url,
    "imageAlt": mainImage.alt
  }`
  
  return await client.fetch(query)
}

export const getArticleBySlug = async (slug: string) => {
  const query = `*[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    body,
    publishedAt,
    readTime,
    "image": mainImage.asset->url,
    "imageAlt": mainImage.alt,
    author->{
      name,
      "image": image.asset->url
    }
  }`
  
  return await client.fetch(query, { slug })
}

// Team member queries
export const getTeamMembers = async () => {
  const query = `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    description,
    "image": image.asset->url,
    "imageAlt": image.alt,
    order
  }`
  
  return await client.fetch(query)
}

// Service queries
export const getServices = async () => {
  const query = `*[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    color,
    order
  }`
  
  return await client.fetch(query)
}

// Testimonial queries
export const getTestimonials = async () => {
  const query = `*[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    role,
    company,
    content,
    rating,
    "image": image.asset->url,
    "imageAlt": image.alt,
    order
  }`
  
  return await client.fetch(query)
}

// Portfolio/Case Study queries
export const getCaseStudies = async () => {
  const query = `*[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    publishedAt,
    client,
    category,
    duration,
    team,
    platforms,
    overview,
    features,
    results,
    "image": mainImage.asset->url,
    "imageAlt": mainImage.alt,
    colorPalette[]{
      color,
      name,
      psychology,
      usage
    },
    services[]->{
      title
    }
  }`
  
  return await client.fetch(query)
}

export const getCaseStudyBySlug = async (slug: string) => {
  const query = `*[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    body,
    publishedAt,
    client,
    category,
    duration,
    team,
    platforms,
    overview,
    problemStatement,
    challenge,
    solution,
    features,
    results,
    "image": mainImage.asset->url,
    "imageAlt": mainImage.alt,
    colorPalette[]{
      color,
      name,
      psychology,
      usage
    },
    userPersonas[]{
      name,
      age,
      goals,
      painPoints,
      behavior
    },
    designProcess[]{
      phase,
      duration,
      activities,
      insights
    },
    keyInsights,
    measurableImpact[]{
      metric,
      value,
      description,
      icon
    },
    lessonsLearned,
    nextSteps,
    clientFeedback{
      quote,
      author,
      role,
      details
    },
    services[]->{
      title
    }
  }`
  
  return await client.fetch(query, { slug })
}

// Site settings/configuration
export const getSiteSettings = async () => {
  const query = `*[_type == "siteSettings"][0] {
    title,
    description,
    "logo": logo.asset->url,
    contactEmail,
    contactPhone,
    socialLinks
  }`
  
  return await client.fetch(query)
} 