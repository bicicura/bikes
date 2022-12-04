export function SearchFilters({ handleFilter, categories, activeFilter }: any) {
  return (
    <section className="flex gap-4 text-lg">
      {categories.map((category: any) => (
        <button
          key={category.id}
          onClick={() => handleFilter(category.id)}
          className={`px-6 py-1 font-bold uppercase border-2 rounded-full transition-colors duration-200 ${
            activeFilter === category.id
              ? 'bg-blue-700 text-white border-blue-700'
              : 'border-black text-black bg-transparent hover:bg-blue-700 hover:text-white hover:border-blue-700'
          }`}
        >
          {category.name}
        </button>
      ))}
    </section>
  )
}
