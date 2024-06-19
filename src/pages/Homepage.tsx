import { FunctionComponent, useCallback } from "react";
import "antd/dist/antd.min.css";
import { AutoComplete } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ListingItem from "../components/ListingItem";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onListingItemContainerClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
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
          <ListingItem
            listingImage="/image@2x.png"
            listingTitle="Brightwoods Cabin"
            listingSubtitle="Bridlepath, Ontario, Canada"
            rating="4.9"
            price="$658"
            showBestTime
            onListingItemContainerClick={onListingItemContainerClick}
          />
          <ListingItem
            listingImage="/image1@2x.png"
            listingTitle="Urban Loft"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="4.5"
            price="$410"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image2@2x.png"
            listingTitle="Forestville Cottages"
            listingSubtitle="Simcoe, Ontario Canada"
            rating="5.0"
            price="$325"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image3@2x.png"
            listingTitle="Unionville Logde"
            listingSubtitle="Markham, Ontario Canada"
            rating="4.6"
            price="$485"
            showBestTime
          />
          <ListingItem
            listingImage="/image4@2x.png"
            listingTitle="Missisuaga Aistream"
            listingSubtitle="Missisauga, Ontario, Canada"
            rating="4.8"
            price="$502"
            showBestTime
          />
          <ListingItem
            listingImage="/image5@2x.png"
            listingTitle="Niagara Homes"
            listingSubtitle="Niagara, Ontario, Canada"
            rating="4.9"
            price="$655"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image6@2x.png"
            listingTitle="Sunny Estate"
            listingSubtitle="Barcort, Ontario Canada"
            rating="5.0"
            price="$320"
            showBestTime
          />
          <ListingItem
            listingImage="/image7@2x.png"
            listingTitle="Lawrence Hills"
            listingSubtitle="Lawrence, Ontario Canada"
            rating="5.0"
            price="$350"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image8@2x.png"
            listingTitle="Simcoe Lake Lodge"
            listingSubtitle="Simcoe, Ontario, Canada"
            rating="5.0"
            price="$395"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image9@2x.png"
            listingTitle="Wasaga Beach Home"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="5.0"
            price="$385"
            showBestTime
          />
          <ListingItem
            listingImage="/image10@2x.png"
            listingTitle="Banff Hills"
            listingSubtitle="Banff, Alberta, Canada"
            rating="5.0"
            price="$385"
            showBestTime
          />
          <ListingItem
            listingImage="/image11@2x.png"
            listingTitle="Creemore Canada"
            listingSubtitle="Creemore, Alberta, Canada"
            rating="5.0"
            price="$385"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image12@2x.png"
            listingTitle="Kawartha Lakes"
            listingSubtitle="Kawartha, Alberta,  Canada"
            rating="5.0"
            price="$385"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image13@2x.png"
            listingTitle="Revelstoke Cabin"
            listingSubtitle="Revelstoke, Alberta, Canada"
            rating="5.0"
            price="$385"
            showBestTime
          />
          <ListingItem
            listingImage="/image14@2x.png"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            price="$385"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image15@2x.png"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            price="$385"
            showBestTime={false}
          />
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
              <div className={styles.helpCentre}>Help Centre</div>
              <div className={styles.helpCentre}>AirCover</div>
              <div className={styles.helpCentre}>Combating discrimination</div>
              <div className={styles.helpCentre}>
                Supporting people with disabilities
              </div>
              <div className={styles.helpCentre}>Cencellation options</div>
              <div className={styles.helpCentre}>
                Report neighbourhood concern
              </div>
            </div>
            <div className={styles.supportParent}>
              <div className={styles.support}>Hosting</div>
              <div className={styles.helpCentre}>Local home</div>
              <div className={styles.helpCentre}>Cover for hosts</div>
              <div className={styles.helpCentre}>Hosting resources</div>
              <div className={styles.helpCentre}>Community forum</div>
              <div className={styles.helpCentre}>Hosting responsibly</div>
            </div>
            <div className={styles.supportParent}>
              <div className={styles.support}>Localhost</div>
              <div className={styles.helpCentre}>Newsroom</div>
              <div className={styles.helpCentre}>New Features</div>
              <div className={styles.helpCentre}>Careers</div>
              <div className={styles.helpCentre}>Investres</div>
              <div className={styles.helpCentre}>Gift cards</div>
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