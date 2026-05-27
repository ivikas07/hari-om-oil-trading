import Image from 'next/image';

const GalleryItem = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="relative h-64">
        <Image 
          src={imageSrc} 
          alt={title} 
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{title}</h3>
        <p className="text-[var(--color-secondary)]">{description}</p>
      </div>
    </div>
  );
};

export default GalleryItem;