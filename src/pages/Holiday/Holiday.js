import classNames from 'classnames/bind';
import styles from './Holiday.module.scss';

import { useEffect, useState } from 'react';
import $ from 'jquery';

import ControlHoliday from './ControlHoliday';
import * as HolidayService from '~/services/HolidayService';

const cx = classNames.bind(styles);

function Holiday() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [updateDay, setUpdateDay] = useState('');
    const [updateMonth, setUpdateMonth] = useState('');
    const [updateYear, setUpdateYear] = useState('');
    const [allDay, setAllDay] = useState([]);
    const [checkClick, setCheckClick] = useState(false);
    const [checkDelete, setCheckDelete] = useState(false);
    const [dataItem, setDataItem] = useState('');
    const [resetDay, setResetDay] = useState(false);
    const [checkSub, setCheckSub] = useState(false);

    const handleDay = (day, month, year) => {
        if (day !== '' && month !== '' && year !== '') {
            let newDay = '';
            if (1 <= Number(day) && Number(day) <= 9) {
                newDay += '0' + day + '/';
            } else {
                newDay += day + '/';
            }
            if (1 <= Number(month) && Number(month) <= 9) {
                newDay += '0' + month + '/';
            } else {
                newDay += month + '/';
            }
            newDay += year;
            return newDay;
        }
    };

    useEffect(() => {
        if (checkClick && day !== '' && month !== '' && year !== '') {
            const newDay = handleDay(day, month, year);
            HolidayService.post({ day: newDay }).catch((err) => {
                return err;
            });
            setCheckClick(false);
            setResetDay(true);
        }

        if (checkDelete) {
            HolidayService.destroy({ data: dataItem }).catch((err) => {
                return err;
            });
            setCheckDelete(false);
        }

        if (checkSub && updateDay !== '' && updateMonth !== '' && updateYear !== '') {
            HolidayService.put({ data: dataItem }).catch((err) => {
                return err;
            });
            setCheckSub(false);
            setResetDay(true);
        }

        HolidayService.get()
            .then((res) => {
                if (res.length !== 0) {
                    setAllDay(res.data);
                }
            })
            .catch((err) => {
                return err;
            });
    }, [day, month, year, checkClick, checkDelete, dataItem, checkSub, updateDay, updateMonth, updateYear]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title-box')}>
                <p>Holiday</p>
            </div>
            <div className={cx('inner-box')}>
                <div className={cx('control-holiday')}>
                    <ControlHoliday
                        resetDay={resetDay}
                        setResetDay={setResetDay}
                        setDay={setDay}
                        setMonth={setMonth}
                        setYear={setYear}
                        day={day}
                        month={month}
                        year={year}
                    />
                    <div
                        className={cx('btn-add', 'btn-holiday')}
                        onClick={() => {
                            setCheckClick(true);
                        }}
                    >
                        <div className={cx('content')}>
                            <span className={cx('text')}>Add</span>
                        </div>
                    </div>
                </div>
                <div className={cx('list-holiday')}>
                    {allDay.map((item, index) => (
                        <div key={index} className={cx('item-inner-lisst')}>
                            <div className={cx('item-holiday')}>
                                <div className={cx('content-holiday')}>
                                    <span className={cx('content')}>{item.day}</span>
                                </div>
                            </div>

                            <div className={cx('box-btn-holiday')}>
                                <div className={cx('box-input-edit', 'box-input-dn')} id={`box-btn-holiday-${item.id}`}>
                                    <ControlHoliday
                                        resetDay={resetDay}
                                        setResetDay={setResetDay}
                                        setDay={setUpdateDay}
                                        setMonth={setUpdateMonth}
                                        setYear={setUpdateYear}
                                        day={updateDay}
                                        month={updateMonth}
                                        year={updateYear}
                                    />
                                    <div
                                        className={cx('btn-sub', 'btn-holiday')}
                                        onClick={() => {
                                            const newDay = handleDay(updateDay, updateMonth, updateYear);
                                            setDataItem({ id: item.id, day: newDay, account_id: item.account_id });
                                            setCheckSub(true);

                                            const boxInputEdit = $(`#box-btn-holiday-${item.id}`);
                                            boxInputEdit.css({
                                                display: 'none',
                                            });
                                        }}
                                    >
                                        <div className={cx('content')}>
                                            <span className={cx('text')}>Sub</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id={`btn-edit-${item.id}`}
                                    className={cx('btn-edit', 'btn-holiday')}
                                    onClick={() => {
                                        const boxEdit = $('.box-input-edit');
                                        boxEdit.css({
                                            display: 'none',
                                        });
                                        const boxInputEdit = $(`#box-btn-holiday-${item.id}`);
                                        boxInputEdit.css({
                                            display: 'flex',
                                        });
                                        setUpdateDay(Number(item.day.slice(0, 2)).toString());
                                        setUpdateMonth(Number(item.day.slice(3, 5)).toString());
                                        setUpdateYear(Number(item.day.slice(6, 10)).toString());
                                    }}
                                >
                                    <div className={cx('content')}>
                                        <span className={cx('text')}>Edit</span>
                                    </div>
                                </div>
                                <div
                                    className={cx('btn-delete', 'btn-holiday')}
                                    onClick={() => {
                                        setDataItem(item);
                                        setCheckDelete(true);
                                    }}
                                >
                                    <div className={cx('content')}>
                                        <span className={cx('text')}>Delete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Holiday;
