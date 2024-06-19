import { FunctionComponent, useCallback } from "react";
import "antd/dist/antd.min.css";
import { AutoComplete } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onListingItemContainerClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <img className={styles.logoIcon} alt="" src="/logo.svg" />
          <div className={styles.navLinks}>
            <div className={styles.home}>Home</div>
            <div className={styles.home}>Stays</div>
            <div className={styles.home}>Become a host</div>
          </div>
          <div className={styles.loginSection}>
            <img
              className={styles.notificationsIcon}
              alt=""
              src="/notifications@2x.png"
            />
            <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.heroContainer}>
        <div className={styles.heroContainerInner}>
          <div className={styles.frameParent}>
            <div className={styles.findAHostForEveryJourneyParent}>
              <b className={styles.findAHostContainer}>
                <span>{`Find a `}</span>
                <span className={styles.host}>host</span>
                <span> for every journey</span>
              </b>
              <div className={styles.discoverTheBest}>
                Discover the best local rental properties that fits your every
                travel needs
              </div>
            </div>
            <div className={styles.form}>
              <AutoComplete
                className={styles.autocompletebasic}
                placeholder="Accommodation"
                size="large"
                options={[
                  { value: "Toronto" },
                  { value: "San Francisco" },
                  { value: "Singapore" },
                ]}
                filterOption={(inputValue: any, option: any) =>
                  option.value
                    .toUpperCase()
                    .indexOf(inputValue?.toUpperCase()) !== -1
                }
              />
              <div className={styles.grouped}>
                <div className={styles.labelParent}>
                  <div className={styles.label}>Check-in</div>
                  <div className={styles.icon}>
                    <img
                      className={styles.calendartodayfilledIcon}
                      alt=""
                      src="/calendartodayfilled.svg"
                    />
                  </div>
                </div>
                <div className={styles.labelParent}>
                  <div className={styles.label}>Check-out</div>
                  <div className={styles.icon}>
                    <img
                      className={styles.calendartodayfilledIcon}
                      alt=""
                      src="/calendartodayfilled.svg"
                    />
                  </div>
                </div>
                <div className={styles.labelContainer}>
                  <div className={styles.label}>Guest</div>
                  <img className={styles.iconuser} alt="" src="/iconuser.svg" />
                </div>
              </div>
              <button className={styles.searchButton}>
                <img
                  className={styles.iconsearch}
                  alt=""
                  src="/iconsearch.svg"
                />
                <div className={styles.button}>Search</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.staysSection}>
        <div className={styles.searchSectionHeader}>
          <div className={styles.staysNearbyParent}>
            <div className={styles.staysNearby}>Stays nearby:</div>
            <div className={styles.torontoOntario}>Toronto Ontario</div>
          </div>
          <div className={styles.layoutSelection}>
            <div className={styles.bentoMenu1Wrapper}>
              <img
                className={styles.bentoMenu1Icon}
                alt=""
                src="/bento-menu1.svg"
              />
            </div>
            <div className={styles.mapWrapper}>
              <img className={styles.bentoMenu1Icon} alt="" src="/map.svg" />
            </div>
          </div>
        </div>
        <div className={styles.homes}>
          <div
            className={styles.listingItem}
            onClick={onListingItemContainerClick}
          >
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Brightwoods Cabin</div>
                  <div className={styles.listingSubtitle}>
                    Bridlepath, Ontario, Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.rating}>4.9</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.rating}>$658</div>
                  <div className={styles.night}>/night</div>
                </div>
                <button className={styles.bestTime}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem1}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image1@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Urban Loft</div>
                  <div className={styles.listingSubtitle}>
                    Georgina Bay, Ontario, Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.rating}>4.5</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.rating}>$410</div>
                  <div className={styles.night}>/night</div>
                </div>
                <button className={styles.bestTime1}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem1}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image2@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>
                    Forestville Cottages
                  </div>
                  <div className={styles.listingSubtitle}>
                    Simcoe, Ontario Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.rating}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.rating}>$325</div>
                  <div className={styles.night}>/night</div>
                </div>
                <button className={styles.bestTime1}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem1}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image3@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Unionville Logde</div>
                  <div className={styles.listingSubtitle}>
                    Markham, Ontario Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.rating}>4.6</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.rating}>$485</div>
                  <div className={styles.night}>/night</div>
                </div>
                <button className={styles.bestTime}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem1}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image4@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Missisuaga Aistream</div>
                  <div className={styles.listingSubtitle}>
                    Missisauga, Ontario, Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.rating}>4.8</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.rating}>$502</div>
                  <div className={styles.night}>/night</div>
                </div>
                <button className={styles.bestTime}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem1}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image5@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Niagara Homes</div>
                  <div className={styles.listingSubtitle}>
                    Niagara, Ontario, Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.rating}>4.9</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.rating}>$655</div>
                  <div className={styles.night}>/night</div>
                </div>
                <button className={styles.bestTime1}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem1}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image6@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Sunny Estate</div>
                  <div className={styles.listingSubtitle}>
                    Barcort, Ontario Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.rating}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.rating}>$320</div>
                  <div className={styles.night}>/night</div>
                </div>
                <button className={styles.bestTime}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem1}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image7@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Lawrence Hills</div>
                  <div className={styles.listingSubtitle}>
                    Lawrence, Ontario Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.rating}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.rating}>$350</div>
                  <div className={styles.night}>/night</div>
                </div>
                <button className={styles.bestTime1}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem1}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image8@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Simcoe Lake Lodge</div>
                  <div className={styles.listingSubtitle}>
                    Simcoe, Ontario, Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.rating}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.rating}>$395</div>
                  <div className={styles.night}>/night</div>
                </div>
                <button className={styles.bestTime1}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem1}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image9@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Wasaga Beach Home</div>
                  <div className={styles.listingSubtitle}>
                    Georgina Bay, Ontario, Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.rating}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.rating}>$385</div>
                  <div className={styles.night}>/night</div>
                </div>
                <button className={styles.bestTime}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem1}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image10@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Banff Hills</div>
                  <div className={styles.listingSubtitle}>
                    Banff, Alberta, Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.rating}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.rating}>$385</div>
                  <div className={styles.night}>/night</div>
                </div>
                <button className={styles.bestTime}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem1}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image11@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Creemore Canada</div>
                  <div className={styles.listingSubtitle}>
                    Creemore, Alberta, Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.rating}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.rating}>$385</div>
                  <div className={styles.night}>/night</div>
                </div>
                <button className={styles.bestTime1}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem1}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image12@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Kawartha Lakes</div>
                  <div className={styles.listingSubtitle12}>
                    Kawartha, Alberta, Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.rating}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.rating}>$385</div>
                  <div className={styles.night}>/night</div>
                </div>
                <button className={styles.bestTime1}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem1}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image13@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Revelstoke Cabin</div>
                  <div className={styles.listingSubtitle}>
                    Revelstoke, Alberta, Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.rating}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.rating}>$385</div>
                  <div className={styles.night}>/night</div>
                </div>
                <button className={styles.bestTime}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem1}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image14@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Brightwoods Estate</div>
                  <div className={styles.listingSubtitle}>
                    Brightwoods Estate
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.rating}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.rating}>$385</div>
                  <div className={styles.night}>/night</div>
                </div>
                <button className={styles.bestTime1}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem1}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image15@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Brightwoods Estate</div>
                  <div className={styles.listingSubtitle}>
                    Brightwoods Estate
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.rating}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.rating}>$385</div>
                  <div className={styles.night}>/night</div>
                </div>
                <button className={styles.bestTime1}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.showMoreButton}>
          <div className={styles.showMoreText}>Show more</div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.frameGroup}>
            <div className={styles.supportParent}>
              <div className={styles.support}>Support</div>
              <div className={styles.home}>Help Centre</div>
              <div className={styles.home}>AirCover</div>
              <div className={styles.home}>Combating discrimination</div>
              <div className={styles.home}>
                Supporting people with disabilities
              </div>
              <div className={styles.home}>Cencellation options</div>
              <div className={styles.home}>Report neighbourhood concern</div>
            </div>
            <div className={styles.supportParent}>
              <div className={styles.support}>Hosting</div>
              <div className={styles.home}>Local home</div>
              <div className={styles.home}>Cover for hosts</div>
              <div className={styles.home}>Hosting resources</div>
              <div className={styles.home}>Community forum</div>
              <div className={styles.home}>Hosting responsibly</div>
            </div>
            <div className={styles.supportParent}>
              <div className={styles.support}>Localhost</div>
              <div className={styles.home}>Newsroom</div>
              <div className={styles.home}>New Features</div>
              <div className={styles.home}>Careers</div>
              <div className={styles.home}>Investres</div>
              <div className={styles.home}>Gift cards</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.band}>
        <div className={styles.bandInner}>
          <div className={styles.localhostIncAllRightsResParent}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.privacyPolicyParent}>
              <div className={styles.localhostIncAll}>Privacy Policy</div>
              <div
                className={styles.localhostIncAll}
              >{`Terms & Conditions`}</div>
              <div className={styles.localhostIncAll}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;