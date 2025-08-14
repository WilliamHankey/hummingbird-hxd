import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01', // Use today's date or your preferred version
  useCdn: true, // Set to false if you want to ensure fresh data
  token: import.meta.env.VITE_SANITY_TOKEN, // Only needed if you want to update content or bypass CDN
})

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Helper function to get image URL
export function getImageUrl(source: any, width?: number, height?: number) {
  if (!source) return null
  
  let image = urlFor(source)
  
  if (width) image = image.width(width)
  if (height) image = image.height(height)
  
  return image.url()
} 