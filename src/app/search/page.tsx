import NewsList from "@/app/NewsList"
import fetchNews from "@/lib/fetchNews"

type Props = {
  searchParams?: { term: string }
}
const SearchPage = async ({ searchParams }: Props) => {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  )
  return (
    <div>
      <h1 className="headerTitle">Search Results for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  )
}

export default SearchPage