import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Ruhul Amin',
    default: 'Ruhul Amin - Senior FullStack Engineer based in Bangladesh',
  },
  description:
    'I’m Ruhul Amin, a Senior FullStack Engineer based in Bangladesh. Building Scalable Web Applications with Expertise in Full-Stack and AI Technologies. Senior FullStack Engineer with advanced skills in Python, Node.js, React.js, Next.js, and TypeScript. Experienced in integrating OpenAI, ChatGPT, and Smart Editor Cursor to create innovative AI-powered solutions. Proficient in database management (MySQL, MongoDB) and deploying applications on cloud platforms like AWS, Firebase, and Supabase. Passionate about crafting efficient, scalable systems that elevate user experiences and deliver business value.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
