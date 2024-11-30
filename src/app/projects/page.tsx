import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAlinea from '@/images/logos/Alinea_logo_Grn.png'
import logoClaimTally from '@/images/logos/Claimtally_logo-AI.svg'
import logoAvonEHR from '@/images/logos/logoAvonEHR.svg'
import logoIntuition from '@/images/logos/TeamBuilder-Logo-byINT-horiz-Slate.svg'
import logoRateTracker from '@/images/logos/RateTracker-logo.png'

const projects = [
  {
    name: 'RateTracker',
    description:
      'RateTracker is a web application that allows users to track the exchange rates of different currencies.',
    stack: 'Python + django, Next.js, Tailwind CSS, TypeScript',
    link: {
      href: 'https://ratetracker.io',
      label: 'Visit RateTracker',
    },
    logo: logoRateTracker,
  },
  {
    name: 'Alinea 340B platform',
    description:
      'The Alinea Group (Alinea) provides pharmacy enterprise solutions and consulting services to the country’s leading healthcare organizations',
    stack:
      'Python + django in AWS EKS, React, TypesScript, Redshift, GPT-4o, Pandas',
    link: {
      href: 'https://www.alinea-group.com/',
      label: 'Visit the alinea group',
    },
    logo: logoAlinea,
  },
  {
    name: 'AvonEHR',
    description:
      'Avon is an advanced EHR with blood chemistry analysis and laboratory integration',
    stack: 'Node.js, Express.js, React.js, PostgresSQL, TypeScript',
    link: {
      href: 'https://avonehr.com/index.html',
      label: 'Visit AvonEHR',
    },
    logo: logoAvonEHR,
  },
  {
    name: 'ClaimTally AI',
    description:
      'A stunning application of AI Vision, ClaimTally AI generates complete home inventories for insurance loss claims from pictures and videos inside your home.Then, an AI-enabled shopping bot is used to find the closest match to lost items to generate current replacement costs.',
    stack:
      'Python + django in AWS EKS, Tailwind, HTMX, GPT-4o, GPT-4o mini, Claude Haiku',
    link: { href: 'https://claimtally.ai/', label: 'Visit ClaimTally AI' },
    logo: logoClaimTally,
  },
  {
    name: 'TeamBuilder: Corporate social network',
    description:
      'TeamBuilder by Intuition delivers Banter, CoffeeChats, Challenges, and a Corporate Social Network connected with slack and MS Teams to help HR managers build strong cultures in today’s remote and hybrid work environment.',
    stack: 'Python + django in AWS EKS, React, GPT-4o',
    link: { href: 'https://intuition.us/', label: 'Visit Intuition' },
    logo: logoIntuition,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex items-center justify-center border-zinc-700/50 bg-white ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                //className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Stack: {project.stack}
            </p>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
