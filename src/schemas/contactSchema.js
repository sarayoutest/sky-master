
import { z } from "zod";

export const contactSchema = (lang = "en") => {
  return z.object({
    name: z.string().min(1, lang === "ar" ? "الاسم مطلوب" : "Name is required"),
    phone: z.string().min(7, lang === "ar" ? "رقم الهاتف قصير جدًا" : "Phone is too short"),
    email: z.string().email(lang === "ar" ? "البريد الإلكتروني غير صالح" : "Invalid email"),
    countryCode: z.string(),
    
    // الإضافات الجديدة بنفس التنسيق
    company: z.string().min(1, lang === "ar" ? "الشركة مطلوبة" : "Company is required"),
    model: z.string().min(1, lang === "ar" ? "الموديل مطلوب" : "Model is required"),
    type: z.string().min(1, lang === "ar" ? "النوع مطلوب" : "Type is required"),
    color: z.string().min(1, lang === "ar" ? "اللون مطلوب" : "Color is required"),
    size: z.string().min(1, lang === "ar" ? "المقاس مطلوب" : "Size is required"),

    detailedAddress: z.string().min(1, lang === "ar" ? "الرسالة مطلوبة" : "Message is required"),
  });
};