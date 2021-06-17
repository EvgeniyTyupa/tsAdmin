//GET COOKIE
export const getCookie = (name: string) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

//SET COOKIE
export const setCookie = (name: string, value: any, options: any = {}) => {
    options = {
        path: "/",
        ...options
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
          updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie
}

//REMOVE COOKIE
export const deleteCookie = (name: string) => {
    setCookie(name, "", {
        'max-age': -1
    })
}