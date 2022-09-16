import React from "react";

import "./SCSS/styles.scss";

const App = () => {
  const toggle = (e) => {
    let count = document.getElementById("count");
    let number = count.innerHTML;

    e.currentTarget.classList.toggle("active");
    if (e.currentTarget.classList[1] === "active") {
      number++;
      count.innerHTML = number;
    } else {
      number--;
      count.innerHTML = number;
    }
  };

  const resetCount = () => {
    let count = document.getElementById("count");
    count.innerHTML = 0;

    document
      .querySelectorAll(".active")
      .forEach((el) => el.classList.toggle("active"));
  };

  return (
    <div className="container">
      <main className="main">
        <header className="header">
          <h1 className="header__notifications">
            Notifications{" "}
            <span className="header__count" id="count">
              {3}
            </span>
          </h1>
          <button className="header__mark" onClick={() => resetCount()}>
            Mark all as read
          </button>
        </header>

        <section className="notifications">
          <ul className="notifications__list">
            <li
              className="notifications__item active"
              id="item"
              onClick={(e) => toggle(e)}
            >
              <img
                className="notifications__avatar"
                src={require("./images/avatar-mark-webber.webp")}
                alt="User Avatar"
              />
              <div className="notifications__content">
                <p className="notifications__text">
                  <span className="notifications__name">Mark Webber</span>{" "}
                  reacted to your recent post{" "}
                  <span className="notifications__post">
                    My first tournament today!
                  </span>
                  <span className="notifications__dot"></span>
                </p>

                <p className="notifications__time">1m ago</p>
              </div>
            </li>
            <li
              className="notifications__item active"
              id="item"
              onClick={(e) => toggle(e)}
            >
              <img
                className="notifications__avatar"
                src={require("./images/avatar-angela-gray.webp")}
                alt="User Avatar"
              />
              <div className="notifications__content">
                <p className="notifications__text">
                  <span className="notifications__name">Angela Gray</span>{" "}
                  followed you
                  <span className="notifications__dot"></span>
                </p>
                <p className="notifications__time">5m ago</p>
              </div>
            </li>
            <li
              className="notifications__item active"
              id="item"
              onClick={(e) => toggle(e)}
            >
              <img
                className="notifications__avatar"
                src={require("./images/avatar-jacob-thompson.webp")}
                alt="User Avatar"
              />
              <div className="notifications__content">
                <p className="notifications__text">
                  <span className="notifications__name">Jacob Thompson</span>{" "}
                  has joined your group{" "}
                  <a href="/" className="notifications__club">
                    Chess Club
                  </a>
                  <span className="notifications__dot"></span>
                </p>
                <p className="notifications__time">1 day ago</p>
              </div>
            </li>
            <li
              className="notifications__item"
              id="item"
              onClick={(e) => toggle(e)}
            >
              <img
                className="notifications__avatar"
                src={require("./images/avatar-rizky-hasanuddin.webp")}
                alt="User Avatar"
              />
              <div className="notifications__content">
                <p className="notifications__text">
                  <span className="notifications__name">Rizky Hasanuddin</span>{" "}
                  sent you a private message
                  <span className="notifications__dot"></span>
                </p>
                <p className="notifications__time">5 days ago</p>
                <p className="notifications__private">
                  Hello, thanks for setting up the Chess Club. I've been a
                  member for a few weeks now and I'm already having lots of fun
                  and improving my game.
                </p>
              </div>
            </li>
            <li
              className="notifications__item"
              id="item"
              onClick={(e) => toggle(e)}
            >
              <img
                className="notifications__avatar"
                src={require("./images/avatar-kimberly-smith.webp")}
                alt="User Avatar"
              />
              <div className="notifications__content">
                <p className="notifications__text">
                  <span className="notifications__name">Kimberly Smith</span>{" "}
                  commented on your picture
                  <span className="notifications__dot"></span>
                </p>

                <p className="notifications__time">1 week ago</p>
              </div>
              <img
                className="notifications__image"
                src={require("./images/image-chess.webp")}
                alt="User Submitted"
              />
            </li>
            <li
              className="notifications__item"
              id="item"
              onClick={(e) => toggle(e)}
            >
              <img
                className="notifications__avatar"
                src={require("./images/avatar-nathan-peterson.webp")}
                alt="User Avatar"
              />
              <div className="notifications__content">
                <p className="notifications__text">
                  <span className="notifications__name">Nathan Peterson</span>{" "}
                  reacted to your recent post{" "}
                  <span className="notifications__post">
                    5 end-game strategies to increase your win rate
                  </span>
                  <span className="notifications__dot"></span>
                </p>

                <p className="notifications__time">2 weeks ago</p>
              </div>
            </li>
            <li
              className="notifications__item"
              id="item"
              onClick={(e) => toggle(e)}
            >
              <img
                className="notifications__avatar"
                src={require("./images/avatar-anna-kim.webp")}
                alt="User Avatar"
              />
              <div className="notifications__content">
                <p className="notifications__text">
                  <span className="notifications__name">Anna Kim</span> left
                  your group{" "}
                  <a href="/" className="notifications__club">
                    Chess Club
                  </a>
                  <span className="notifications__dot"></span>
                </p>
                <p className="notifications__time">2 weeks ago</p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
