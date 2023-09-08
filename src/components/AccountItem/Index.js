import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59~c5_300x300.webp?x-expires=1694221200&x-signature=0L%2Fnry1ktI8tSuYj9pBpnqdQUIg%3D"
                alt="Lam"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tran My Phu Lam</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>TMPLam</span>
            </div>
        </div>
    );
}

export default AccountItem;
