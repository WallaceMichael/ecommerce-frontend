import { useTranslation } from "react-i18next";
import AccordionGallery from "./AccordionGallery/AccordionGallery";

const editorPickItems = [
  {
    image: "https://images.unsplash.com/photo-1524660988542-c440de9c0fde?q=80&w=900&auto=format&fit=crop",
    label: "Ver tudo",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1591800240952-39cb38060827?q=80&w=900&auto=format&fit=crop",
    label: "Topwear",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=900&auto=format&fit=crop",
    label: "Bottomwear",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1732842430197-0ecd55fe98ea?q=80&w=900&auto=format&fit=crop",
    label: "Outwear",
    link: "#",
  },
];

const MainHome = () => {
  const { t } = useTranslation();

  return (
    <section className="editors-pick-section">
      <div className="container">
        <h2 className="editors-pick-title">{t("home.editorsPick")}</h2>

        <AccordionGallery
          items={editorPickItems}
          defaultIndex={0}
          expandRatio={0.40}
          trigger="hover"
          resetOnLeave
          accentColor="#ee1c25"
          overlayColor="#060010"
          grayscale={false}
          showLabels
          duration={0.5}
          ease="power3.out"
          height={610}
          gap={12}
          radius={20}
        />
      </div>
    </section>
  );
};

export default MainHome;