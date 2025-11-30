import { Route, Switch, Router } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

// Get the base path from Vite's configuration
const base = import.meta.env.BASE_URL;

function App() {
  return (
    <Router base={base}>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route>
            {/* 404 Page */}
            <div className="min-h-[60vh] flex items-center justify-center px-4">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-[#3070B6] mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Page Not Found
                </h2>
                <p className="text-gray-600 mb-8">
                  The page you're looking for doesn't exist.
                </p>
                <a
                  href="/"
                  className="inline-block bg-[#C43175] text-white px-8 py-3 rounded-lg hover:bg-[#C43175]/90 transition-colors font-semibold"
                >
                  Go Home
                </a>
              </div>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;