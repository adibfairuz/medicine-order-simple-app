export const rupiah = (number: string | null): string => {
    if (typeof number === 'string') {
        number += '';
        let x, x1, x2 = '';
        x = number.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? ',' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        return 'Rp ' + x1;
    }else{
        return '-'
    }
};