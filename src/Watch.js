import React from "react";
import { Link } from "react-router-dom";

function Watch() {
  return (
    <div className="watch">
      <div className="container">
        <div className="row">
          <div
            className="videos__watch left__bar"
            style={{
              flex: ".6",
            }}
          >
            <div className="videos__watch">
              <iframe
                width="100%"
                height="383"
                src="https://www.youtube.com/embed/gIHjLTmKHgM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="videos__tag">
              <span
                className="video__tag pointer"
                style={{
                  color: "blue",
                  fontSize: "14px",
                  padding: "10px 0px!important",
                }}
              >
                #chuye dile mon
              </span>
            </div>
            <div className="videos__title">
              <span
                className="title"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#000000e6",
                }}
              >
               Chuye Dilam Chuye Dile Mon 2015 Bangla Movie Full Video Song HD
              </span>
            </div>
            <div
              className="videos__details d__flex justify__content__space__beetween"
              style={{
                borderBottom: "1px solid #00000042 ",
              }}
            >
              <div className="left__option d__flex">
                <span
                  className="views"
                  style={{
                    fontSize: "16px",
                    padding: "10px 0px",
                    color: "#606060",
                  }}
                >
                  1,343,974 views •
                </span>
                <span
                  className="date"
                  style={{
                    fontSize: "16px",
                    padding: "10px",
                    color: "#606060",
                  }}
                >
                  Jun 21, 2020
                </span>
              </div>

              <div className="right__option d__flex">
                <div className="like__option d__flex align__items__center">
                  <div
                    className="like__icon"
                    style={{
                      padding: "0px 10px",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                      class="style-scope yt-icon pointer"
                      style={{
                        width: "25px",
                      }}
                    >
                      <g class="style-scope yt-icon">
                        <path
                          d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"
                          class="style-scope yt-icon"
                        ></path>
                      </g>
                    </svg>
                  </div>

                  <div className="like__amount">
                    <span
                      className="like__amount pointer"
                      style={{
                        fontWeight: "600",
                        color: "#000000bf",
                      }}
                    >
                      53k
                    </span>
                  </div>
                </div>

                <div className="dislike__option d__flex align__items__center">
                  <div
                    className="dislike__icon"
                    style={{
                      padding: "0px 10px",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                      class="style-scope yt-icon pointer"
                      style={{
                        width: "25px",
                      }}
                    >
                      <g class="style-scope yt-icon">
                        <path
                          d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"
                          class="style-scope yt-icon"
                        ></path>
                      </g>
                    </svg>
                  </div>

                  <div className="dislike__amount">
                    <span
                      className="dislike__amount pointer"
                      style={{
                        fontWeight: "600",
                        color: "#000000bf",
                      }}
                    >
                      653
                    </span>
                  </div>
                </div>

                <div className="share__option d__flex align__items__center">
                  <div
                    className="share__icon pointer"
                    style={{
                      padding: "0px 10px",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                      class="style-scope yt-icon"
                      style={{
                        width: "25px",
                      }}
                    >
                      <g mirror-in-rtl="" class="style-scope yt-icon">
                        <path
                          d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z"
                          class="style-scope yt-icon"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="share">
                    <span className="share pointer">SHARE</span>
                  </div>
                </div>

                <div className="share__option d__flex align__items__center">
                  <div
                    className="share__icon pointer"
                    style={{
                      padding: "0px 10px",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                      class="style-scope yt-icon"
                      style={{
                        width: "25px",
                      }}
                    >
                      <g class="style-scope yt-icon">
                        <path
                          d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z M14,7H2v1h12V7z M2,12h8v-1H2V12z M2,16h8v-1H2V16z"
                          class="style-scope yt-icon"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="share">
                    <span className="share pointer">SAVE</span>
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    class="style-scope yt-icon pointer"
                    style={{
                      width: "25px",
                      margin: "0px 10px",
                    }}
                  >
                    <g class="style-scope yt-icon">
                      <path
                        d="M7.5,12c0,0.83-0.67,1.5-1.5,1.5S4.5,12.83,4.5,12s0.67-1.5,1.5-1.5S7.5,11.17,7.5,12z M12,10.5c-0.83,0-1.5,0.67-1.5,1.5 s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S12.83,10.5,12,10.5z M18,10.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5 S18.83,10.5,18,10.5z"
                        class="style-scope yt-icon"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            <div
              className="video__chaneel d__flex justify__content__space__beetween"
              style={{
                margin: "10px 0px",
              }}
            >
              <div className="channel__info d__flex align__items__center">
                <div className="chaneel__img">
                  <img
                    src="https://yt3.ggpht.com/ytc/AKedOLS1in5awcQt6UMlyZDTfFxAyHbr5O3GZA6_-y41yA=s48-c-k-c0x00ffffff-no-rj"
                    alt=""
                    className="chaneel__img pointer"
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div
                  className="chaneel__name d__flex"
                  style={{
                    flexDirection: "column",
                    padding: "0px 15px",
                  }}
                >
                  <span
                    className="chaneelName"
                    style={{
                      fontWeight: "600",
                      color: "rgb(0 0 0 / 77%)",
                    }}
                  >
                    Tushar Das
                  </span>
                  <span
                    className="chaneel__subscribes"
                    style={{
                      fontSize: "16px",
                      color: "#333",
                    }}
                  >
                    10.8k subscribes
                  </span>
                </div>
              </div>
              <div className="subscribe__button d__flex align__items__center">
                <button
                  className="btn pointer"
                  style={{
                    height: "40px",
                    width: "150px",
                    backgroundColor: "red",
                    color: "#fff",
                    textAlign: "center",
                    border: "none",
                  }}
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>

            <div
              className="video__description"
              style={{
                padding: "15px 0px",
              }}
            >
              <p
                className="description"
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.5",
                }}
              >
                1 Year Skinny To Muscular Body Transformation At Home. 1 Year
                Skinny To Muscular Body Transformation At Home. Thank you for
                watching my 1 year body transformation! Going from skinny to
                muscular is tough enough and even harder when you don't have the
                resources you wish you had, but the sky is the limit and It all
                requires you to take action. An at home body transformation is
                something many people out there who don't have gyms have to do &
                It's just been the best journey for me and I'm
              </p>
            </div>

            <div
              className="comment__box"
              style={{
                padding: "15px 0px",
              }}
            >
              <div className="comment__bar d__flex">
                <img
                  src="https://yt3.ggpht.com/KtRVDKFfXO96nEoglJ_epy1clktDJNKJjEPtNmvIBsNLuCi9yGMuyK3MywMiqJadqsFPxJbAhA=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                  className="chaneel__icon"
                  style={{
                    borderRadius: "50%",
                  }}
                />
                <input
                  type="text"
                  className="comment__value"
                  placeholder="Add a public comment..."
                  style={{
                    width: "100%",
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    borderBottom: "1px solid rgb(51 51 51 / 33%)",
                    margin: "0px 20px",
                    fontSize: "1rem",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="videos__watch right__bar"
            style={{
              flex: ".4",
            }}
          >
            <a href="https://www.youtube.com/watch?v=EMCQrwsrh_o">
              <div
                className="single__suggestion d__flex"
                style={{
                  padding: "10px 20px",
                }}
              >
                <div className="thumb__img relative d__flex">
                  <img
                    src="https://i.ytimg.com/vi/EMCQrwsrh_o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDf0PsVI64CILH7o7EscE37Mylf6g"
                    alt=""
                    className="thumb__img pointer"
                  />
                  <div
                    className="video__duration absolute pointer"
                    style={{
                      bottom: "7%",
                      right: "2%",
                      padding: "5px 2px",
                      backgroundColor: "#000",
                      color: "#fff",
                      fontSize: "15px",
                    }}
                  >
                    10.47
                  </div>
                </div>
                <div
                  className="video__title d__flex pointer"
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <span
                    className="title"
                    style={{
                      fontSize: "15px",
                      padding: "0px 15px",
                    }}
                  >
                    নতুনরা জিমে এসে যেভাবে ব্যায়াম শুরু করবেন এবং কি কি
                    খাবেন|First Day at GYM|Workout For Beginners
                  </span>
                  <span
                    className="chaneel__name"
                    style={{
                      fontSize: "14px",
                      padding: "5px 15px",
                      color: "#111",
                    }}
                  >
                    T H R Fitness
                  </span>
                  <span
                    className="timestamps"
                    style={{
                      fontSize: "14px",
                      padding: "0px 15px",
                      color: "#111",
                    }}
                  >
                    1.2M views . 1year ago
                  </span>
                </div>
              </div>
            </a>

            <div
              className="single__suggestion d__flex"
              style={{
                padding: "10px 20px",
              }}
            >
              <div className="thumb__img relative d__flex">
                <img
                  src="https://i.ytimg.com/vi/EMCQrwsrh_o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDf0PsVI64CILH7o7EscE37Mylf6g"
                  alt=""
                  className="thumb__img pointer"
                />
                <div
                  className="video__duration absolute pointer"
                  style={{
                    bottom: "7%",
                    right: "2%",
                    padding: "5px 2px",
                    backgroundColor: "#000",
                    color: "#fff",
                    fontSize: "15px",
                  }}
                >
                  10.47
                </div>
              </div>
              <div
                className="video__title d__flex pointer"
                style={{
                  flexDirection: "column",
                }}
              >
                <span
                  className="title"
                  style={{
                    fontSize: "15px",
                    padding: "0px 15px",
                  }}
                >
                  নতুনরা জিমে এসে যেভাবে ব্যায়াম শুরু করবেন এবং কি কি
                  খাবেন|First Day at GYM|Workout For Beginners
                </span>
                <span
                  className="chaneel__name"
                  style={{
                    fontSize: "14px",
                    padding: "5px 15px",
                    color: "#111",
                  }}
                >
                  T H R Fitness
                </span>
                <span
                  className="timestamps"
                  style={{
                    fontSize: "14px",
                    padding: "0px 15px",
                    color: "#111",
                  }}
                >
                  1.2M views . 1year ago
                </span>
              </div>
            </div>

            <div
              className="single__suggestion d__flex"
              style={{
                padding: "10px 20px",
              }}
            >
              <div className="thumb__img relative d__flex">
                <img
                  src="https://i.ytimg.com/vi/EMCQrwsrh_o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDf0PsVI64CILH7o7EscE37Mylf6g"
                  alt=""
                  className="thumb__img pointer"
                />
                <div
                  className="video__duration absolute pointer"
                  style={{
                    bottom: "7%",
                    right: "2%",
                    padding: "5px 2px",
                    backgroundColor: "#000",
                    color: "#fff",
                    fontSize: "15px",
                  }}
                >
                  10.47
                </div>
              </div>
              <div
                className="video__title d__flex pointer"
                style={{
                  flexDirection: "column",
                }}
              >
                <span
                  className="title"
                  style={{
                    fontSize: "15px",
                    padding: "0px 15px",
                  }}
                >
                  নতুনরা জিমে এসে যেভাবে ব্যায়াম শুরু করবেন এবং কি কি
                  খাবেন|First Day at GYM|Workout For Beginners
                </span>
                <span
                  className="chaneel__name"
                  style={{
                    fontSize: "14px",
                    padding: "5px 15px",
                    color: "#111",
                  }}
                >
                  T H R Fitness
                </span>
                <span
                  className="timestamps"
                  style={{
                    fontSize: "14px",
                    padding: "0px 15px",
                    color: "#111",
                  }}
                >
                  1.2M views . 1year ago
                </span>
              </div>
            </div>

            <div
              className="single__suggestion d__flex"
              style={{
                padding: "10px 20px",
              }}
            >
              <div className="thumb__img relative d__flex">
                <img
                  src="https://i.ytimg.com/vi/EMCQrwsrh_o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDf0PsVI64CILH7o7EscE37Mylf6g"
                  alt=""
                  className="thumb__img pointer"
                />
                <div
                  className="video__duration absolute pointer"
                  style={{
                    bottom: "7%",
                    right: "2%",
                    padding: "5px 2px",
                    backgroundColor: "#000",
                    color: "#fff",
                    fontSize: "15px",
                  }}
                >
                  10.47
                </div>
              </div>
              <div
                className="video__title d__flex pointer"
                style={{
                  flexDirection: "column",
                }}
              >
                <span
                  className="title"
                  style={{
                    fontSize: "15px",
                    padding: "0px 15px",
                  }}
                >
                  নতুনরা জিমে এসে যেভাবে ব্যায়াম শুরু করবেন এবং কি কি
                  খাবেন|First Day at GYM|Workout For Beginners
                </span>
                <span
                  className="chaneel__name"
                  style={{
                    fontSize: "14px",
                    padding: "5px 15px",
                    color: "#111",
                  }}
                >
                  T H R Fitness
                </span>
                <span
                  className="timestamps"
                  style={{
                    fontSize: "14px",
                    padding: "0px 15px",
                    color: "#111",
                  }}
                >
                  1.2M views . 1year ago
                </span>
              </div>
            </div>

            <div
              className="single__suggestion d__flex"
              style={{
                padding: "10px 20px",
              }}
            >
              <div className="thumb__img relative d__flex">
                <img
                  src="https://i.ytimg.com/vi/EMCQrwsrh_o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDf0PsVI64CILH7o7EscE37Mylf6g"
                  alt=""
                  className="thumb__img pointer"
                />
                <div
                  className="video__duration absolute pointer"
                  style={{
                    bottom: "7%",
                    right: "2%",
                    padding: "5px 2px",
                    backgroundColor: "#000",
                    color: "#fff",
                    fontSize: "15px",
                  }}
                >
                  10.47
                </div>
              </div>
              <div
                className="video__title d__flex pointer"
                style={{
                  flexDirection: "column",
                }}
              >
                <span
                  className="title"
                  style={{
                    fontSize: "15px",
                    padding: "0px 15px",
                  }}
                >
                  নতুনরা জিমে এসে যেভাবে ব্যায়াম শুরু করবেন এবং কি কি
                  খাবেন|First Day at GYM|Workout For Beginners
                </span>
                <span
                  className="chaneel__name"
                  style={{
                    fontSize: "14px",
                    padding: "5px 15px",
                    color: "#111",
                  }}
                >
                  T H R Fitness
                </span>
                <span
                  className="timestamps"
                  style={{
                    fontSize: "14px",
                    padding: "0px 15px",
                    color: "#111",
                  }}
                >
                  1.2M views . 1year ago
                </span>
              </div>
            </div>

            <div
              className="single__suggestion d__flex"
              style={{
                padding: "20px",
              }}
            >
              <div className="thumb__img relative d__flex">
                <img
                  src="https://i.ytimg.com/vi/EMCQrwsrh_o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDf0PsVI64CILH7o7EscE37Mylf6g"
                  alt=""
                  className="thumb__img pointer"
                />
                <div
                  className="video__duration absolute pointer"
                  style={{
                    bottom: "7%",
                    right: "2%",
                    padding: "5px 2px",
                    backgroundColor: "#000",
                    color: "#fff",
                    fontSize: "15px",
                  }}
                >
                  10.47
                </div>
              </div>
              <div
                className="video__title d__flex pointer"
                style={{
                  flexDirection: "column",
                }}
              >
                <span
                  className="title"
                  style={{
                    fontSize: "15px",
                    padding: "0px 15px",
                  }}
                >
                  নতুনরা জিমে এসে যেভাবে ব্যায়াম শুরু করবেন এবং কি কি
                  খাবেন|First Day at GYM|Workout For Beginners
                </span>
                <span
                  className="chaneel__name"
                  style={{
                    fontSize: "14px",
                    padding: "5px 15px",
                    color: "#111",
                  }}
                >
                  T H R Fitness
                </span>
                <span
                  className="timestamps"
                  style={{
                    fontSize: "14px",
                    padding: "0px 15px",
                    color: "#111",
                  }}
                >
                  1.2M views . 1year ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Watch;
