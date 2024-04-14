import Button from '../common/Button/Button';
import styleClasses from './ResultTitle.module.css';

function ResultTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={styleClasses.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button navigate='/events'>Show all events</Button>
    </section>
  );
}

export default ResultTitle;
