import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import BookCover from './BookCover';

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
}: Book) => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>

        <div className="book-info">
          <p>
            By <span className="font-semibold text-light-200">{author}</span>
          </p>
          <p>
            Category{' '}
            <span className="font-semibold text-light-200">{genre}</span>
          </p>

          <div className="flex flex-grow gap-1">
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
            <p>{rating}</p>
          </div>

          <div className="book-copies">
            <p>
              Total Books: <span>{total_copies}</span>
            </p>
            <p>
              Available Books: <span>{available_copies}</span>
            </p>
          </div>
        </div>

        <p className="book-description">{description}</p>

        <Button className="book-overview_btn mb-8">
          <Image src="/icons/book.svg" alt="book" width={20} height={20} />
          <p className="font-bebas-neue text-xl text-dark-100 ">
            Borrow book request
          </p>
        </Button>
      </div>

      <div className='relative flex flex-1 justify-center'>
        <div className='relative z-10'>
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={color}
            coverImage={cover}
          />
        </div>

        <div className='absolute right-16 top-10 rotate-12 opacity-30 z-0 max-sm:hidden'>
          <BookCover
            variant="wide"
            coverColor={color}
            coverImage={cover}
          />
        </div>
      </div>

    </section>
  );
};

export default BookOverview;
