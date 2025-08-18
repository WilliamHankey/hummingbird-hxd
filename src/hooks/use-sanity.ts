import { useQuery } from '@tanstack/react-query'
import { 
  getArticles, 
  getArticleBySlug, 
  getTeamMembers, 
  getServices, 
  getTestimonials, 
  getCaseStudies, 
  getCaseStudyBySlug,
  getSiteSettings 
} from '@/lib/sanity-queries'

// Articles
export const useArticles = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export const useArticle = (slug: string) => {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: () => getArticleBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  })
}

// Team Members
export const useTeamMembers = () => {
  return useQuery({
    queryKey: ['teamMembers'],
    queryFn: getTeamMembers,
    staleTime: 10 * 60 * 1000, // 10 minutes
  })
}

// Services
export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: getServices,
    staleTime: 10 * 60 * 1000,
  })
}

// Testimonials
export const useTestimonials = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: getTestimonials,
    staleTime: 10 * 60 * 1000,
  })
}

// Case Studies
export const useCaseStudies = () => {
  return useQuery({
    queryKey: ['caseStudies'],
    queryFn: getCaseStudies,
    staleTime: 5 * 60 * 1000,
  })
}

export const useCaseStudy = (slug: string) => {
  return useQuery({
    queryKey: ['caseStudy', slug],
    queryFn: () => getCaseStudyBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  })
}

// Site Settings
export const useSiteSettings = () => {
  return useQuery({
    queryKey: ['siteSettings'],
    queryFn: getSiteSettings,
    staleTime: 30 * 60 * 1000, // 30 minutes
  })
} 