import React, { useEffect, useMemo, useState } from "react";
import "./home.css";
import Card from "../../components/Card/Card";
import { getData } from "../../utils/fetchData";
import Skelton from "../../components/Skelton/Skelton";
import Pagination from "../../components/Pagination/Pagination";
let PageSize = 10;
function Home() {
  const [lists, setLists] = useState([]);
  const [load, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  let data;

  useEffect(() => {
    const getRandiomRepo = async () => {
      await getData(
        `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc`
      )
        .then((res) => {
          setLists(res.items);
          setLoad(true);
          if (res === null) {
            setLists([]);
            setLoad(false);
          }
        })
        .catch((error) => console.log(error));
    };
    getRandiomRepo();
  }, []);
  data = lists;
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  return (
    <div className="home">
      {load ? (
        <>
          {load ? (
            currentTableData.map((list, index) => (
              <Card key={index} list={list} />
            ))
          ) : (
            <h1>No posts to display</h1>
          )}
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      ) : (
        <>
          <Skelton />
          <Skelton />
          <Skelton />
          <Skelton />
        </>
      )}
    </div>
  );
}

export default Home;
