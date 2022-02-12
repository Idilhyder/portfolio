import classes from './Buttons.module.css';

const Buttons = (props) => {
    return (
        <div className={classes.actions}>{props.children}</div>
    )
}

export default Buttons;