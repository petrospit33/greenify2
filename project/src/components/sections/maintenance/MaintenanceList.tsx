import React from 'react';
import { Check } from 'lucide-react';

const maintenanceItems = [
  'Καθαριότητα πρασίνων',
  'Κούρεμα χλοοτάπητα',
  'Κλάδεμα θάμνων και μπορντούρας',
  'Λίπανση και φυτοπροστασία',
  'Έλεγχος και ρύθμιση αρδευτικού συστήματος',
  'Αντικατάσταση φυτών',
  'Καταπολέμηση ζιζανίων',
  'Διαμόρφωση κόμης δέντρων'
];

const MaintenanceList = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {maintenanceItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
          <span className="text-lg text-gray-800">{item}</span> {/* Applied text-lg for larger font */}
        </div>
      ))}
    </div>
  );
};

export default MaintenanceList;
