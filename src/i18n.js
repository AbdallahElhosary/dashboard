import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            // "All cabins": "All cabins",
            // "Filter / Sort": "Filter / Sort",
            // "Update hotel settings": "Update hotel settings",
            // // The Side Bar Text
            // "Home": "Home",
            // "Bookings": "Bookings",
            // "Cabins": "Cabins",
            // "Users": "Users",
            // "Settings": "Settings",
            // // --------------
            // "All bookings": "All bookings",
            // "Dashboard": "Dashboard",
            // "Create a new user": "Create a new user",
            // // Cabin Table
            // "Cabin": "Cabin",
            // "Capacity": "Capacity",
            // "Price": "Price",
            // "Discount": "Discount",
            // "Fits up to {{maxCapacity}} guests": "Fits up to {{maxCapacity}} guests",
            // "Delete": "Delete",
            // "Add New Cabin": "Add New Cabin",
            // "Cancel": "Cancel",
            // "Add Cabin": "Add Cabin",
            // "Show Table": "Show Table",
            // // Create Cabin Form
            // "Cabin name": "Cabin name",
            // "Cabin photo": "Cabin photo",
            // "Description for website": "Description for website",
            // "Regular price": "Regular price",
            // "Maximum capacity": "Maximum capacity",
            // //Settings Page
            // "Minimum nights/booking": "Minimum nights/booking",
            // "Maximum nights/booking": "Maximum nights/booking",
            // "Maximum guests/booking": "Maximum guests/booking",
            // "Breakfast price": "Breakfast price",
            // // Discount
            // "All": "All",
            // "No Discount": "No Discount",
            // "With Discount": "With Discount",
            // // Select
            // "Sort By Name From (A-Z)": "Sort By Name From (A-Z)",
            // "Sort By Name From (Z-A)": "Sort By Name From (Z-A)",
            // "Sort By Price(Low First)": "Sort By Price(Low First)",
            // "Sort By Price(High First)": "Sort By Price(High First)",
            // "Sort By Capacity(Low First)": "Sort By Capacity(Low First)",
            // "Sort By Capacity(High First)": "Sort By Capacity(High First)",
            // // Bookings
            // "UNCONFIRMED": "UNCONFIRMED",
            // "checked in": "CHECKED IN",
            // "checked out": "CHECKED OUT",
            // "Guest": "Guest",
            // "Dates": "Dates",
            // "Status": "Status",
            // "Amount": "Amount",
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
            "Duplicate": "Dupliquer",
            "Edit": "Modifier",

            //Settings Page
            "Minimum nights/booking": "Nuits minimum/réservation",
            "Maximum nights/booking": "Nuits/réservation maximum",
            "Maximum guests/booking": "Maximum invités/réservation",
            "Breakfast price": "Prix petit déjeuner",
            // Discount
            "All": "Tous",
            "No Discount": "Pas de remise",
            "With Discount": "Avec remise",
            // Select
            "Sort By Name From (A-Z)": "Trier par nom de (A-Z)",
            "Sort By Name From (Z-A)": "Trier par nom à partir de (Z-A)",
            "Sort By Price(Low First)": "Trier par prix (bas en premier)",
            "Sort By Price(High First)": "Trier par prix (élevé en premier)",
            "Sort By Capacity(Low First)": "Trier par capacité (faible en premier)",
            "Sort By Capacity(High First)": "Trier par capacité (élevé en premier)",
            // Bookings
            "Unconfirmed": "NON CONFIRMÉ",
            "Checked in": "ENREGISTRÉ",
            "Checke in": "Enregistrement",
            "unconfirmed": "NON CONFIRMÉ",
            "checked in": "ENREGISTRÉ",
            "checked out": "VÉRIFIÉ",
            "Checked out": "VÉRIFIÉ",
            "Check out": "départ",
            "Guest": "Invité",
            "Dates": "Dates",
            "Status": "Statut",
            "Amount": "Montant",
            "See details": "Voir les détails",
            "Delete Booking": "{{Delete}} {{Bookings}}",
            "Upload": "Télécharger",
            "Upload ALL": "TOUS",
            "Upload bookings ONLY": "réservations",
            "Sort by date (recent first)": "Trier par date (récent en premier)",
            "Sort by date (earlier first)": "Trier par date (ancien en premier)",
            "Sort by amount (high first)": "Trier par montant (élevé en premier)",
            "Sort by amount (low first)": "Trier par montant (faible en premier)",
            // Account Form
            "Update your account": "Mettre à jour votre compte",
            "Update user data": "Mettre à jour les données de l'utilisateur",
            "Update password": "Mettre à jour le mot de passe",
            "Email address": "Adresse e-mail",
            "Avater image": "Image de profil",
            "Full name": "Nom complet",
            "Update account": "Compte mis à jour",
            "Confirm password": "Confirmer le mot de passe",
            "Password (min 8 characters):": "Mot de passe (min 8 caractères):",
            "Email": "E-mail",
            "Repeat password": "Répelez le mot de passe",
            "Create new user": "Créer un nouvel utilisateur",
            "Sales From": "Ventes de",
            "Sales": "Ventes",
            "Check ins": "Réservations",
            "Occupancy rate": "Taux d'occupation",
            "Last 7 days": "7 derniers jours",
            "Last 30 days": "30 derniers jours",
            "Last 90 days": "90 derniers jours",
            "Stay duration summary": "Repartition des durees de sejour",
            "Today activity": "Activité du jour",
            "No activity today...": "Aucune activité pour aujourd'hui...",
            "Delete booking": "Supprimer la réservation",
            "Breakfast": "Petit dejé",
            // Bookings Data Box
            "nights in Cabin": "nuits dans la cabine",
            "guests": "invités",
            "National ID": "Carte NATIONAL",
            "Booking": "Réservation",
            "Breakfast included?": "Petit dejé inclus ?",
            "Yes": "Oui",
            "No": "Non",
            "Total price": "Prix total",
            "Paid": "Payé",
            "Will pay at property": "payer chez le proprietaire",
            "Booked": "Réservé",
            "Flag of": "Drapeau de",
            "Observations": "Observations",
            "Check in": "Réservation",
            "Back": "Retour",
            // Login Form
            "Log In To Your Account": "Connectez-vous à votre compte",
            // Pagination
            "Next": "Suivant",
            "Previous": "Prédent",
            "Showing": "Affichant",
            "results": "résultats",
        }
    },
    ar: {
        translation: {
            "All cabins": "جميع الكبائن",
            "Filter / Sort": "تصفية / ترتيب",
            "Update hotel settings": "تحديث إعدادات الفندق",
            // The Side Bar Text
            "Home": "الرئيسية",
            "Bookings": "الحجوزات",
            "Cabins": "الكبائن",
            "Users": "المستخدمين",
            "Settings": "الإعدادات",
            // -------------
            "All bookings": "جميع الحجوزات",
            "Dashboard": "لوحة القيادة",
            "Create a new user": "إنشاء مستخدم جديد",
            // Cabin Table
            "Cabin": "كابينة",
            "Capacity": "السعة",
            "Price": "السعر",
            "Discount": "الخصم",
            "Fits up to {{maxCapacity}} guests": "يتسع لما يصل إلى {{maxCapacity}} ضيوف",
            "Delete": "حذف",
            "Add New Cabin": "إضافة كابينة جديدة",
            "Cancel": "إلغاء",
            "Add Cabin": "إضافة كابينة",
            "Show Table": "عرض الجدول",
            // Create Cabin Form
            "Cabin name": "اسم الكابينة",
            "Cabin photo": "صورة الكابينة",
            "Description for website": "وصف الموقع",
            "Regular price": "السعر العادي",
            "Maximum capacity": "الحد الأقصى للسعة",
            "Duplicate": "تكرار",
            "Edit": "تعديل",

            //Settings Page
            "Minimum nights/booking": "الحد الأدنى ليالي/حجز",
            "Maximum nights/booking": "الحد الأقصى ليالي/حجز",
            "Maximum guests/booking": "الحد الأقصى للضيوف/حجز",
            "Breakfast price": "سعر الإفطار",
            // Discount
            "All": "الجميع",
            "No Discount": "لا يوجد خصم",
            "With Discount": "مع خصم",
            // Select
            "Sort By Name From (A-Z)": "ترتيب حسب الاسم (أ-ي)",
            "Sort By Name From (Z-A)": "ترتيب حسب الاسم (ي-أ)",
            "Sort By Price(Low First)": "ترتيب حسب السعر (منخفض أولاً)",
            "Sort By Price(High First)": "ترتيب حسب السعر (مرتفع أولاً)",
            "Sort By Capacity(Low First)": "ترتيب حسب السعة (منخفضة أولاً)",
            "Sort By Capacity(High First)": "ترتيب حسب السعة (مرتفعة أولاً)",
            // Bookings
            "Unconfirmed": "غير مؤكد",
            "Checked in": "تم تسجيل الدخول",
            "Checke in": "تسجيل الدخول",
            "unconfirmed": "غير مؤكد",
            "checked in": "تم تسجيل الدخول",
            "checked out": "تم تسجيل المغادرة",
            "Checked out": "تم تسجيل المغادرة",
            "Check out": "تسجيل الخروج",
            "Guest": "ضيف",
            "Dates": "التواريخ",
            "Status": "الحالة",
            "Amount": "المبلغ",
            "See details": "عرض التفاصيل",
            "Delete Booking": "{{Delete}} {{Bookings}}",
            "Upload": "تحميل",
            "Upload ALL": "تحميل الكل",
            "Upload bookings ONLY": "تحميل الحجوزات فقط",
            "Sort by date (recent first)": "ترتيب حسب التاريخ (الأحدث أولاً)",
            "Sort by date (earlier first)": "ترتيب حسب التاريخ (الأقدم أولاً)",
            "Sort by amount (high first)": "ترتيب حسب المبلغ (مرتفع أولاً)",
            "Sort by amount (low first)": "ترتيب حسب المبلغ (منخفض أولاً)",
            // Account Form
            "Update your account": "تحديث حسابك",
            "Update user data": "تحديث بيانات المستخدم",
            "Update password": "تحديث كلمة المرور",
            "Email address": "عنوان البريد الإلكتروني",
            "Avater image": "صورة الملف الشخصي",
            "Full name": "الاسم الكامل",
            "Update account": "تحديث الحساب",
            "Confirm password": "تأكيد كلمة المرور",
            "Password (min 8 characters):": "كلمة المرور (8 أحرف على الأقل):",
            "Email": "البريد الإلكتروني",
            "Repeat password": "كرر كلمة المرور",
            "Create new user": "إنشاء مستخدم جديد",
            "Sales From": "المبيعات من",
            "Sales": "المبيعات",
            "Check ins": "تسجيلات الدخول",
            "Occupancy rate": "معدل الإشغال",
            "Last 7 days": "آخر 7 أيام",
            "Last 30 days": "آخر 30 يوم",
            "Last 90 days": "آخر 90 يوم",
            "Stay duration summary": "ملخص مدة الإقامة",
            "Today activity": "نشاط اليوم",
            "No activity today...": "لا يوجد نشاط اليوم...",
            "Delete booking": "حذف الحجز",
            "Breakfast": "الافطار",
            // Bookings Data Box
            "nights in Cabin": "ليالي في الكابينة",
            "guests": "الضيوف",
            "National ID": "الهوية الوطنية",
            "Booking": "حجز",
            "Breakfast included?": "هل يشمل الإفطار؟",
            "Yes": "نعم",
            "No": "لا",
            "Total price": "السعر الإجمالي",
            "Paid": "مدفوع",
            "Will pay at property": "سيدفع عند العقار",
            "Booked": "محجوز",
            "Flag of": "علم",
            "Observations": "ملاحظات",
            "Check in": "تسجيل الدخول",
            "Back": "عودة",
            // Login Form
            "Log In To Your Account": "تسجيل الدخول إلى حسابك",
            // Pagination
            "Next": "التالي",
            "Previous" : "السابق",
            "Showing": "عرض",
            "results": "النتائج",
        }

    },
    gr: {
        translation: {
            "All cabins": "Alle Kabinen",
            "Filter / Sort": "Filtern / Sortieren",
            "Update hotel settings": "Hotelleinstellungen aktualisieren",
            // The Side Bar Text
            "Home": "Startseite",
            "Bookings": "Buchungen",
            "Cabins": "Kabinen",
            "Users": "Benutzer",
            "Settings": "Einstellungen",
            // -------------
            "All bookings": "Alle Buchungen",
            "Dashboard": "Armaturenbrett",
            "Create a new user": "Einen neuen Benutzer erstellen",
            // Cabin Table
            "Cabin": "Kabine",
            "Capacity": "Kapazität",
            "Price": "Preis",
            "Discount": "Rabatt",
            "Fits up to {{maxCapacity}} guests": "Bietet Platz für bis zu {{maxCapacity}} Gäste",
            "Delete": "Löschen",
            "Add New Cabin": "Neue Kabine hinzufügen",
            "Cancel": "Abbrechen",
            "Add Cabin": "Kabine hinzufügen",
            "Show Table": "Tabelle anzeigen",
            // Create Cabin Form
            "Cabin name": "Kabinenname",
            "Cabin photo": "Kabinenfoto",
            "Description for website": "Beschreibung für die Website",
            "Regular price": "Regulärer Preis",
            "Maximum capacity": "Maximale Kapazität",
            "Duplicate": "Duplizieren",
            "Edit": "Bearbeiten",

            //Settings Page
            "Minimum nights/booking": "Minimale Nächte/Buchung",
            "Maximum nights/booking": "Maximale Nächte/Buchung",
            "Maximum guests/booking": "Maximale Gäste/Buchung",
            "Breakfast price": "Frühstückspreis",
            // Discount
            "All": "Alle",
            "No Discount": "Kein Rabatt",
            "With Discount": "Mit Rabatt",
            // Select
            "Sort By Name From (A-Z)": "Nach Name sortieren (A-Z)",
            "Sort By Name From (Z-A)": "Nach Name sortieren (Z-A)",
            "Sort By Price(Low First)": "Nach Preis sortieren (niedrig zuerst)",
            "Sort By Price(High First)": "Nach Preis sortieren (hoch zuerst)",
            "Sort By Capacity(Low First)": "Nach Kapazität sortieren (niedrig zuerst)",
            "Sort By Capacity(High First)": "Nach Kapazität sortieren (hoch zuerst)",
            // Bookings
            "Unconfirmed": "Unbestätigt",
            "Checked in": "Eingecheckt",
            "Checke in": "Eingecheckt",
            "unconfirmed": "Unbestätigt",
            "checked in": "Eingecheckt",
            "checked out": "Ausgecheckt",
            "Checked out": "Ausgecheckt",
            "Check out": "Auschecken",
            "Guest": "Gast",
            "Dates": "Termine",
            "Status": "Status",
            "Amount": "Betrag",
            "See details": "Details anzeigen",
            "Delete Booking": "{{Delete}} {{Bookings}}",
            "Upload": "Hochladen",
            "Upload ALL": "ALLE hochladen",
            "Upload bookings ONLY": "Nur Buchungen hochladen",
            "Sort by date (recent first)": "Nach Datum sortieren (neuestes zuerst)",
            "Sort by date (earlier first)": "Nach Datum sortieren (ältestes zuerst)",
            "Sort by amount (high first)": "Nach Betrag sortieren (hoch zuerst)",
            "Sort by amount (low first)": "Nach Betrag sortieren (niedrig zuerst)",
            // Account Form
            "Update your account": "Aktualisieren Sie Ihr Konto",
            "Update user data": "Benutzerdaten aktualisieren",
            "Update password": "Passwort aktualisieren",
            "Email address": "E-Mail-Adresse",
            "Avater image": "Profilbild",
            "Full name": "Vollständiger Name",
            "Update account": "Konto aktualisieren",
            "Confirm password": "Passwort bestätigen",
            "Password (min 8 characters):": "Passwort (min 8 Zeichen):",
            "Email": "E-Mail",
            "Repeat password": "Passwort wiederholen",
            "Create new user": "Neuen Benutzer erstellen",
            "Sales From": "Verkäufe von",
            "Sales": "Verkäufe",
            "Check ins": "Einchecken",
            "Occupancy rate": "Belegungsrate",
            "Last 7 days": "Letzte 7 Tage",
            "Last 30 days": "Letzte 30 Tage",
            "Last 90 days": "Letzte 90 Tage",
            "Stay duration summary": "Aufenthaltsdauer Zusammenfassung",
            "Today activity": "Heutige Aktivität",
            "No activity today...": "Heute keine Aktivität...",
            "Delete booking": "Buchung löschen",
            "Breakfast" : "Frühstück",
            // Bookings Data Box
            "nights in Cabin": "Nächte in der Kabine",
            "guests": "Gäste",
            "National ID": "Nationaler Ausweis",
            "Booking": "Buchung",
            "Breakfast included?": "Frühstück inbegriffen?",
            "Yes": "Ja",
            "No": "Nein",
            "Total price": "Gesamtpreis",
            "Paid": "Bezahlt",
            "Will pay at property": "Wird vor Ort bezahlen",
            "Booked": "Gebucht",
            "Flag of": "Flagge von",
            "Observations": "Beobachtungen",
            "Check in": "Einchecken",
            "Back": "Zurück",
            // Login Form
            "Log In To Your Account": "Melden Sie sich bei Ihrem Konto an",
            // Pagination
            "Next": "Nächt",
            "Previous": "Vorherige",
            "Showing": "Anzeige",
            "results": "Ergebnisse",

        }


    }
};

const caseInsensitiveInterpolation = (key, values) => {
    const lowerKey = key.toLowerCase();
    return i18n.services.resourceStore.data[i18n.language].translation[lowerKey] || key;
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)// passes i18n down to react-i18next
    .init({
        resources,
        lng: "En",

        interpolation: {
            escapeValue: false,
            format: caseInsensitiveInterpolation
        }
    });

export const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
};



export default i18n;