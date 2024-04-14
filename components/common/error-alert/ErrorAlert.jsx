import styleClasses from './ErrorAlert.module.css';

function ErrorAlert(props) {
  return <div className={styleClasses.alert}>{props.children}</div>;
}

export default ErrorAlert;
