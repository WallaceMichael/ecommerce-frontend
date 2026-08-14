import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';

import './AccordionGallery.css';

const DEFAULT_ITEMS = [
  {
    image: 'https://images.unsplash.com/photo-1524660988542-c440de9c0fde?q=80&w=900&auto=format&fit=crop',
    label: 'Ver tudo',
    link: '#'
  },
  {
    image: 'https://images.unsplash.com/photo-1591800240952-39cb38060827?q=80&w=900&auto=format&fit=crop',
    label: 'Topwear',
    link: '#'
  },
  {
    image: 'https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=900&auto=format&fit=crop',
    label: 'Bottomwear',
    link: '#'
  },
  {
    image: 'https://images.unsplash.com/photo-1732842430197-0ecd55fe98ea?q=80&w=900&auto=format&fit=crop',
    label: 'Outwear',
    link: '#'
  }
];

const AccordionGallery = ({
  items = DEFAULT_ITEMS,
  defaultIndex = 0,
  accentColor = '#ee1c25',
  overlayColor = '#060010',
  height = 460,
  gap = 12,
  radius = 20,
  expandRatio = 0.34,
  duration = 0.5,
  ease = 'power3.out',
  trigger = 'hover',
  resetOnLeave = true,
  showLabels = true,
  grayscale = false,
  className = ''
}) => {
  const rootRef = useRef(null);
  const panelRefs = useRef([]);
  const mediaRefs = useRef([]);
  const tlRef = useRef(null);
  const firstRunRef = useRef(true);

  const count = items.length;
  const homeIndex = Math.min(Math.max(defaultIndex, 0), count - 1);
  const [active, setActive] = useState(homeIndex);

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  // Only the flexGrow (open/close) and, optionally, the grayscale filter are animated.
  const applyLayout = useCallback(
    animate => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const r = Math.min(Math.max(expandRatio, 0.15), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const media = mediaRefs.current[i];

        tl.to(panel, { flexGrow: isActive ? grow : 1, duration: dur, ease }, 0);

        if (media) {
          const gray = grayscale ? (isActive ? 0 : 1) : 0;
          tl.to(media, { '--ag-gray': gray, duration: dur, ease }, 0);
        }
      });

      tlRef.current = tl;
    },
    [active, count, expandRatio, duration, ease, grayscale, prefersReduced]
  );

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const handleEnter = i => {
    if (trigger === 'hover') setActive(i);
  };

  const handleLeave = () => {
    if (trigger === 'hover' && resetOnLeave) setActive(homeIndex);
  };

  const handleClick = (i, e) => {
    if (i !== active) {
      e.preventDefault();
      setActive(i);
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`accordion-gallery${className ? ` ${className}` : ''}`}
      style={{
        '--ag-accent': accentColor,
        '--ag-overlay': overlayColor,
        '--ag-gap': `${gap}px`,
        '--ag-radius': `${radius}px`,
        height: `${height}px`
      }}
      role="list"
      aria-label="Image accordion gallery"
      onMouseLeave={handleLeave}
    >
      {items.map((item, i) => {
        const isActive = i === active;
        const Tag = item.link ? 'a' : 'div';
        return (
          <Tag
            key={i}
            ref={el => (panelRefs.current[i] = el)}
            className={`ag-panel${isActive ? ' ag-panel--active' : ''}`}
            href={item.link || undefined}
            onClick={e => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={e => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={item.label}
          >
            <span className="ag-panel__frame" ref={el => (mediaRefs.current[i] = el)}>
              <img src={item.image} alt={item.alt || item.label || ''} draggable="false" />
              <span className="ag-panel__overlay" aria-hidden="true" />
            </span>

            {showLabels && (
              <span className={`ag-panel__bar${isActive ? ' ag-panel__bar--active' : ''}`}>
                <span className="ag-panel__icon" aria-hidden="true">
                  &#8599;
                </span>
                <span className="ag-panel__pill">{item.label}</span>
              </span>
            )}
          </Tag>
        );
      })}
    </div>
  );
};

export default AccordionGallery;