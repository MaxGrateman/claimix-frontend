import { Route, Routes } from "react-router-dom"
import { Workplace } from "./pages/Workplace/Workplace"
import { ReactFlowProvider } from "reactflow"
import { WorkflowBuilder } from "./pages/WorkflowBuilder/WorkflowBuilder"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Workplace />} />
      <Route path="/builder/:id" element={
      <ReactFlowProvider>
        <WorkflowBuilder />
      </ReactFlowProvider>
      } />
    </Routes>
  )
}

export default App
