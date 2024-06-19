import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ListingItem.module.css";

export type ListingItemType = {
  className?: string;
  listingImage?: string;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;
  showBestTime?: boolean;

  /** Action props */
  onListingItemContainerClick?: () => void;
};

const ListingItem: FunctionComponent<ListingItemType> = ({
  className = "",
  listingImage,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  showBestTime,
  onListingItemContainerClick,
}) => {
  const navigate = useNavigate();

  const onListingItemContainerClick1 = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <div
      className={[styles.listingItem, className].join(" ")}
      onClick={onListingItemContainerClick}
    >
      <img className={styles.listingImageIcon} alt="" src={listingImage} />
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
            <div className={styles.listingTitle}>{listingTitle}</div>
            <div className={styles.listingSubtitle}>{listingSubtitle}</div>
          </div>
          <div className={styles.ratingCont}>
            <div className={styles.rating}>{rating}</div>
            <img className={styles.starIcon} alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.pricePerNight}>
            <div className={styles.rating}>{price}</div>
            <div className={styles.night}>/night</div>
          </div>
          {showBestTime && (
            <button className={styles.bestTime}>
              <img className={styles.trendIcon} alt="" src="/trend-icon.svg" />
              <div className={styles.priceChart}>Price chart</div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
