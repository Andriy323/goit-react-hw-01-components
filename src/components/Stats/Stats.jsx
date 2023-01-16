import PropTypes from 'prop-types';
import css from 'components/Stats/Stats.module.css';
import getRandomColor from 'helpers/randomColor';

export default function Stats(props) {
  const { title, stats } = props;
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>
        {stats.map(elements => (
          <li
            key={elements.id}
            className={css.item}
            style={{
              backgroundColor: getRandomColor(),
            }}
          >
            <span className={css.label}>
              {elements.label}
              <br />
            </span>
            <span className={css.percentage}>{elements.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
