import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
    const { alert } = useContext(AlertContext);
    return (
        { alert } !== null && <div style={{ color: 'red' }}>{alert}</div>
    );
}

export default Alert;
