import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeltonStaticPages = () => {
  return (
    <>
      <SkeletonTheme baseColor="#f9f9f9" highlightColor="#ddd">
        <div className="container">
          <div className="w-full mb-5">
            <Skeleton height={150} />
          </div>
          <div className="w-full flex gap-20 my-10">
            <div className="w-1/2 flex gap-4 items-center">
              <Skeleton width={80} height={80} circle />
              <div className={`w-[calc(100%-160px)]`}>
                <Skeleton height={20} count={4} className="my-2" />
              </div>
            </div>
            <div className="w-1/2 flex gap-4 items-center">
              <Skeleton width={80} height={80} circle />
              <div className={`w-[calc(100%-160px)]`}>
                <Skeleton height={20} count={4} className="my-2" />
              </div>
            </div>
          </div>
          <div className="w-full flex gap-20 mt-10 mb-28">
            <div className="w-1/2 flex gap-4 items-center">
              <Skeleton width={80} height={80} circle />
              <div className={`w-[calc(100%-160px)]`}>
                <Skeleton height={20} count={4} className="my-2" />
              </div>
            </div>
            <div className="w-1/2 flex gap-4 items-center">
              <Skeleton width={80} height={80} circle />
              <div className={`w-[calc(100%-160px)]`}>
                <Skeleton height={20} count={4} className="my-2" />
              </div>
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
};

export default SkeltonStaticPages;
