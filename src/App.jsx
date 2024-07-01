import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ScriptExecution from "./pages/ScriptExecution.jsx";
import Scheduling from "./pages/Scheduling.jsx";
import Logging from "./pages/Logging.jsx";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner.jsx";
import SharedLayout from "./components/layouts/sidebar.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Index />} />
              <Route path="script-execution" element={<ScriptExecution />} />
              <Route path="scheduling" element={<Scheduling />} />
              <Route path="logging" element={<Logging />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;