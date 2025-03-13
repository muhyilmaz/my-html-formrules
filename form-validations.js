$.validator.addMethod("EmailRegex", function (value, element) {
    return /^[\w-\.]+@([a-zA-Z0-9-]+\.){1,5}[a-zA-Z]{2,}$/.test(value);
}, "Lütfen geçerli bir e-posta adresi giriniz!");
$.validator.addMethod("PhoneRegex", function (value, element) {
    return /^(?:\+90.?5|0090.?5|905|0?5)(?:[01345][0-9])\s?(?:[0-9]{3})\s?(?:[0-9]{2})\s?(?:[0-9]{2})$/.test(value);
}, "Lütfen geçerli bir telefon numarası giriniz!");

$.validator.addMethod("BirthYearRegex", function (value, element) {
    return /^(19[0-9][0-9]|200[0-3])$/.test(value);
}, "Lütfen geçerli bir doğum tarihi giriniz!");

$.validator.addMethod("CitizenIdRegex", function (value, element) {
    return /^[1-9]{1}[0-9]{9}[02468]{1}$/.test(value);
}, "Lütfen geçerli bir kimlik numarası giriniz!");

$.validator.addMethod("KepRegex", function (value, element) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.kep\.tr$$/.test(value);
    //return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[0-9]+\.kep\.tr$/.test(value);
}, "Lütfen geçerli bir e-posta adresi giriniz!");

$.validator.addMethod("TaxNumber", function (value, element) {
    return /^[0-9]{10}$/.test(value);
}, "Lütfen geçerli bir vergi numarası giriniz!");


$.validator.addMethod("PasswordRegex", function (value, element) {
    return hasLowerCase(value) && hasUpperCase(value) && hasDigit(value) && IsLengthValid(value) && HasSpecialCharacter(value);
}, "Lütfen geçerli bir şifre giriniz!");



function hasLowerCase(str) {
    return /[a-zçğıiöşü]/.test(str);
}

function hasUpperCase(str) {
    return /[A-ZÇĞİÖŞÜ]/.test(str);
}
function hasDigit(str) {
    return /\d/.test(str);
}
function IsLengthValid(str) {
    return str.length > 7;
}
function HasSpecialCharacter(str) {
    const specialCharacters = /[!#$%^&*?_\-,.]/;
    return specialCharacters.test(str);
}

$(".bi-lowercase-input").on("input", function (e) {
    let inputValue = $(this).val();
    $(this).val(inputValue.toLocaleLowerCase('tr-TR'));
});
$(".bi-uppercase-input").on("input", function (e) {
    let inputValue = $(this).val();
    $(this).val(inputValue.toLocaleUpperCase('tr-TR'));
});
