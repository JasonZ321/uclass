export function getIdByURL(url, prefix) {
    let str = url.substr(url.lastIndexOf(prefix)+prefix.length);
    if (str.indexOf('/') < 0) {
        return str;
    } else {
        return str.substr(0, str.indexOf('/'));
    }
}

export function getCityAndSchoolNameByUrl(url) {
    let str = url.substr(url.lastIndexOf(prefix)+prefix.length);
    let cityAndName = str.indexOf('/') < 0 ? str : str.substr(0, str.indexOf('/'));
    return cityAndName.split('-');
}