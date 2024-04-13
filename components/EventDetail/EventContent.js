import styleClasses from './EventContent.module.css';

function EventContent(props) {
  return (
    <section className={styleClasses.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
