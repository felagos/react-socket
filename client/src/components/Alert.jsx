import { TYPE_ALERT } from '../helpers/alert-types';

const getClassType = type => {
    if (type === TYPE_ALERT.SUCCESS) return "alert-success";
    if (type === TYPE_ALERT.PRIMARY) return "alert-primary";
    if (type === TYPE_ALERT.SECONDARY) return "alert-secondary";
    if (type === TYPE_ALERT.DANGER) return "alert-danger";
    if (type === TYPE_ALERT.WARNING) return "alert-warning";
    if (type === TYPE_ALERT.INFO) return "alert-info";
    if (type === TYPE_ALERT.LIGHT) return "alert-light";
    if (type === TYPE_ALERT.DARK) return "alert-dark";
    return "alert-primary";
};

export const Alert = ({ message, type }) => {
    const classAlert = getClassType(type);
    return (
        <div className={`alert ${classAlert}`} role="alert">
            <strong>Server Status: </strong>
            <span>{message}</span>
        </div>
    )
};