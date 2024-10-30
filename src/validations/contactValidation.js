import * as Yup from "yup";

export const contactValidationSchema = Yup.object().shape({
    fullname : Yup.string().required("نام نام خانوادگی الزامیست"),
    email : Yup.string().email("آدرس ایمیل معتبر نیست").required("آدرس ایمیل الزامیست"),
    subject : Yup.string().required("نوستن عنوان الزامیست"),
    message : Yup.string().required("نوشتن پیام الزامیست"),
    recaptcha : Yup.string().required("نوشتن کپچا الزامیست"),
});