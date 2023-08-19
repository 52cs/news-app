import fetchNews from "@/lib/fetchNews"
import { categories } from "@/constants"

export default async function Home() {
  const news: NewsResponse = await fetchNews(categories.join(','))

  console.log({news})

  return (
    <div>
      {/* NewsList news */}
    </div>
  )
}
