import { addDays } from 'date-fns';
import { Platform } from 'react-native';

export function getPlatformDate(date: Date) {
    return date;
    // if (Platform.OS === 'ios') {
    //     return addDays(date, 1);
    // } else {
    //     return date;
    // }
}