import React from "react";

export default function ProblemCard({ problem, solvedSet, toggleSolve }) {
  const solved = solvedSet.has(problem.id);

  return (
    <div className="flex items-center justify-between card">
      <div>
        <a
          href={problem.link}
          target="_blank"
          rel="noreferrer"
          className="font-semibold hover:text-primary"
        >
          {problem.title}
        </a>

        <div className="mt-1 text-sm text-gray-400 flex flex-wrap gap-2 items-center">
          <span className="px-2 py-0.5 rounded-md bg-gray-800 text-xs">{problem.difficulty}</span>
          {problem.tags.map((t) => (
            <span key={t} className="text-xs text-gray-400">{t}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => toggleSolve(problem.id)}
          className={`px-3 py-1 rounded-md font-semibold transition ${solved ? "bg-white text-primary" : "bg-primary text-white"}`}
        >
          {solved ? "Solved" : "Mark"}
        </button>
      </div>
    </div>
  );
}
