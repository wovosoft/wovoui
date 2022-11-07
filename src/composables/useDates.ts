import dayjs, {Dayjs, WeekdayNames} from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

function fixZero(num: number): string {
    return ((num < 10) ? `0${num}` : num).toString();
}

export interface DateItemInterface {
    day: number;
    weekday: number;
    date: string;
    data: Date;
    isToday: boolean;
    inRefMonth: boolean;
    inPrevMonth: boolean;
    inNextMonth: boolean;
}


function dateFormat(d, runningDate: Dayjs, monthDate: Dayjs): DateItemInterface {
    //date object at d (day)
    let currentDate = dayjs(runningDate.format('YYYY-MM-' + fixZero(d)));

    let inRefMonth = runningDate.isSame(monthDate, 'month');
    let inPrevMonth = runningDate.isBefore(monthDate, 'month');
    let inNextMonth = runningDate.isAfter(monthDate, 'month');


    return {
        day: d,
        weekday: currentDate.day(),                                 //day in week
        date: currentDate.format('YYYY-MM-' + fixZero(d)),  //formatted date in yyyy-mm-dd
        data: currentDate.toDate(),                                 //full Date (javascript) object
        isToday: currentDate.isToday(),                             //determines if the day is tooday
        inRefMonth,
        inPrevMonth,
        inNextMonth
    }
}

export function dateMatrix(date: Dayjs | string = null): DateItemInterface[][] {
    let theDate;
    if (!date) {
        theDate = dayjs();
    } else {
        theDate = (typeof date === 'string') ? dayjs(date) : date;
    }

    let prevMonth = theDate.subtract(1, 'month');
    let nextMonth = theDate.add(1, 'month');

    const weeks: DateItemInterface[][] = [];

    let weekday = theDate.startOf('month').day();

    for (let d = 1; d <= theDate.daysInMonth(); d++) {
        if (weekday === 0 || weeks.length === 0) {
            weeks.push([]);
        }
        weeks[weeks.length - 1].push(dateFormat(d, theDate, theDate));
        weekday = (weekday + 1) % 7;
    }

    //start week of month adjustment
    if (weeks[0].length < 7) {
        const lack = (7 - weeks[0].length);

        let ld_prev_month = theDate.subtract(1, 'month').daysInMonth();

        for (let x = 0; x < lack; x++) {
            weeks[0] = [
                dateFormat(ld_prev_month - x, prevMonth, theDate),
                ...weeks[0]
            ];
        }
    }


    if (weeks[weeks.length - 1].length < 7) {
        const lack = (7 - weeks[weeks.length - 1].length);

        for (let x = 1; x <= lack; x++) {
            weeks[weeks.length - 1].push(dateFormat(x, nextMonth, theDate))
        }
    }

    return weeks.filter((w) => !!w.length).map((w) => w);
}

export function dayNames(localOrder?: boolean): WeekdayNames {
    return dayjs.weekdaysShort(localOrder);
}