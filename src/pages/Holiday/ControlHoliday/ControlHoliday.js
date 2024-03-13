import classNames from 'classnames/bind';
import styles from './ControlHoliday.module.scss';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function ControlHoliday({ setDay, setMonth, setYear, resetDay, setResetDay, day, month, year }) {
    const days = Array.from({ length: 31 }, (_, index) => index + 1);
    const months = Array.from({ length: 12 }, (_, index) => index + 1);
    const years = Array.from({ length: 12 }, (_, index) => index + 2020);
    useEffect(() => {
        if (resetDay) {
            setDay('');
            setMonth('');
            setYear('');
            setResetDay(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resetDay]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('control-holiday')}>
                <select
                    className={cx('days', 'box-holiday')}
                    name="days"
                    value={day}
                    onChange={(e) => {
                        setDay(e.target.value);
                    }}
                >
                    <option value="">Day</option>
                    {days.map((day, index) => (
                        <option key={index} value={day}>
                            {day}
                        </option>
                    ))}
                </select>
                <select
                    className={cx('months', 'box-holiday')}
                    name="months"
                    value={month}
                    onChange={(e) => {
                        setMonth(e.target.value);
                    }}
                >
                    <option value="">Month</option>
                    {months.map((month, index) => (
                        <option key={index} value={month}>
                            {month}
                        </option>
                    ))}
                </select>
                <select
                    className={cx('years', 'box-holiday')}
                    name="years"
                    value={year}
                    onChange={(e) => {
                        setYear(e.target.value);
                    }}
                >
                    <option value="">Year</option>
                    {years.map((year, index) => (
                        <option key={index} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default ControlHoliday;
