// src/components/HeroBanner/HeroBanner.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Shirt, BadgeCheck, Package, Star, Tag, Shirt as Hanger } from "lucide-react";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bannerSlideOne from "../../assets/images/banner-1.jpg";
import bannerSlideTwo from "../../assets/images/banner-2.jpg";

const getHeroSlides = (t) => [
  {
    image: bannerSlideOne,
    tag: "banner-1",
    label: t("hero.slide1.label"),
    title: t("hero.slide1.title"),
    description: t("hero.slide1.description"),
    buttonText: t("hero.slide1.button"),
    buttonHref: "/collection",
    badgeTag: t("hero.slide1.badgeTag"),
    badgeText: t("hero.slide1.badgeText"),
    features: [
      { icon: Shirt, text: t("hero.slide1.features.design") },
      { icon: BadgeCheck, text: t("hero.slide1.features.quality") },
      { icon: Package, text: t("hero.slide1.features.shipping") },
    ],
  },
  {
    image: bannerSlideTwo,
    tag: "banner-2",
    label: t("hero.slide2.label"),
    title: t("hero.slide2.title"),
    description: t("hero.slide2.description"),
    buttonText: t("hero.slide2.button"),
    buttonHref: "/autumn",
    badgeTag: t("hero.slide2.badgeTag"),
    badgeText: t("hero.slide2.badgeText"),
    features: [
      { icon: Star, text: t("hero.slide2.features.trends") },
      { icon: Tag, text: t("hero.slide2.features.prices") },
      { icon: Hanger, text: t("hero.slide2.features.styles") },
    ],
  },
];

const HeroBanner = () => {
  const { t } = useTranslation();
  const heroSlides = getHeroSlides(t);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-card">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            breakpoints={{
              1024: { slidesPerView: 1, spaceBetween: 0 },
            }}
          >
            {heroSlides.map(
              ({ image, label, title, description, buttonText, buttonHref, badgeTag, badgeText, features }, index) => (
                <SwiperSlide key={index}>
                  <div className="content" style={{ backgroundImage: `url(${image})` }}>
                    {badgeTag && (
                      <div className="content-badge">
                        <span className="content-badge-tag">{badgeTag}</span>
                        <span className="content-badge-text">{badgeText}</span>
                      </div>
                    )}

                    <div className="content-main">
                      {label && <p className="content-label">{label}</p>}

                      <h1 className="content-title">
                        {title.split("\n").map((line, i) => (
                          <span key={i}>{line}</span>
                        ))}
                      </h1>

                      {description && <p className="content-description">{description}</p>}

                      <a href={buttonHref} className="content-btn">
                        {buttonText}
                      </a>

                      {features && (
                        <ul className="content-features">
                          {features.map(({ icon: Icon, text }, i) => (
                            <li key={i}>
                              <Icon size={22} strokeWidth={1.5} />
                              <span>
                                {text.split("\n").map((line, j) => (
                                  <span key={j}>{line}</span>
                                ))}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;