// import React, { useMemo } from "react";
// import ProblemCard from "./ProblemCard";

// export default function ProblemList({
//   steps,
//   solvedSet,
//   toggleSolve,
//   selectedCategory,
//   difficulty,
//   search,
// }) {
//   const totalProblems = useMemo(() => steps.reduce((s, st) => s + st.problems.length, 0), [steps]);
//   const totalSolved = useMemo(() => {
//     let count = 0;
//     steps.forEach((st) => st.problems.forEach((p) => { if (solvedSet.has(p.id)) count++; }));
//     return count;
//   }, [steps, solvedSet]);

//   return (
//     <div className="w-full space-y-6">
//       {/* progress header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-gray-900 p-4 rounded-lg">
//         <div>
//           <div className="text-sm text-gray-400">Your Progress</div>
//           <div className="text-lg font-semibold">{totalSolved} / {totalProblems}</div>
//         </div>

//         <div className="w-full sm:w-1/2">
//           <div className="progress-container">
//             <div className="progress-bar" style={{ width: `${Math.round((totalSolved / (totalProblems || 1)) * 100)}%` }} />
//           </div>
//           <div className="text-right text-sm text-gray-500 mt-1">
//             {Math.round((totalSolved / (totalProblems || 1)) * 100)}%
//           </div>
//         </div>

//         <div>
//           <button className="btn btn-primary px-4" onClick={() => alert("Revision view")}>
//             Show Revision
//           </button>
//         </div>
//       </div>

//       {/* steps */}
//       <div className="space-y-4">
//         {steps.map((step) => {
//           // filter problems by search, category, difficulty
//           const filteredProblems = step.problems.filter((p) => {
//             if (selectedCategory && !p.tags.includes(selectedCategory)) return false;
//             if (difficulty && p.difficulty !== difficulty) return false;
//             if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
//             return true;
//           });

//           const stepSolvedCount = step.problems.reduce((acc, p) => acc + (solvedSet.has(p.id) ? 1 : 0), 0);
//           const stepTotal = step.problems.length;
//           const stepPercent = Math.round((stepSolvedCount / (stepTotal || 1)) * 100);

//           return (
//             <details key={step.id} className="bg-transparent">
//               <summary className="flex items-center justify-between cursor-pointer p-4 card">
//                 <div>
//                   <div className="font-semibold">{step.title}</div>
//                   <div className="text-sm text-gray-400">{`${stepSolvedCount} / ${stepTotal} solved`}</div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <div className="w-40 hidden sm:block">
//                     <div className="progress-container">
//                       <div className="progress-bar" style={{ width: `${stepPercent}%` }} />
//                     </div>
//                   </div>

//                   <div className="text-sm text-gray-400">{stepPercent}%</div>
//                 </div>
//               </summary>

//               <div className="p-4 space-y-3">
//                 {filteredProblems.length === 0 ? (
//                   <div className="text-sm text-gray-400">No problems match the filters.</div>
//                 ) : (
//                   filteredProblems.map((p) => (
//                     <ProblemCard key={p.id} problem={p} solvedSet={solvedSet} toggleSolve={toggleSolve} />
//                   ))
//                 )}
//               </div>
//             </details>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// src/components/ProblemList.jsx
import React, { useMemo } from "react";
import ProblemCard from "./ProblemCard";

export default function ProblemList({
  steps,
  solvedSet,
  toggleSolve,
  selectedCategory,
  difficulty,
  search,
  toggleStepDone,
}) {
  // --- total stats
  const allProblems = useMemo(() => steps.flatMap((s) => s.problems), [steps]);

  const totalProblems = allProblems.length;
  const totalSolved = allProblems.filter((p) => solvedSet.has(p.id)).length;

  const difficultyStats = useMemo(() => {
    const counts = { Easy: [0, 0], Medium: [0, 0], Hard: [0, 0] };
    allProblems.forEach((p) => {
      if (counts[p.difficulty]) {
        counts[p.difficulty][0]++; // total
        if (solvedSet.has(p.id)) counts[p.difficulty][1]++; // solved
      }
    });
    return counts;
  }, [allProblems, solvedSet]);

  const percent = Math.round((totalSolved / (totalProblems || 1)) * 100);

  return (
    <div className="w-full space-y-6">
      {/* === NEW: Summary Section === */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card text-center">
          <h4 className="font-semibold text-lg">Total Progress</h4>
          <p className="mt-2 text-primary font-bold text-xl">
            {totalSolved} / {totalProblems}
          </p>
        </div>
        <div className="card text-center">
          <h4 className="font-semibold">Easy</h4>
          <p className="mt-2 text-green-400 font-bold">
            {difficultyStats.Easy[1]} / {difficultyStats.Easy[0]}
          </p>
        </div>
        <div className="card text-center">
          <h4 className="font-semibold">Medium</h4>
          <p className="mt-2 text-yellow-400 font-bold">
            {difficultyStats.Medium[1]} / {difficultyStats.Medium[0]}
          </p>
        </div>
        <div className="card text-center">
          <h4 className="font-semibold">Hard</h4>
          <p className="mt-2 text-red-400 font-bold">
            {difficultyStats.Hard[1]} / {difficultyStats.Hard[0]}
          </p>
        </div>
      </div>

      {/* === Existing Progress Header === */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-gray-900 p-4 rounded-lg">
        <div>
          <div className="text-sm text-gray-400">Your Progress</div>
          <div className="text-lg font-semibold">
            {totalSolved} / {totalProblems}
          </div>
        </div>

        <div className="w-full sm:w-1/2">
          <div className="progress-container">
            <div className="progress-bar" style={{ width: `${percent}%` }} />
          </div>
          <div className="text-right text-sm text-gray-500 mt-1">{percent}%</div>
        </div>

        <div>
          <button
            className="btn btn-primary px-4"
            onClick={() => alert("Revision view")}
          >
            Show Revision
          </button>
        </div>
      </div>

      {/* === Steps List === */}
      <div className="space-y-4">
        {steps.map((step) => {
          const filteredProblems = step.problems.filter((p) => {
            if (selectedCategory && !p.tags.includes(selectedCategory)) return false;
            if (difficulty && p.difficulty !== difficulty) return false;
            if (search && !p.title.toLowerCase().includes(search.toLowerCase()))
              return false;
            return true;
          });

          const stepSolvedCount = step.problems.reduce(
            (acc, p) => acc + (solvedSet.has(p.id) ? 1 : 0),
            0
          );
          const stepTotal = step.problems.length;
          const stepPercent = Math.round((stepSolvedCount / (stepTotal || 1)) * 100);

          return (
            <details key={step.id} className="bg-transparent">
              <summary className="flex items-center justify-between cursor-pointer p-4 card">
                <div>
                  <div className="font-semibold">{step.title}</div>
                  <div className="text-sm text-gray-400">
                    {`${stepSolvedCount} / ${stepTotal} solved`}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-40 hidden sm:block">
                    <div className="progress-container">
                      <div className="progress-bar" style={{ width: `${stepPercent}%` }} />
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 mr-2">{stepPercent}%</div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (typeof toggleStepDone === "function")
                        toggleStepDone(step.id);
                    }}
                    className={`px-3 py-1 rounded-md text-sm font-semibold ${
                      stepSolvedCount === stepTotal
                        ? "bg-white text-primary"
                        : "bg-primary text-white"
                    }`}
                  >
                    {stepSolvedCount === stepTotal ? "Reset" : "Mark all"}
                  </button>
                </div>
              </summary>

              <div className="p-4 space-y-3">
                {filteredProblems.length === 0 ? (
                  <div className="text-sm text-gray-400">
                    No problems match the filters.
                  </div>
                ) : (
                  filteredProblems.map((p) => (
                    <ProblemCard
                      key={p.id}
                      problem={p}
                      solvedSet={solvedSet}
                      toggleSolve={toggleSolve}
                    />
                  ))
                )}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
