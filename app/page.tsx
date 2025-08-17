"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import OpportunityList from '../components/repeto/OpportunityList';
import FilterSection from '../components/repeto/FilterSection';
import TabSection from '../components/repeto/TabSection';
import Footer from '../components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState("Latest");
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});

  const handleFilterSubmit = (filters: Record<string, string[]>) => {
    setActiveFilters(filters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Navigation */}
      <header role="banner">
        <Navbar />
      </header>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar filter section */}
        <aside
          aria-label="Filters for opportunities"
          className="md:w-64"
        >
          <FilterSection onFilterSubmit={handleFilterSubmit} />
        </aside>

        {/* Main content area */}
        <main
          role="main"
          id="main-content"
          className="flex-1 max-w-7xl px-4 py-6 space-y-8"
        >
          <section aria-labelledby="opportunity-tabs">
            <h2 id="opportunity-tabs" className="sr-only">
              Opportunity categories
            </h2>
            <TabSection activeTab={activeTab} onTabChange={setActiveTab} />
          </section>

          <section aria-labelledby="opportunity-list">
            <h2 id="opportunity-list" className="sr-only">
              List of opportunities
            </h2>
            <OpportunityList filters={activeFilters} activeTab={activeTab} />
          </section>
        </main>
      </div>

      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
}
