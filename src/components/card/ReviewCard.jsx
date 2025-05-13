import { PlayIcon } from "../../assets/icons";

export const ReviewCard = ({ review }) => {
  const { avatar, name } = review;

  return (
    <div className="w-[220px] h-[310px] bg-white bg-opacity-10 backdrop-blur-sm p-0 flex flex-col justify-between relative overflow-hidden lg:shadow-yellow-review">
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <img src={avatar} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="">
            <PlayIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
