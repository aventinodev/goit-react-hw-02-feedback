import PropTypes from 'prop-types';
import { Message } from './Notification..styled';

const Notification = ({ message }) => <Message>{message}</Message>;

Notification.propType = {
  message: PropTypes.string,
};
export default Notification;
