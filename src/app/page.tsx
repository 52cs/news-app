import fetchNews from "@/lib/fetchNews"
import { categories } from "@/constants"
import NewsList from "./NewsList"

export default async function Home() {
  const news: NewsResponse = await fetchNews(categories.join(','))

  return (
    <div>
      <NewsList news={news} />
    </div>
  )
}
