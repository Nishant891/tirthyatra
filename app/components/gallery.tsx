import React from "react";
import { pilgrims } from "../../lib/pilgrim";
import Card from "./card";
const Gallery = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center mt-24">
      <h1 className="text-red-500 text-3xl font-extrabold sm:text-5xl">
        हाम्रो सेवा: तिर्थ यात्रा प्याकेजहरू
      </h1>
      <p className="text-gray-500 mt-4 max-w-lg sm:text-xl/relaxed">
        हामीले तपाईंको आस्थाको यात्रालाई सहज र समृद्ध बनाउनका लागि प्रमुख
        तिर्थस्थलहरूको विशेष प्याकेजहरू उपलब्ध गराउँछौं।
      </p>
      <div className="grid sm:grid-cols-3 gap-6 p-4 mt-16">
        {pilgrims.map((pilgrim, index) => (
          <React.Fragment key={index}>
            <Card {...pilgrim} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
