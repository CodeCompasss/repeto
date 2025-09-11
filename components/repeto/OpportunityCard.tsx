import { Opportunity } from '@/types/types';
import { CalendarDays, WalletCards, Users } from 'lucide-react';
import Link from "next/link";

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export default function OpportunityCard({ opportunity }: OpportunityCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="bg-gradient-to-r from-custom-blue to-custom-dark p-6">
        <h2 className="text-white text-xl font-semibold mb-2">{opportunity.title}</h2>
        <p className="text-gray-200 text-sm mb-4">{opportunity.description}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <CalendarDays className="w-5 h-5 text-white" />
            <div>
              <p className="text-gray-200 text-xs">Last Date</p>
              <p className="text-white font-medium">{opportunity.lastDateToApply}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <WalletCards className="w-5 h-5 text-white" />
            <div>
              <p className="text-gray-200 text-xs">Stipend</p>
              <p className="text-white font-medium">{opportunity.stipend}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-white" />
            <div>
              <p className="text-gray-200 text-xs">Eligibility</p>
              <p className="text-white font-medium">{opportunity.eligibility}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
         {/*<div className="flex flex-wrap gap-2 mb-4">
          {opportunity.department.map((dept) => (
            <span key={dept} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {dept}
            </span>
          ))}
        </div>*/}
        
        <Link 
          href={opportunity.applicationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}