import PropTypes from 'prop-types';
import css from './Section.module.css';

export function Section({ children, title }) {
  return (
    <div>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
