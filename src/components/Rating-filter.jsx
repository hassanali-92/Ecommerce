import Rating from "./Rating";

const RatingFilter = ({ onChangeRating, selectedRating }) => {
  return (
    <div className="h-48 p-5 cursor-pointer space-y-2 border border-gray-200 shadow-lg rounded-md">
      {[5, 4, 3, 2, 1].map((rating) => (
        <div
          key={rating}
          className="flex items-center gap-2 hover:opacity-80"
          onClick={() => onChangeRating(rating)}
        >
          <Rating
            rating={rating}
            ratingClassName={rating === selectedRating ? "selected" : ""}
          />
          <p className="text-gray-400">{rating} +</p>
        </div>
      ))}
    </div>
  );
};

export default RatingFilter;
