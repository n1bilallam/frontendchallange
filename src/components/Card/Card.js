import React from "react";
import moment from "moment";
import "./card.css";

function Card({ list }) {
  const NumberFormattter = (number) => {
    return Math.abs(number) > 999
      ? Math.sign(number) * (Math.abs(number) / 1000).toFixed(1) + "k"
      : Math.sign(number) * Math.abs(number);
  };

  const capitalize = (name) => {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div className="card">
      <div className="left">
        <img src={list.owner.avatar_url} alt="avtar" />
      </div>
      <div className="right">
        <div className="body">
          <h2>{capitalize(list.name)}</h2>
          <p>
            {list.description ? (
              list.description
            ) : (
              <small style={{ color: "gray" }}>
                No Description in this Repo.
              </small>
            )}
          </p>
        </div>
        <div className="footer">
          <div className="tags">
            <span>Stars: {NumberFormattter(list.stargazers_count)}</span>
            <span>Issues: {NumberFormattter(list.open_issues)}</span>
          </div>
          <div className="time">
            <small>
              Submited {moment(list.created_at).fromNow()} by {list.owner.login}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
