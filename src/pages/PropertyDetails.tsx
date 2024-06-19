import { FunctionComponent } from "react";
import Header from "../components/Header";
import styles from "./PropertyDetails.module.css";

const PropertyDetails: FunctionComponent = () => {
  return (
    <div className={styles.propertyDetails}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <div className={styles.listingHeroParent}>
        <div className={styles.listingHero}>
          <div className={styles.frameParent}>
            <img className={styles.frameChild} alt="" src="/frame-9@2x.png" />
            <div className={styles.frameGroup}>
              <img className={styles.frameItem} alt="" src="/frame-46@2x.png" />
              <img className={styles.frameItem} alt="" src="/frame-47@2x.png" />
              <img className={styles.frameItem} alt="" src="/frame-48@2x.png" />
              <img className={styles.frameItem} alt="" src="/frame-49@2x.png" />
              <div className={styles.frameContainer}>
                <img
                  className={styles.frameChild2}
                  alt=""
                  src="/frame-50@2x.png"
                />
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.frameParent4}>
                    <div className={styles.brightwoodsCabinParent}>
                      <div className={styles.brightwoodsCabin}>
                        Brightwoods Cabin
                      </div>
                      <div className={styles.bridlepathOntarioCanada}>
                        Bridlepath, Ontario, Canada
                      </div>
                    </div>
                    <img
                      className={styles.heartIcon}
                      alt=""
                      src="/hearticon1.svg"
                    />
                  </div>
                  <div className={styles.vectorGroup}>
                    <div className={styles.parent}>
                      <div className={styles.div}>5.0</div>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector1.svg"
                      />
                    </div>
                    <div className={styles.reviewsWrapper}>
                      <div className={styles.reviews}>200 Reviews</div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.welcomeToOur}
                >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.groupParent}>
                  <div className={styles.group}>
                    <b className={styles.b}>$658</b>
                    <div className={styles.night}>/night</div>
                  </div>
                  <div className={styles.icontrendParent}>
                    <div className={styles.icontrend}>
                      <div className={styles.iconParent}>
                        <img className={styles.icon} alt="" src="/icon.svg" />
                        <div className={styles.groupChild} />
                      </div>
                    </div>
                    <div className={styles.bestTimeTo}>Best time to Book</div>
                  </div>
                </div>
                <button className={styles.searchFlightsButton}>
                  <div className={styles.button}>Book this home</div>
                </button>
              </div>
            </div>
            <div className={styles.hostedByParent}>
              <div className={styles.bestTimeTo}>Hosted by:</div>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <div className={styles.michelleWardParent}>
                  <div className={styles.michelleWard}>Michelle Ward</div>
                  <div className={styles.joinedInMay}>Joined in May 2021</div>
                </div>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector2.svg"
                  />
                  <div className={styles.superhost}>Superhost</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.listingDetailsSection}>
          <div className={styles.listingDescription}>
            <div className={styles.brightwoodsCabin}>About this home</div>
            <div className={styles.frameParent7}>
              <div className={styles.welcomeToBrightwoodsCabinParent}>
                <div className={styles.welcomeToBrightwoodsContainer}>
                  <p className={styles.welcomeToBrightwoods}>
                    Welcome to Brightwoods Cabin, your idyllic retreat nestled
                    in the heart of Bridlepath, Ontario! Our cozy cabin,
                    surrounded by the tranquility of nature's embrace, is
                    designed to provide the ultimate relaxing getaway.
                  </p>
                  <p className={styles.welcomeToBrightwoods}>
                    <b className={styles.livingSpace}>{`Living Space: `}</b>
                    <span>
                      This charming cabin boasts a spacious living area adorned
                      with rustic decor and modern amenities. Enjoy the warmth
                      of the wood-burning fireplace, relax on the plush sofas,
                      and make yourself at home with our entertainment center
                      featuring a flat-screen TV, WiFi, and more.
                    </span>
                  </p>
                  <p className={styles.welcomeToBrightwoods}>
                    <b className={styles.livingSpace}>Bedrooms:</b>
                    <span>
                      {" "}
                      With 3 beautifully appointed bedrooms, our cabin
                      comfortably accommodates up to [number of guests]. Each
                      room is furnished with luxurious bedding and unique
                      woodland-inspired touches to ensure a restful slumber.
                    </span>
                  </p>
                  <p className={styles.welcomeToBrightwoods}>
                    <b className={styles.livingSpace}>{`Kitchen & Dining:`}</b>
                    <span>
                      {" "}
                      Our fully-equipped kitchen offers everything you need to
                      prepare delicious home-cooked meals. The open dining area
                      provides a welcoming space to enjoy meals with friends and
                      family.
                    </span>
                  </p>
                  <p className={styles.welcomeToBrightwoods}>
                    <b className={styles.livingSpace}>Bathrooms:</b>
                    <span>
                      {" "}
                      2 modern bathrooms stocked with fresh towels, toiletries,
                      and all essential amenities add to your convenience.
                    </span>
                  </p>
                  <p className={styles.welcomeToBrightwoods}>
                    <b className={styles.livingSpace}>Outdoor Space:</b>
                    <span>
                      {" "}
                      Step outside to a serene outdoor setting. Whether it's a
                      morning coffee on the porch, a BBQ in the yard, or a
                      soothing evening by the fire pit, the beauty of Bridlepath
                      is at your doorstep.
                    </span>
                  </p>
                  <p className={styles.welcomeToBrightwoods}>
                    <b className={styles.livingSpace}>Location:</b>
                    <span>
                      {" "}
                      Located just minutes from [local attractions, trails,
                      dining, shopping], our cabin offers the perfect base to
                      explore the best of the region or simply unwind in
                      seclusion.
                    </span>
                  </p>
                  <p className={styles.welcomeToBrightwoods}>
                    <b className={styles.livingSpace}>Hosted with Love:</b>
                    <span>
                      {" "}
                      We take pride in hosting our guests and are committed to
                      making your stay unforgettable. We're just a call or
                      message away should you need anything during your stay.
                    </span>
                  </p>
                  <p className={styles.comeBeOur}>
                    Come, be our guest at [Cabin Name], and experience a piece
                    of woodland serenity right here in Bridlepath, Ontario. Book
                    now and make yourself at home!
                  </p>
                </div>
                <div className={styles.button1}>Show more</div>
              </div>
              <div className={styles.detailscardParent}>
                <div className={styles.detailscard}>
                  <img
                    className={styles.detailscardChild}
                    alt=""
                    src="/frame-65.svg"
                  />
                  <div className={styles.dedicatedWorkspaceParent}>
                    <div className={styles.michelleWard}>
                      Dedicated workspace
                    </div>
                    <div className={styles.aPrivateRoom}>
                      A private room equipped with WiFi
                    </div>
                  </div>
                </div>
                <div className={styles.detailscard}>
                  <img
                    className={styles.detailscardChild}
                    alt=""
                    src="/frame-651.svg"
                  />
                  <div className={styles.dedicatedWorkspaceParent}>
                    <div className={styles.michelleWard}>Self check-in</div>
                    <div className={styles.aPrivateRoom}>
                      Check in with just your phone
                    </div>
                  </div>
                </div>
                <div className={styles.detailscard}>
                  <img
                    className={styles.detailscardChild}
                    alt=""
                    src="/frame-652.svg"
                  />
                  <div className={styles.dedicatedWorkspaceParent}>
                    <div className={styles.michelleWard}>Free cancellation</div>
                    <div className={styles.aPrivateRoom}>Cancel anytime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.locationAmenities}>
            <div className={styles.amenitiesParent}>
              <div className={styles.amenities}>Amenities</div>
              <div className={styles.frameParent8}>
                <div className={styles.amenitiessection1Parent}>
                  <div className={styles.amenitiessection1}>
                    <div className={styles.mdilakeParent}>
                      <img
                        className={styles.mdilakeIcon}
                        alt=""
                        src="/mdilake.svg"
                      />
                      <div className={styles.lakeside}>Lakeside</div>
                    </div>
                    <div className={styles.mdilakeParent}>
                      <img
                        className={styles.tablertoolsKitchen2Icon}
                        alt=""
                        src="/tablertoolskitchen2.svg"
                      />
                      <div className={styles.kitchen}>Kitchen</div>
                    </div>
                    <div className={styles.mdilakeParent}>
                      <img
                        className={styles.tablertoolsKitchen2Icon}
                        alt=""
                        src="/materialsymbolsnestcamiqoutdooroutline.svg"
                      />
                      <div className={styles.lakeside}>
                        Security cameras on property
                      </div>
                    </div>
                    <div className={styles.mdilakeParent}>
                      <img
                        className={styles.tablertoolsKitchen2Icon}
                        alt=""
                        src="/ionwifi.svg"
                      />
                      <div className={styles.lakeside}>Wifi</div>
                    </div>
                  </div>
                  <div className={styles.amenitiessection1}>
                    <div className={styles.mdilakeParent}>
                      <img
                        className={styles.tablertoolsKitchen2Icon}
                        alt=""
                        src="/phcar.svg"
                      />
                      <div className={styles.lakeside}>Free parking</div>
                    </div>
                    <div className={styles.mdilakeParent}>
                      <img
                        className={styles.tablertoolsKitchen2Icon}
                        alt=""
                        src="/cilshower.svg"
                      />
                      <div className={styles.lakeside}>Outdoor shower</div>
                    </div>
                    <div className={styles.mdilakeParent}>
                      <img
                        className={styles.tablertoolsKitchen2Icon}
                        alt=""
                        src="/materialsymbolswatervocoutlinerounded.svg"
                      />
                      <div className={styles.lakeside}>Hot water</div>
                    </div>
                    <div className={styles.mdilakeParent}>
                      <img
                        className={styles.tablertoolsKitchen2Icon}
                        alt=""
                        src="/covidpersonalhygienehandliquidsoap.svg"
                      />
                      <div className={styles.lakeside}>Shampoo</div>
                    </div>
                  </div>
                  <div className={styles.amenitiessection1}>
                    <div className={styles.mdilakeParent}>
                      <img
                        className={styles.tablertoolsKitchen2Icon}
                        alt=""
                        src="/phfireextinguisher.svg"
                      />
                      <div className={styles.lakeside}>Fire Extinguisher</div>
                    </div>
                    <div className={styles.mdilakeParent}>
                      <img
                        className={styles.tablertoolsKitchen2Icon}
                        alt=""
                        src="/streamlinefoodkitchenwarerefrigeratorfridgecookappliancescookingnutritionfreezerappliancefood.svg"
                      />
                      <div className={styles.lakeside}>Freezer</div>
                    </div>
                    <div className={styles.mdilakeParent}>
                      <img
                        className={styles.tablertoolsKitchen2Icon}
                        alt=""
                        src="/materialsymbolscoffeemakeroutline.svg"
                      />
                      <div className={styles.lakeside}>Coffee Maker</div>
                    </div>
                    <div className={styles.mdilakeParent}>
                      <img
                        className={styles.tablertoolsKitchen2Icon}
                        alt=""
                        src="/mdistove.svg"
                      />
                      <div className={styles.lakeside}>Glass stove</div>
                    </div>
                  </div>
                </div>
                <button className={styles.searchFlightsButton1}>
                  <div className={styles.button2}>Show all amenities</div>
                </button>
              </div>
            </div>
            <div className={styles.locationAmenitiesInner}>
              <div className={styles.frameParent9}>
                <div className={styles.frameParent10}>
                  <div className={styles.whereYoullBeParent}>
                    <div className={styles.div}>Where you’ll be</div>
                    <div className={styles.vectorGroup}>
                      <img
                        className={styles.vectorIcon3}
                        alt=""
                        src="/vector3.svg"
                      />
                      <div className={styles.lakeside}>The Bridle Path</div>
                    </div>
                  </div>
                  <div className={styles.weatherInfoParent}>
                    <div className={styles.weatherInfo}>
                      <img
                        className={styles.suncloudIcon}
                        alt=""
                        src="/suncloud.svg"
                      />
                      <div className={styles.weatherInfo1}>
                        <div className={styles.michelleWard}>20°C</div>
                        <div className={styles.joinedInMay}>Broken clouds</div>
                      </div>
                    </div>
                    <div className={styles.frameParent11}>
                      <div className={styles.sunParent}>
                        <img className={styles.sunIcon} alt="" src="/sun.svg" />
                        <div className={styles.cWrapper}>
                          <b className={styles.c}>23°C</b>
                        </div>
                      </div>
                      <div className={styles.cWrapper}>
                        <div className={styles.c}>Sun</div>
                        <div className={styles.c}>27 Aug</div>
                      </div>
                    </div>
                    <div className={styles.frameParent11}>
                      <div className={styles.sunParent}>
                        <img
                          className={styles.sunIcon}
                          alt=""
                          src="/suncloud1.svg"
                        />
                        <div className={styles.cWrapper}>
                          <b className={styles.c}>22°C</b>
                        </div>
                      </div>
                      <div className={styles.cWrapper}>
                        <div className={styles.c}>Mon</div>
                        <div className={styles.c}>28 Aug</div>
                      </div>
                    </div>
                    <div className={styles.frameParent11}>
                      <div className={styles.sunParent}>
                        <img className={styles.sunIcon} alt="" src="/sun.svg" />
                        <div className={styles.cWrapper}>
                          <b className={styles.c}>23°C</b>
                        </div>
                      </div>
                      <div className={styles.cWrapper}>
                        <div className={styles.c}>Tue</div>
                        <div className={styles.c}>29 Aug</div>
                      </div>
                    </div>
                    <div className={styles.frameParent11}>
                      <div className={styles.sunParent}>
                        <img
                          className={styles.sunIcon}
                          alt=""
                          src="/suncloud1.svg"
                        />
                        <div className={styles.cWrapper}>
                          <b className={styles.c}>20°C</b>
                        </div>
                      </div>
                      <div className={styles.cWrapper}>
                        <div className={styles.c}>Wed</div>
                        <div className={styles.c}>30 Aug</div>
                      </div>
                    </div>
                    <div className={styles.frameParent11}>
                      <div className={styles.sunParent}>
                        <img
                          className={styles.sunIcon}
                          alt=""
                          src="/suncloud1.svg"
                        />
                        <div className={styles.cWrapper}>
                          <b className={styles.c}>19°C</b>
                        </div>
                      </div>
                      <div className={styles.cWrapper}>
                        <div className={styles.c}>Thu</div>
                        <div className={styles.c}>31 Aug</div>
                      </div>
                    </div>
                    <div className={styles.frameParent11}>
                      <div className={styles.sunParent}>
                        <img className={styles.sunIcon} alt="" src="/sun.svg" />
                        <div className={styles.cWrapper}>
                          <b className={styles.c}>24°C</b>
                        </div>
                      </div>
                      <div className={styles.cWrapper}>
                        <div className={styles.c}>Fri</div>
                        <div className={styles.c}>1 Sep</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-1@2x.png"
                />
                <img
                  className={styles.frameChild3}
                  alt=""
                  src="/frame-92.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.reviewSection}>
          <div className={styles.reviewsParent}>
            <div className={styles.div}>Reviews</div>
            <div className={styles.button3}>View all</div>
          </div>
          <div className={styles.reviewcardParent}>
            <div className={styles.reviewcard}>
              <div className={styles.groupParent}>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.frameChild4}
                    alt=""
                    src="/ellipse-12@2x.png"
                  />
                  <div className={styles.johnnyCashParent}>
                    <div className={styles.michelleWard}>Johnny Cash</div>
                    <div className={styles.joinedInMay}>June 2023</div>
                  </div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>5.0</div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
              </div>
              <div className={styles.michellesPlaceWas}>
                Michelle’s place was so great and definitely the perfect place
                for our long weekend. The lake is amazing!
              </div>
            </div>
            <div className={styles.reviewcard}>
              <div className={styles.groupParent}>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.frameChild4}
                    alt=""
                    src="/ellipse-121@2x.png"
                  />
                  <div className={styles.johnnyCashParent}>
                    <div className={styles.michelleWard}>Yuta Watanabe</div>
                    <div className={styles.joinedInMay}>May 2023</div>
                  </div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>4.5</div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
              </div>
              <div className={styles.michellesPlaceWas}>
                The location is perfect. I love the lake so much!!! This is one
                of the best stays we had for a while. Definitely recommended.
              </div>
            </div>
            <div className={styles.reviewcard}>
              <div className={styles.groupParent}>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.frameChild4}
                    alt=""
                    src="/ellipse-122@2x.png"
                  />
                  <div className={styles.johnnyCashParent}>
                    <div className={styles.michelleWard}>Shane Willis</div>
                    <div className={styles.joinedInMay}>December 2022</div>
                  </div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>4.8</div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
              </div>
              <div className={styles.michellesPlaceWas}>
                A great place overall. One of the nicest place in town for sure.
                I will come back in the next few months with my family :)
              </div>
            </div>
          </div>
        </div>
        <div className={styles.reviewSection}>
          <div className={styles.reviewsParent}>
            <div className={styles.div}>Similar stays</div>
            <div className={styles.button3}>View all</div>
          </div>
          <div className={styles.staycardParent}>
            <div className={styles.staycard}>
              <div className={styles.frameParent20}>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.vectorIcon7}
                    alt=""
                    src="/superhost-icon.svg"
                  />
                  <div className={styles.superhost}>Superhost</div>
                </div>
                <img
                  className={styles.heartIcon1}
                  alt=""
                  src="/hearticon2.svg"
                />
              </div>
              <div className={styles.frameParent21}>
                <div className={styles.frameParent3}>
                  <div className={styles.brightwoodsEstateParent}>
                    <div className={styles.div}>Missisuaga Aistream</div>
                    <div className={styles.simcoeOntarioCanada}>
                      Missisauga, Ontario, Canada
                    </div>
                  </div>
                  <div className={styles.parent3}>
                    <div className={styles.div}>4.8</div>
                    <img
                      className={styles.vectorIcon8}
                      alt=""
                      src="/star-icon.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.parent4}>
                    <div className={styles.div}>$502</div>
                    <div className={styles.simcoeOntarioCanada}>/night</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.staycard}>
              <div className={styles.frameParent23}>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.vectorIcon7}
                    alt=""
                    src="/superhost-icon.svg"
                  />
                  <div className={styles.superhost}>Superhost</div>
                </div>
                <img
                  className={styles.heartIcon1}
                  alt=""
                  src="/hearticon2.svg"
                />
              </div>
              <div className={styles.frameParent21}>
                <div className={styles.frameParent3}>
                  <div className={styles.brightwoodsEstateParent}>
                    <div className={styles.div}>Urban Loft</div>
                    <div className={styles.div}>Urban Loft</div>
                  </div>
                  <div className={styles.parent3}>
                    <div className={styles.div}>4.8</div>
                    <img
                      className={styles.vectorIcon8}
                      alt=""
                      src="/star-icon.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.parent4}>
                    <div className={styles.div}>$502</div>
                    <div className={styles.simcoeOntarioCanada}>/night</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.staycard}>
              <div className={styles.frameParent26}>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.vectorIcon7}
                    alt=""
                    src="/superhost-icon.svg"
                  />
                  <div className={styles.superhost}>Superhost</div>
                </div>
                <img
                  className={styles.heartIcon1}
                  alt=""
                  src="/hearticon2.svg"
                />
              </div>
              <div className={styles.frameParent21}>
                <div className={styles.frameParent3}>
                  <div className={styles.brightwoodsEstateParent}>
                    <div className={styles.div}>Forestville Cottages</div>
                    <div className={styles.simcoeOntarioCanada}>
                      Simcoe, Ontario Canada
                    </div>
                  </div>
                  <div className={styles.parent3}>
                    <div className={styles.div}>4.8</div>
                    <img
                      className={styles.vectorIcon8}
                      alt=""
                      src="/star-icon.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.parent4}>
                    <div className={styles.div}>$502</div>
                    <div className={styles.simcoeOntarioCanada}>/night</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.frameParent29}>
            <div className={styles.supportParent}>
              <div className={styles.support}>Support</div>
              <div className={styles.lakeside}>Help Centre</div>
              <div className={styles.lakeside}>AirCover</div>
              <div className={styles.lakeside}>Combating discrimination</div>
              <div className={styles.lakeside}>
                Supporting people with disabilities
              </div>
              <div className={styles.lakeside}>Cencellation options</div>
              <div className={styles.lakeside}>
                Report neighbourhood concern
              </div>
            </div>
            <div className={styles.supportParent}>
              <div className={styles.support}>Hosting</div>
              <div className={styles.lakeside}>Local home</div>
              <div className={styles.lakeside}>Cover for hosts</div>
              <div className={styles.lakeside}>Hosting resources</div>
              <div className={styles.lakeside}>Community forum</div>
              <div className={styles.lakeside}>Hosting responsibly</div>
            </div>
            <div className={styles.supportParent}>
              <div className={styles.support}>Localhost</div>
              <div className={styles.lakeside}>Newsroom</div>
              <div className={styles.lakeside}>New Features</div>
              <div className={styles.lakeside}>Careers</div>
              <div className={styles.lakeside}>Investres</div>
              <div className={styles.lakeside}>Gift cards</div>
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

export default PropertyDetails;