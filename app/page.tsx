"use client";

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import OpportunityList from '../../components/repeto/OpportunityList';
import FilterSection from '../../components/repeto/FilterSection';
import TabSection from '../../components/repeto/TabSection';
import Footer from '../../components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState("Latest");
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});

  const handleFilterSubmit = (filters: Record<string, string[]>) => {
    setActiveFilters(filters);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <FilterSection onFilterSubmit={handleFilterSubmit} />
        <div className="flex-1 max-w-7xl px-4 py-6 space-y-8">
          <TabSection activeTab={activeTab} onTabChange={setActiveTab} />
          <OpportunityList filters={activeFilters} activeTab={activeTab} />
        </div>
      </div>
      <Footer />
    </main>
  );
}