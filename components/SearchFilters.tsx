export function SearchFilters({ handleFilter, activeFilter }: any) {
  const filters = [
    { slug: 'All bikes' },
    { slug: 'Sportive' },
    { slug: 'Classic' },
    { slug: 'Modern' },
    { slug: 'Cargo' },
    { slug: 'Touring' },
    { slug: 'Kids' },
    { slug: 'Male' },
    { slug: 'Female' },
    { slug: 'E-Bike' },
  ]

  return (
    <section className="flex gap-4 text-lg">
      {filters.map((filter, index) => (
        <button
          key={index}
          onClick={() => handleFilter(filter.slug)}
          className={`px-6 py-1 font-bold uppercase border-2 rounded-full transition-colors duration-200 ${
            activeFilter === filter.slug
              ? 'bg-blue-700 text-white border-blue-700'
              : 'border-black text-black bg-transparent hover:bg-blue-700 hover:text-white hover:border-blue-700'
          }`}
        >
          {filters[index].slug}
        </button>
      ))}
    </section>
  )
}
