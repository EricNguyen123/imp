import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import images from '~/assets/images';
import Image from '~/components/Image';

import Button from './Button';
import config from '~/config';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu')}>
                <div className={cx('logo-header')}>
                    <Image className={cx('img-logo')} src={images.logo} alt="logo" />
                </div>
                <div className={cx('box-button')}>
                    <Button path={config.routes.home}>Home</Button>
                    <Button path={config.routes.home}>Accounts</Button>
                    <Button path={config.routes.home}>Timesheets</Button>
                    <Button path={config.routes.home}>Sessions</Button>
                    <Button path={config.routes.home}>Report</Button>
                    <Button path={config.routes.holiday}>Holiday</Button>
                </div>
            </div>
            <div className={cx('icon-avatar')}>
                <Link className={cx('avatar')} to={config.routes.home} reloadDocument>
                    <Image className={cx('img-avatar')} src={images.imgAvatar} alt="avatar" />
                </Link>
            </div>
        </div>
    );
}

export default Header;
