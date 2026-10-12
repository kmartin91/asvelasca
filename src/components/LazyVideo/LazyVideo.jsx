import { useInView } from '../../shared/utils';

/**
 * Muted looping video that only starts downloading once it scrolls into view.
 */
const LazyVideo = ({ src, poster, className }) => {
  const [ref, isInView] = useInView(0.1);

  return (
    <video
      ref={ref}
      className={className}
      src={isInView ? src : undefined}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
    />
  );
};

export default LazyVideo;
