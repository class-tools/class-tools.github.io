function ChangeLanguage() {
    var lang_text = document.getElementById("change-lang").value;
    window.localStorage["LanguageBar"] = lang_text;
    window.location.href = `/lang/${lang_text}`;
}

function SetLang(lang) {
    window.localStorage["LanguageBar"] = lang;
}

function Change_Lang(lang_id) {
    if (lang_id == 1) {
        // en-US
        window.localStorage["LanguageBar"] = "en-US";
        window.location.href = "/lang/en-US/";
    } else if (lang_id == 2) {
        // zh-CN
        window.localStorage["LanguageBar"] = "zh-CN";
        window.location.href = "/lang/zh-CN/";
    } else if (lang_id == 3) {
        // zh-TW
        window.localStorage["LanguageBar"] = "zh-TW";
        window.location.href = "/lang/zh-TW/";
    }
}