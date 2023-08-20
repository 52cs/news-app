import fetchNews from "@/lib/fetchNews"
import { categories } from "@/constants"
import NewsList from "./NewsList"
import response from '../../response.json'

export default async function Home() {
  const news: NewsResponse =
    response as NewsResponse || await fetchNews(categories.join(','))

  return (
    <div>
      <NewsList news={news} />
    </div>
  )
}
