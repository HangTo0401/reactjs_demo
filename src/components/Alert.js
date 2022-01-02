import { Component } from "react";
import { alertService, alertType } from '../service/alert.service';
import { history } from  "react-router-dom";

const propTypes = {
    id: PropTypes.string,
    fade: PropTypes.bool
};

const defaultProps = {
    id: 'default-alert',
    fade: true
};

class Alert extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alerts: []
        };
    }

    /**
     * componentDidMount() method subscribes to the observable returned from the alertService.onAlert() method, 
     * this enables the alert component to be notified whenever an alert message is sent to the alert service 
     * and add it to the alerts array for display. 
     * Sending an alert with an empty message to the alert service tells the alert component to clear the alerts array. 
     * This method also calls history.listen() to register a route change listener so it can automatically clear alerts on route changes.
     */
    componentDidMount() {
        // subscribe to new alert notifications
        this.subscription = alertService.onAlert(this.props.id).subscribe(alert => {
            // clear alerts when an empty alert is received
            if (!alert) {

            }

            // clear alerts on location change
            this.historyUnlisten = history.listen(() => {
                alertService.clear(this.props.id);
            });
        });
    }

    /**
     * The componentWillUnmount() method unsubscribes from the alert service 
     * and "unlistens" to the history object when the component is destroyed to prevent memory leaks from orphaned subscriptions.
     */
    componentWillUnmount() {

    }

    /**
     * removeAlert() method removes the specified alert object from the array, it allows individual alerts to be closed in the UI.
     */
    removeAlert(alert) {
    }

    /**
     * cssClass() method returns a corresponding bootstrap alert class for each of the alert types, 
     * if you're using something other than bootstrap you can change the CSS classes returned to suit your application.
     */
    cssClasses(alert) {

    }

    /**
     * render() renders an alert message for each alert in the alerts array. Bootstrap 4 is used for styling the alerts / toaster notifications in the example, 
     * you can change the HTML and CSS classes in this template to suit your application if you're not using Bootstrap.
     */
    render() {

    }
}

export default Alert;