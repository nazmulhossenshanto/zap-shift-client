import { FastForward, QuoteIcon } from "lucide-react";

 

const ReviewCard = ({ review }) => {
  const { userName, user_email, ratings, user_photoURL } = review;
 
  const reviewText = review.review || review.comment || review.message;

  return (
    <div className="h-full rounded-3xl bg-[#FAFAFA] p-8 shadow-sm">
      {/* Top: quote icon + rating */}
      <div className="mb-4 flex items-start justify-between">
        <QuoteIcon className="text-4xl text-[#C3DFE2]" />
        <span className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-semibold text-[#03373D] shadow-sm">
          <FastForward className="text-amber-400" />
          {ratings}
        </span>
      </div>

      {/* Review text */}
      <p className="leading-relaxed text-[#606060]">{reviewText}</p>

      {/* Dashed divider */}
      <div className="my-6 border-t-2 border-dashed border-[#C9CDD2]" />

      {/* User info */}
      <div className="flex items-center gap-4">
        {user_photoURL ? (
          <img
            src={user_photoURL}
            alt={userName}
            className="h-14 w-14 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#03464D] text-xl font-bold text-white">
            {userName?.charAt(0)}
          </div>
        )}

        <div className="min-w-0">
          <h3 className="text-lg font-bold text-[#03373D]">{userName}</h3>
          <p className="truncate text-sm text-[#606060]">{user_email}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;