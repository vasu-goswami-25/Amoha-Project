import React, { useEffect, useMemo, useState } from "react";
import { steps as initialSteps } from "../data/practiceData";
import PracticeSidebar from "../components/PracticeSidebar";
import ProblemList from "../components/ProblemList";

export default function Practice() {
  // use the initial data as a constant (we don't modify the steps array itself here)
  const steps = initialSteps;

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);

  const [solvedSet, setSolvedSet] = useState(() => {
    try {
      const raw = localStorage.getItem("solvedProblems");
      return new Set(raw ? JSON.parse(raw) : []);
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    localStorage.setItem("solvedProblems", JSON.stringify([...solvedSet]));
  }, [solvedSet]);

  function toggleSolve(id) {
    setSolvedSet((prev) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  }

  // Mark all problems in a step as solved (or reset if already all solved)
  function toggleStepDone(stepId) {
    const step = steps.find((s) => s.id === stepId);
    if (!step) return;
    const allSolved = step.problems.every((p) => solvedSet.has(p.id));
    setSolvedSet((prev) => {
      const n = new Set(prev);
      step.problems.forEach((p) => {
        if (allSolved) n.delete(p.id);
        else n.add(p.id);
      });
      return n;
    });
  }

  // computed categories (unique tags)
  const categories = useMemo(() => {
    const set = new Set();
    initialSteps.forEach((s) =>
      s.problems.forEach((p) => p.tags.forEach((t) => set.add(t)))
    );
    return Array.from(set);
  }, []);

  function resetFilters() {
    setSearch("");
    setSelectedCategory(null);
    setDifficulty(null);
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <PracticeSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          search={search}
          setSearch={setSearch}
          resetFilters={resetFilters}
        />

        <ProblemList
          steps={steps}
          solvedSet={solvedSet}
          toggleSolve={toggleSolve}
          selectedCategory={selectedCategory}
          difficulty={difficulty}
          search={search}
          toggleStepDone={toggleStepDone} // <-- passed here
        />
      </div>
    </div>
  );
}
