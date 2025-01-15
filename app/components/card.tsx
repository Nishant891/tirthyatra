import React from "react";
import Link from 'next/link';
type CardProps = {
  id: number;
  name: string;
  discount: string;
  url: string;
  duration: string;
  link: string;
};
const Card = ({name, discount, url, duration, link }: CardProps) => {
  return (
    <div>
      <div
        className="relative block rounded-tr-3xl border border-gray-100"
      >
        <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
          Save {discount}
        </span>

        <img
          src={url}
          alt="A pilgrim"
          className="h-80 w-full rounded-tr-3xl object-cover"
        />

        <div className="p-4 text-center flex flex-col gap-1">
          <strong className="text-lg font-medium text-gray-900">
            {" "}
            {name}{" "}
          </strong>

          <strong className="text-md font-medium text-gray-900">
            {" "}
            {duration}{" "}
          </strong>
          <Link href={`/${link}`}>
            <span className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
              Learn More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
