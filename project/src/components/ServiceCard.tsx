import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, href }) => {
  const CardContent = () => (
    <>
      <div className="text-green-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </>
  );

  if (href) {
    return (
      <a 
        href={href}
        className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <CardContent />
    </div>
  );
};

export default ServiceCard;