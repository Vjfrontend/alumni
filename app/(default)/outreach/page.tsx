import React from "react";

export default function Outreach() {
  const cardData = [
    {
      imageSrc: "/path/to/image1.jpg",
      title: "Card 1",
      description: "This is a description for card 1",
    },
    {
      imageSrc: "/path/to/image2.jpg",
      title: "Card 2",
      description: "This is a description for card 2",
    },
    {
      imageSrc: "/path/to/image3.jpg",
      title: "Card 3",
      description: "This is a description for card 3",
    },
    {
      imageSrc: "/path/to/image4.jpg",
      title: "Card 4",
      description: "This is a description for card 4",
    },
    {
      imageSrc: "/path/to/image5.jpg",
      title: "Card 5",
      description: "This is a description for card 5",
    },
    {
      imageSrc: "/path/to/image6.jpg",
      title: "Card 6",
      description: "This is a description for card 6",
    },
    {
      imageSrc: "/path/to/image7.jpg",
      title: "Card 7",
      description: "This is a description for card 7",
    },
    {
      imageSrc: "/path/to/image8.jpg",
      title: "Card 8",
      description: "This is a description for card 8",
    },
    {
      imageSrc: "/path/to/image9.jpg",
      title: "Card 9",
      description: "This is a description for card 9",
    },
    {
      imageSrc: "/path/to/image10.jpg",
      title: "Card 10",
      description: "This is a description for card 10",
    },
    {
        imageSrc: "/path/to/image10.jpg",
        title: "Card 10",
        description: "This is a description for card 10",
      },
      {
        imageSrc: "/path/to/image10.jpg",
        title: "Card 10",
        description: "This is a description for card 10",
      },
  ];
  interface CardProps {
    imageSrc: any;
    title: string;
    description: string;
  }
  

  const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => (
    
      <div className="max-w-lg rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full" src={imageSrc} alt={title} />
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    );
  

  return (
    <div className="container mx-auto p-4 mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
