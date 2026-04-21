'use client'
import { trackOutboundClick } from '@/lib/analytics'

interface Props {
  href: string
  label: string
  className?: string
  children: React.ReactNode
}

export default function OutboundLink({ href, label, className, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackOutboundClick(label, href)}
    >
      {children}
    </a>
  )
}
