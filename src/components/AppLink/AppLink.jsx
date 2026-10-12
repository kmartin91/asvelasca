import { NavLink } from 'react-router';
import { useLocale } from '../../shared/i18n';
import { prefetch } from '../../shared/loaders';

/**
 * Internal link: animated page transition + code/data prefetch on hover and focus.
 */
const AppLink = ({ to, onPointerEnter, onFocus, ...props }) => {
  const locale = useLocale();
  const warm = () => prefetch(to, locale);

  return (
    <NavLink
      to={to}
      viewTransition
      onPointerEnter={(event) => {
        warm();
        onPointerEnter?.(event);
      }}
      onFocus={(event) => {
        warm();
        onFocus?.(event);
      }}
      {...props}
    />
  );
};

export default AppLink;
