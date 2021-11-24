import React from "react";

const Footer = ({ footer1 }) => {
  return (
    <footer>
      {footer1 === true && (
        <div className="footer1">
          <div className="restaurant-container">
            <img
              src="/image/end/Curalted restaurants.svg"
              alt="Curalted restaurants"
              className="banner-img"
            />
            <div className="title">Curalted restaurants</div>
            <div className="description">
              From small bites to big meals, we won't limit your appetite. Go
              ahead and order all you want.
            </div>
          </div>
          <div className="download-container">
            <img
              src="/image/end/More cool features available.svg"
              className="download-img"
              alt="More cool features available"
            />
            <div className="title">More cool features available</div>
            <div className="description">
              Download Good app to use other payment methods and enjoy seamless
              communication with your driver.
            </div>
            <div className="logo-store">
              <img
                src="/image/icon/logo-appstore.svg"
                alt="logo-appstore"
                className="download-logo"
              />
              <img
                src="/image/icon/logo-playstore.svg"
                alt="logo-playstore"
                className="download-logo"
              />
            </div>
          </div>
        </div>
      )}
      <div className="footer2">
        <div className="logo">
          <img
            src="/image/HatchfulExport-All/logo_transparent.png"
            alt="logo"
          />
        </div>
        <div className="web-link">
          <div className="about">
            <div className="link-item">
              <a href="/">Về GoodFood</a>
            </div>
            <div className="link-item">
              <a href="/">Về GoodFood</a>
            </div>
            <div className="link-item">
              <a href="/">Blog</a>
            </div>
          </div>
          <div className="open-store">
            <div className="link-item">
              <a href="/">Mở quán trên GoodFood</a>
            </div>
            <div className="link-item">
              <a href="/">Trở thành tài xế goodfood</a>
            </div>
          </div>
          <div className="help">
            <div className="link-item">
              <a href="/">Trung tâm hỗ trợ</a>
            </div>
            <div className="link-item">
              <a href="/">Câu hỏi thường gặp</a>
            </div>
          </div>
          <div className="social-icon">
            <span className="icon">
              <img
                src="/image/icon/5282541_fb_social media_facebook_facebook logo_social network_icon.svg"
                alt="media_facebook_facebook"
              />
            </span>
            <span className="icon">
              <img
                src="/image/icon/5335781_camera_instagram_social media_instagram logo_icon.svg"
                alt="media_instagram"
              />
            </span>
            <span className="icon">
              <img
                src="/image/icon/5282551_tweet_twitter_twitter logo_icon.svg"
                alt="5282551_tweet_twitter_twitter"
              />
            </span>
          </div>
        </div>
        <div className="logo-store">
          <img
            src="/image/icon/logo-appstore.svg"
            alt="logo-appstore"
            className="download-logo"
          />
          <img
            src="/image/icon/logo-playstore.svg"
            alt="logo-playstore"
            className="download-logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
