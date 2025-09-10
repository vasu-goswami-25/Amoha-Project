import { useState } from 'react'

const initialSteps = [
  { id:1, title:"Learn the basics", total:31, done:0, items: ["Intro", "Complexities"] },
  { id:2, title:"Important Sorting Techniques", total:7, done:0, items: ["Bubble/Insertion", "Merge/Quick"] },
  { id:3, title:"Arrays - Easy→Hard", total:40, done:0, items: ["Two Sum","3Sum"] },
  // add more...
]

export default function Sheet(){
  const [steps, setSteps] = useState(initialSteps)

  const totalProblems = steps.reduce((s, x) => s + x.total, 0)
  const completed = steps.reduce((s, x) => s + x.done, 0)
  const percent = Math.round((completed / (totalProblems || 1)) * 100)

  function toggleDone(stepId){
    setSteps(prev => prev.map(s => s.id === stepId ? {...s, done: s.done === s.total ? 0 : s.total} : s))
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* progress header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gray-50 p-4 rounded-lg">
        <div>
          <div className="text-sm text-gray-500">Your Progress</div>
          <div className="text-xl font-semibold">{completed} / {totalProblems}</div>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
            <div style={{width:`${percent}%`}} className="h-full" />
          </div>
          <div className="text-right text-sm text-gray-600 mt-1">{percent}%</div>
        </div>
        <button className="px-3 py-1 bg-primary text-white rounded" onClick={() => alert('Revision view')}>
          Show Revision
        </button>
      </div>

      {/* steps list */}
      <div className="space-y-4">
        {steps.map(step => (
          <details key={step.id} className="bg-white dark:bg-gray-800 border rounded-lg">
            <summary className="cursor-pointer list-none p-4 flex justify-between items-center">
              <div>
                <div className="font-semibold">{`Step ${step.id}: ${step.title}`}</div>
                <div className="text-sm text-gray-500">{`${step.done} / ${step.total}`}</div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={(e) => { e.stopPropagation(); toggleDone(step.id) }}
                  className="px-3 py-1 bg-primary text-white rounded text-sm">
                  {step.done === step.total ? 'Reset' : 'Mark done'}
                </button>
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </summary>

            <div className="p-4 border-t">
              <ul className="space-y-2">
                {step.items.map((it,i)=>(
                  <li key={i} className="text-sm text-gray-700">{it}</li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
