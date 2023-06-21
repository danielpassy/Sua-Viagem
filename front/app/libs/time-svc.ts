import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';
import relative from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn'; // import locale

dayjs.extend(utc);
dayjs.extend(relative);
dayjs.extend(duration);

dayjs.duration(13, 'days');
export default dayjs;
