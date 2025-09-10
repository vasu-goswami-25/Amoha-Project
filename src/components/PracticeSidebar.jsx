import React from "react";

export default function PracticeSidebar({
  categories,
  selectedCategory,
  setSelectedCategory,
  difficulty,
  setDifficulty,
  search,
  setSearch,
  resetFilters,
}) {
  return (
    <aside className="w-full md:w-64 space-y-6">
      <div className="card">
        <h4 className="font-semibold mb-2">Search</h4>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search problems..."
          className="w-full bg-gray-900 border border-gray-700 rounded-md px-3 py-2 focus:outline-none"
        />
      </div>

      <div className="card">
        <h4 className="font-semibold mb-3">Categories</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1 rounded-md text-sm ${selectedCategory === null ? "bg-primary text-white" : "bg-gray-800 text-gray-300"}`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-3 py-1 rounded-md text-sm ${selectedCategory === c ? "bg-primary text-white" : "bg-gray-800 text-gray-300"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <h4 className="font-semibold mb-3">Difficulty</h4>
        <div className="flex gap-2">
          {["Easy", "Medium", "Hard"].map((d) => (
            <button
              key={d}
              onClick={() => setDifficulty(d === difficulty ? null : d)}
              className={`px-3 py-1 rounded-md text-sm ${difficulty === d ? "bg-primary text-white" : "bg-gray-800 text-gray-300"}`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <button onClick={resetFilters} className="btn btn-secondary w-full">
          Reset filters
        </button>
      </div>
    </aside>
  );
}
