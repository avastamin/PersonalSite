import glob from 'fast-glob'

interface Article {
  title: string
  description: string
  author: string
  date: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}

export const articles = [
  {
    id: '1',
    title: 'Mastering hasOwnProperty in JavaScript',
    description:
      'Why and how to use Object.prototype.hasOwnProperty.call() in JavaScript',
    author: 'Ruhul Amin',
    date: '2024-01-01',
    url: 'https://medium.com/@avastamin/mastering-hasownproperty-in-javascript-why-and-how-to-use-object-prototype-hasownproperty-call-52848a94b721',
  },
]
