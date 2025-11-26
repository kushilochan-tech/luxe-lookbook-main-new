import { forwardRef, type ImgHTMLAttributes, useState } from 'react'
import './image.css'

const FALLBACK_IMAGE_URL = "https://via.placeholder.com/1200x800?text=Image+Not+Found";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: string
}

/**
 * Standard Image component for Vercel
 * Replaces Wix image-kit with a simple, performant image wrapper
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, fallback = FALLBACK_IMAGE_URL, onError, ...props }, ref) => {
    const [imageSrc, setImageSrc] = useState<string | undefined>(src)
    const [hasError, setHasError] = useState(false)

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (!hasError) {
        setImageSrc(fallback)
        setHasError(true)
      }
      onError?.(e as any)
    }

    if (!imageSrc) {
      return <div data-empty-image ref={ref as any} {...props} />
    }

    return (
      <img
        ref={ref}
        src={imageSrc}
        onError={handleError}
        loading="lazy"
        {...props}
      />
    )
  }
)
Image.displayName = 'Image'
