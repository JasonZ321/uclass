export function getIdByURL(url, prefix) {
    let str = url.substr(url.lastIndexOf(prefix)+prefix.length);
    if (str.indexOf('/') < 0) {
        return str;
    } else {
        return str.substr(0, str.indexOf('/'));
    }
}

export function getCityAndSchoolNameByUrl(url, prefix) {
    let cityAndName = url.substr(url.lastIndexOf(prefix)+prefix.length);
    if (cityAndName.indexOf('/') < 0) {
        return cityAndName.split('-');
    } else {
        return cityAndName.substr(0, cityAndName.lastIndexOf('/')).split('-');
    }
}