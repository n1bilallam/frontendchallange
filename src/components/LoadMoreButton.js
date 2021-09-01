import { Autorenew } from "@material-ui/icons";
import React from "react";

const LoadMoreButton = ({ page, result, load, handleLoadMore }) => {
  return (
    <>
      {result < 9 * (page - 1)
        ? ""
        : !load && (
            <button className="loadMore" onClick={handleLoadMore}>
              <span className="">
                <Autorenew />
              </span>
              <span>Load more</span>
            </button>
          )}
    </>
  );
};

export default LoadMoreButton;
