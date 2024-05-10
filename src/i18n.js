import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "All cabins": "All cabins",
            "Filter / Sort": "Filter / Sort",
            "Update hotel settings": "Update hotel settings",
            // The Side Bar Text
            "Home": "Home",
            "Bookings": "Bookings",
            "Cabins": "Cabins",
            "Users": "Users",
            "Settings": "Settings",
            // --------------
            "All bookings": "All bookings",
            "Dashboard": "Dashboard",
            "Create a new user": "Create a new user",
            // Cabin Table
            "Cabin": "Cabin",
            "Capacity": "Capacity",
            "Price": "Price",
            "Discount": "Discount",
            "Fits up to {{maxCapacity}} guests": "Fits up to {{maxCapacity}} guests",
            "Delete": "Delete",
            "Add New Cabin": "Add New Cabin",
            "Cancel": "Cancel",
            "Add Cabin": "Add Cabin",
            "Show Table": "Show Table",
            // Create Cabin Form
            "Cabin name": "Cabin name",
            "Cabin photo": "Cabin photo",
            "Description for website": "Description for website",
            "Regular price": "Regular price",
            "Maximum capacity": "Maximum capacity",
            //Settings Page
            "Minimum nights/booking": "Minimum nights/booking",
            "Maximum nights/booking": "Maximum nights/booking",
            "Maximum guests/booking": "Maximum guests/booking",
            "Breakfast price": "Breakfast price",

        }
    },
    fr: {
        translation: {
            "All cabins": "Toutes les cabines",
            "Filter / Sort": "Filtrer / Trier",
            "Update hotel settings": "Mettre à jour les paramètres de l'hôtel",
            // The Side Bar Text
            "Home": "principale",
            "Bookings": "Réservations",
            "Cabins": "Cabines",
            "Users": "Utilisateurs",
            "Settings": "Paramètres",
            // -------------
            "All bookings": "Toutes les réservations",
            "Dashboard": "Tableau de bord",
            "Create a new user": "Créer un nouvel utilisateur",
            // Cabin Table
            "Cabin": "Cabine",
            "Capacity": "Capacité",
            "Price": "Prix",
            "Discount": "Remise",
            "Fits up to {{maxCapacity}} guests": "Peut accueillir jusqu'à {{maxCapacity}} invités",
            "Delete": "Supprimer",
            "Add New Cabin": "Ajouter une nouvelle cabine",
            "Cancel": "Annuler",
            "Add Cabin": "Ajouter la cabine",
            "Show Table": "Afficher le tableau",
            // Create Cabin Form
            "Cabin name": "Nom de la cabine",
            "Cabin photo": "Photo cabine",
            "Description for website": "Description du site Web",
            "Regular price": "Prix régulier",
            "Maximum capacity": "Capacité maximale",
            //Settings Page
            "Minimum nights/booking": "Nuits minimum/réservation",
            "Maximum nights/booking": "Nuits/réservation maximum",
            "Maximum guests/booking": "Maximum invités/réservation",
            "Breakfast price": "Prix petit déjeuner",
        }
    },
    ar: {
        translation: {
            "All cabins": "جميع الكبائن",
            "Filter / Sort": "تصفية / فرز",
            "Update hotel settings": "تحديث إعدادات الفندق",
            // The Side Bar Text
            "Home": "الرئيسيه",
            "Bookings": "الحجوزات",
            "Cabins": "الكبائن",
            "Users": "المستخدمون",
            "Settings": "الإعدادات",
            //----------
            "All bookings": "جميع الحجوزات",
            "Dashboard": "لوحة التحكم",
            "Create a new user": "إنشاء مستخدم جديد",
            // Cabin Table
            "Cabin": "كابينة",
            "Capacity": "السعة",
            "Price": "السعر",
            "Discount": "الخصم",
            "Fits up to {{maxCapacity}} guests": "يناسب ما يصل إلى {{maxCapacity}} من الضيوف",
            "Delete": "حذف",
            "Add New Cabin": "إضافة كابينة جديدة",
            "Cancel": "ألغاء",
            "Add Cabin": "اضافه كابينة",
            "Show Table": "عرض الجدول",
            // Create Cabin Form
            "Cabin name": "اسم الكابينة",
            "Cabin photo": "صورة الكابينه",
            "Description for website": "وصف للموقع",
            "Regular price": "السعر",
            "Maximum capacity": "أقصي سعه",
            //Settings Page
            "Minimum nights/booking": "الحد الأدنى لليالي/الحجز",
            "Maximum nights/booking": "الحد الأقصى لليالي/الحجز",
            "Maximum guests/booking": "الحد الأقصى للضيوف/الحجز",
            "Breakfast price": "سعر الإفطار",
            
        }
    }
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)// passes i18n down to react-i18next
    .init({
        resources,
        lng: "En",

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
};



export default i18n;