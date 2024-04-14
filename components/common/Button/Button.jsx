import Link from "next/link"
import styleClasses from "./Button.module.css";

const Button = (props) => {
    const { children, navigate } = props;

    return (
        <Link href={navigate} className={styleClasses.btn} >{children}</Link>
    )
}

export default Button;