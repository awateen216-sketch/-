import { useState, useEffect, useRef } from "react";
import { Phone, MapPin, Clock, Star, ChevronDown, Menu, X, Award, Package, Users, Truck, CheckCircle, ArrowLeft, MessageCircle, Globe } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import logoImg from "@assets/PHOTO-2026-04-23-01-05-50_1776960857413.jpg";
import heroImg from "@assets/abyat_hero.png";
import tilesImg from "@assets/abyat_tiles.png";
import steelImg from "@assets/abyat_steel.png";
import pipesImg from "@assets/abyat_pipes.png";
import cementImg from "@assets/abyat_cement.png";
import electricalImg from "@assets/abyat_electrical.png";
import paintImg from "@assets/abyat_paint.png";
import constructionImg from "@assets/abyat_construction.png";
import chandeliersImg from "@assets/abyat_chandeliers.png";
import sanitaryImg from "@assets/abyat_sanitary.png";
import sinksImg from "@assets/abyat_sinks.png";
import gypsumImg from "@assets/abyat_gypsum.png";
import powerToolsImg from "@assets/abyat_power_tools.png";
import handToolsImg from "@assets/abyat_hand_tools.png";
import fiberTanksImg from "@assets/abyat_fiber_tanks.png";

type Lang = "ar" | "en";

const translations = {
  ar: {
    dir: "rtl" as const,
    font: "'Tajawal', 'Cairo', sans-serif",
    brandName: "أبيات الحجاز",
    brandSub: "لمواد البناء",
    langToggle: "EN",
    nav: {
      home: "الرئيسية",
      products: "منتجاتنا",
      whyUs: "لماذا نحن",
      reviews: "آراء العملاء",
      contact: "تواصل معنا",
      callUs: "اتصل بنا",
    },
    hero: {
      badge: "تقييم 5.0 على جوجل",
      badgeSub: "• 5,013 تقييم",
      title1: "أبيات الحجاز",
      title2: "لمواد البناء",
      subtitle: "وجهتك الأولى لجميع مواد البناء والإنشاء في جدة. جودة لا تُضاهى، أسعار تنافسية، وخدمة احترافية متميزة لخدمة المقاولين والمهندسين.",
      browseCatalog: "تصفح الكتالوج",
      location: "حي الفضيلة، جدة",
      opens: "يفتح الساعة 6 صباحاً",
      reviews: "5,013+ تقييم إيجابي",
    },
    stats: [
      { value: "5000+", label: "منتج متاح" },
      { value: "10000+", label: "عميل راضٍ" },
      { value: "24/7", label: "خدمة العملاء" },
      { value: "100%", label: "ضمان الجودة" },
    ],
    categoriesSection: {
      eyebrow: "كتالوج المنتجات",
      title: "تشكيلتنا الشاملة",
      subtitle: "نوفر لكم أكثر من 5000 منتج من أفضل العلامات التجارية العالمية والمحلية لتلبية جميع احتياجاتكم الإنشائية",
      showDetails: "عرض التفاصيل",
      hideDetails: "إخفاء التفاصيل",
    },
    categories: [
      {
        id: "tiles",
        name: "السيراميك والبلاط",
        description: "أرقى أنواع السيراميك والبلاط للأرضيات والجدران",
        items: ["بلاط أرضيات", "سيراميك جداري", "رخام طبيعي", "جرانيت مستورد", "بورسلين عالي الجودة"],
        badge: "الأكثر مبيعاً",
      },
      {
        id: "steel",
        name: "الحديد والصلب",
        description: "حديد تسليح وصلب إنشائي لجميع أنواع المشاريع",
        items: ["حديد تسليح", "عوارض فولاذية", "شبك مستدير", "أنابيب حديدية", "صفائح معدنية"],
        badge: "جودة عالية",
      },
      {
        id: "pipes",
        name: "الأنابيب والتمديدات",
        description: "أنابيب PVC وتمديدات المياه والصرف الصحي",
        items: ["أنابيب PVC", "أنابيب PPR", "وصلات تمديد", "صمامات تحكم", "معدات الصرف"],
        badge: "متوفر بالجملة",
      },
      {
        id: "cement",
        name: "الأسمنت والملاط",
        description: "أسمنت وملاط ومواد رابطة لجميع الاستخدامات",
        items: ["أسمنت بورتلاندي", "ملاط جاهز", "خلطات لاصقة", "مواد عزل", "رمل مصفى"],
        badge: "وفير المخزون",
      },
      {
        id: "electrical",
        name: "الكهرباء والإضاءة",
        description: "كابلات كهربائية ومعدات الإضاءة والتوزيع",
        items: ["كابلات نحاسية", "لوحات توزيع", "مفاتيح ومقابس", "أنابيب حماية", "معدات إضاءة"],
        badge: "تشكيلة واسعة",
      },
      {
        id: "paint",
        name: "الدهانات والطلاء",
        description: "دهانات داخلية وخارجية ومواد حماية للأسطح",
        items: ["دهانات جدارية", "مواد عازلة", "بويات خارجية", "دهانات مضادة للرطوبة", "ملحقات الطلاء"],
        badge: "عروض خاصة",
      },
      {
        id: "chandeliers",
        name: "لمبات ونجف",
        description: "نجف وثريات فاخرة ولمبات لجميع الأذواق والمساحات",
        items: ["نجف كريستال", "ثريات معلقة", "لمبات LED", "إضاءة ديكورية", "سبوت لايت"],
        badge: "أحدث التصاميم",
      },
      {
        id: "sanitary",
        name: "مواد صحية",
        description: "مستلزمات صحية كاملة للحمامات والمطابخ من أفضل الماركات",
        items: ["مراحيض", "أحواض استحمام", "دوش", "خلاطات مياه", "ملحقات الحمام"],
        badge: "جودة مستوردة",
      },
      {
        id: "sinks",
        name: "مغاسل وأحواض",
        description: "مغاسل وأحواض متنوعة للحمامات والمطابخ بتصاميم عصرية",
        items: ["مغاسل حمامات", "أحواض مطابخ", "مغاسل علوية", "مغاسل مدمجة", "أحواض ستانلس"],
        badge: "تشكيلة واسعة",
      },
      {
        id: "gypsum",
        name: "جبس وديكور سقف مستعار",
        description: "جبس بورد وأسقف مستعارة وكورنيش وزخارف جبسية بتصاميم فاخرة",
        items: ["جبس بورد", "سقف مستعار", "كورنيش جبس", "زخارف جبسية", "أطباق سقف"],
        badge: "ديكور فاخر",
      },
      {
        id: "power-tools",
        name: "عدد صناعية",
        description: "أدوات كهربائية صناعية احترافية لجميع أعمال البناء والتشطيب",
        items: ["دريل كهربائي", "جلاخة زاوية", "منشار دائري", "مفك صدمات", "ماكينة لحام"],
        badge: "احترافية",
      },
      {
        id: "hand-tools",
        name: "عدد يدوية",
        description: "عدد ومعدات يدوية متنوعة عالية الجودة لجميع أعمال البناء والصيانة",
        items: ["مطارق وشاكوش", "مفكات ومفاتيح", "قواطع وكماشات", "شريط قياس", "ميزان ماء"],
        badge: "جودة عالية",
      },
      {
        id: "fiber-tanks",
        name: "خزانات فايبر",
        description: "خزانات مياه فايبرجلاس بأحجام متعددة مقاومة للصدأ والحرارة والتآكل",
        items: ["خزانات 500 لتر", "خزانات 1000 لتر", "خزانات 2000 لتر", "خزانات أرضية", "خزانات علوية"],
        badge: "متعددة الأحجام",
      },
    ],
    featuresSection: {
      eyebrow: "لماذا أبيات الحجاز؟",
      title: "شريكك الموثوق في البناء",
      subtitle: "نخدم مقاولي ومهندسي جدة والمنطقة الغربية بأعلى معايير الجودة والاحترافية. ثقتكم هي رأس مالنا وسعادتكم هدفنا.",
    },
    features: [
      { title: "جودة مضمونة", description: "جميع منتجاتنا تخضع لأعلى معايير الجودة والاختبار" },
      { title: "أسعار تنافسية", description: "أفضل الأسعار في السوق مع ضمان أعلى جودة" },
      { title: "توصيل سريع", description: "خدمة توصيل لجميع مناطق جدة والمنطقة الغربية" },
      { title: "خبرة متخصصة", description: "فريق من المختصين لمساعدتك في اختيار المواد المناسبة" },
    ],
    reviewsSection: {
      eyebrow: "آراء عملائنا",
      title: "ماذا يقول عملاؤنا؟",
      subtitle: "+5,013 تقييم إيجابي على خرائط جوجل - أعلى معدل تقييم في القطاع",
      rateBtn: "قيّم تجربتك",
      googleLabel: "تقييم Google Maps",
      googleSub: "متجر مواد بناء في جدة",
    },
    reviews: [
      { name: "أحمد العتيبي", rating: 5, text: "محل ممتاز وتشكيلة رائعة من مواد البناء. الأسعار تنافسية والخدمة احترافية. أنصح به بشدة لكل مقاول ومهندس.", location: "جدة" },
      { name: "محمد الغامدي", rating: 5, text: "تعاملت مع أبيات الحجاز في مشاريع متعددة والحمد لله دائماً راضٍ عن الجودة والالتزام بالمواعيد.", location: "جدة" },
      { name: "خالد الشهري", rating: 5, text: "خدمة عملاء ممتازة وفريق متخصص يساعدك في اختيار المواد المناسبة لمشروعك. شكراً لكم.", location: "جدة" },
      { name: "عبدالله المالكي", rating: 4, text: "أسعار جيدة ومنتجات عالية الجودة. التوصيل سريع والموظفون محترفون. سأتعامل معكم دائماً.", location: "جدة" },
    ],
    contactSection: {
      eyebrow: "تواصل معنا",
      title: "نحن هنا لخدمتكم",
      subtitle: "تواصل معنا للاستفسار عن أي منتج أو طلب عرض أسعار لمشروعك",
      phoneTitle: "اتصل بنا",
      phoneSub: "متاح خلال ساعات العمل",
      whatsappTitle: "واتساب",
      whatsappSub: "راسلنا في أي وقت",
      locationTitle: "موقعنا",
      locationSub: "8053 حارثة بن النعمان\nحي الفضيلة، جدة 22631",
      locationBtn: "الوصول على الخريطة",
      instagramTitle: "إنستاغرام",
      instagramSub: "تابعنا على السوشيال",
      hoursTitle: "ساعات العمل",
      hoursSub: "يفتح الساعة 6:00 صباحاً - الأحد إلى الجمعة",
      hoursValue: "6 ص",
      hoursNote: "يفتح يومياً",
    },
    footer: {
      about: "وجهتك الأولى لجميع مواد البناء والإنشاء في جدة. نقدم أعلى مستويات الجودة بأفضل الأسعار.",
      quickLinks: "روابط سريعة",
      contactInfo: "معلومات الاتصال",
      address: "8053 حارثة بن النعمان، حي الفضيلة، جدة 22631",
      hours: "يفتح 6:00 ص - الأحد إلى الجمعة",
      copyright: "© 2024 أبيات الحجاز لمواد البناء. جميع الحقوق محفوظة.",
      googleRating: "5.0 | 5,013+ تقييم على جوجل",
    },
  },
  en: {
    dir: "ltr" as const,
    font: "'Inter', sans-serif",
    brandName: "Abiat Al-Hijaz",
    brandSub: "Construction Materials",
    langToggle: "عربي",
    nav: {
      home: "Home",
      products: "Products",
      whyUs: "Why Us",
      reviews: "Reviews",
      contact: "Contact",
      callUs: "Call Us",
    },
    hero: {
      badge: "5.0 Rating on Google",
      badgeSub: "• 5,013 Reviews",
      title1: "Abiat Al-Hijaz",
      title2: "Construction Materials",
      subtitle: "Your first destination for all construction and building materials in Jeddah. Unmatched quality, competitive prices, and professional service for contractors and engineers.",
      browseCatalog: "Browse Catalog",
      location: "Al-Fadila District, Jeddah",
      opens: "Opens at 6:00 AM",
      reviews: "5,013+ Positive Reviews",
    },
    stats: [
      { value: "5000+", label: "Products Available" },
      { value: "10000+", label: "Satisfied Clients" },
      { value: "24/7", label: "Customer Support" },
      { value: "100%", label: "Quality Guarantee" },
    ],
    categoriesSection: {
      eyebrow: "Product Catalog",
      title: "Our Full Range",
      subtitle: "We offer over 5,000 products from the best international and local brands to meet all your construction needs.",
      showDetails: "Show Details",
      hideDetails: "Hide Details",
    },
    categories: [
      {
        id: "tiles",
        name: "Ceramics & Tiles",
        description: "Premium ceramic and tile products for floors and walls.",
        items: ["Floor Tiles", "Wall Ceramics", "Natural Marble", "Imported Granite", "High-Quality Porcelain"],
        badge: "Best Seller",
      },
      {
        id: "steel",
        name: "Steel & Iron",
        description: "Reinforcement steel and structural steel for all project types.",
        items: ["Rebar Steel", "Steel Beams", "Wire Mesh", "Iron Pipes", "Metal Sheets"],
        badge: "High Quality",
      },
      {
        id: "pipes",
        name: "Pipes & Plumbing",
        description: "PVC pipes and water & drainage plumbing systems.",
        items: ["PVC Pipes", "PPR Pipes", "Fittings", "Control Valves", "Drainage Equipment"],
        badge: "Bulk Available",
      },
      {
        id: "cement",
        name: "Cement & Mortar",
        description: "Cement, mortar and bonding materials for all applications.",
        items: ["Portland Cement", "Ready-Mix Mortar", "Adhesive Mixes", "Insulation Materials", "Filtered Sand"],
        badge: "Well Stocked",
      },
      {
        id: "electrical",
        name: "Electrical & Lighting",
        description: "Electrical cables, lighting and distribution equipment.",
        items: ["Copper Cables", "Distribution Panels", "Switches & Outlets", "Conduit Pipes", "Lighting Fixtures"],
        badge: "Wide Range",
      },
      {
        id: "paint",
        name: "Paints & Coatings",
        description: "Interior and exterior paints and surface protection materials.",
        items: ["Wall Paints", "Insulating Materials", "Exterior Paints", "Moisture-Resistant Paints", "Painting Accessories"],
        badge: "Special Offers",
      },
      {
        id: "chandeliers",
        name: "Bulbs & Chandeliers",
        description: "Luxury chandeliers, pendant lights, and bulbs for every style and space.",
        items: ["Crystal Chandeliers", "Pendant Lights", "LED Bulbs", "Decorative Lighting", "Spotlights"],
        badge: "Latest Designs",
      },
      {
        id: "sanitary",
        name: "Sanitary Ware",
        description: "Complete bathroom and kitchen sanitary fixtures from top brands.",
        items: ["Toilets", "Bathtubs", "Showers", "Water Mixers", "Bathroom Accessories"],
        badge: "Imported Quality",
      },
      {
        id: "sinks",
        name: "Sinks & Basins",
        description: "A variety of sinks and basins for bathrooms and kitchens in modern designs.",
        items: ["Bathroom Sinks", "Kitchen Sinks", "Above-Counter Basins", "Under-Mount Sinks", "Stainless Steel Basins"],
        badge: "Wide Selection",
      },
      {
        id: "gypsum",
        name: "Gypsum & False Ceilings",
        description: "Gypsum board, suspended ceilings, cornices, and ornate plaster decorations.",
        items: ["Gypsum Board", "False Ceilings", "Plaster Cornices", "Decorative Plaster", "Ceiling Medallions"],
        badge: "Luxury Decor",
      },
      {
        id: "power-tools",
        name: "Power Tools",
        description: "Professional industrial power tools for all construction and finishing works.",
        items: ["Electric Drill", "Angle Grinder", "Circular Saw", "Impact Driver", "Welding Machine"],
        badge: "Professional",
      },
      {
        id: "hand-tools",
        name: "Hand Tools",
        description: "High-quality hand tools and equipment for all construction and maintenance works.",
        items: ["Hammers & Mallets", "Screwdrivers & Wrenches", "Cutters & Pliers", "Measuring Tape", "Spirit Level"],
        badge: "High Quality",
      },
      {
        id: "fiber-tanks",
        name: "Fiberglass Water Tanks",
        description: "Fiberglass water storage tanks in multiple sizes, resistant to rust, heat, and corrosion.",
        items: ["500L Tanks", "1000L Tanks", "2000L Tanks", "Underground Tanks", "Overhead Tanks"],
        badge: "Multiple Sizes",
      },
    ],
    featuresSection: {
      eyebrow: "Why Abiat Al-Hijaz?",
      title: "Your Trusted Construction Partner",
      subtitle: "We serve contractors and engineers across Jeddah and the Western Region with the highest quality standards and professionalism.",
    },
    features: [
      { title: "Guaranteed Quality", description: "All our products meet the highest quality and testing standards." },
      { title: "Competitive Prices", description: "The best prices in the market, with the highest quality guaranteed." },
      { title: "Fast Delivery", description: "Delivery service throughout Jeddah and the Western Region." },
      { title: "Expert Knowledge", description: "A team of specialists to help you choose the right materials for your project." },
    ],
    reviewsSection: {
      eyebrow: "Customer Reviews",
      title: "What Our Clients Say",
      subtitle: "+5,013 positive reviews on Google Maps — the highest rating in the sector.",
      rateBtn: "Rate Your Experience",
      googleLabel: "Google Maps Rating",
      googleSub: "Building materials store in Jeddah",
    },
    reviews: [
      { name: "Ahmed Al-Otaibi", rating: 5, text: "Excellent store with a great range of building materials. Competitive prices and professional service. Highly recommend to every contractor and engineer.", location: "Jeddah" },
      { name: "Mohammed Al-Ghamdi", rating: 5, text: "I've worked with Abiat Al-Hijaz on multiple projects and I'm always satisfied with the quality and punctuality.", location: "Jeddah" },
      { name: "Khalid Al-Shahri", rating: 5, text: "Excellent customer service and a specialized team that helps you choose the right materials for your project. Thank you!", location: "Jeddah" },
      { name: "Abdullah Al-Malki", rating: 4, text: "Good prices and high quality products. Fast delivery and professional staff. Will always come back.", location: "Jeddah" },
    ],
    contactSection: {
      eyebrow: "Contact Us",
      title: "We Are Here to Serve You",
      subtitle: "Contact us to inquire about any product or request a quote for your project.",
      phoneTitle: "Call Us",
      phoneSub: "Available during working hours",
      whatsappTitle: "WhatsApp",
      whatsappSub: "Message us anytime",
      locationTitle: "Our Location",
      locationSub: "8053 Haritha Ibn Al-Nu'man\nAl-Fadila District, Jeddah 22631",
      locationBtn: "Get Directions",
      instagramTitle: "Instagram",
      instagramSub: "Follow us on social media",
      hoursTitle: "Working Hours",
      hoursSub: "Opens at 6:00 AM — Sunday to Friday",
      hoursValue: "6 AM",
      hoursNote: "Opens daily",
    },
    footer: {
      about: "Your first destination for construction and building materials in Jeddah. We deliver the highest quality at the best prices.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Information",
      address: "8053 Haritha Ibn Al-Nu'man, Al-Fadila District, Jeddah 22631",
      hours: "Opens 6:00 AM — Sunday to Friday",
      copyright: "© 2024 Abiat Al-Hijaz Construction Materials. All rights reserved.",
      googleRating: "5.0 | 5,013+ Reviews on Google",
    },
  },
};

const categoryImages = [tilesImg, steelImg, pipesImg, cementImg, electricalImg, paintImg, chandeliersImg, sanitaryImg, sinksImg, gypsumImg, powerToolsImg, handToolsImg, fiberTanksImg];
const categoryBadgeColors = ["bg-amber-500", "bg-blue-600", "bg-green-600", "bg-gray-600", "bg-yellow-500", "bg-purple-600", "bg-indigo-600", "bg-teal-600", "bg-cyan-600", "bg-rose-600", "bg-orange-600", "bg-emerald-600", "bg-sky-600"];

const featureIcons = [CheckCircle, Award, Truck, Users];

function useIntersectionObserver() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Catalog() {
  const [lang, setLang] = useState<Lang>("ar");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [lang, t.dir]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const toggleLang = () => setLang(l => l === "ar" ? "en" : "ar");

  const navLinks = [
    { label: t.nav.home, id: "hero" },
    { label: t.nav.products, id: "categories" },
    { label: t.nav.whyUs, id: "features" },
    { label: t.nav.reviews, id: "reviews" },
    { label: t.nav.contact, id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-background" dir={t.dir} style={{ fontFamily: t.font }}>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl overflow-hidden shadow-md flex-shrink-0 ${scrolled ? "bg-white" : "bg-white/90"}`}>
                <img src={logoImg} alt="Abiat Al-Hijaz Logo" className="w-full h-full object-contain p-0.5" />
              </div>
              <div>
                <div className={`font-bold text-lg leading-tight ${scrolled ? "text-primary" : "text-white"}`}>{t.brandName}</div>
                <div className={`text-xs ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>{t.brandSub}</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-amber-400 ${scrolled ? "text-foreground" : "text-white"}`}
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}

              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                className={`flex items-center gap-1.5 text-sm font-bold border rounded-full px-3 py-1.5 transition-all hover:scale-105 ${
                  scrolled
                    ? "border-primary text-primary hover:bg-primary hover:text-white"
                    : "border-white/60 text-white hover:bg-white/20"
                }`}
                data-testid="lang-toggle"
              >
                <Globe size={13} />
                {t.langToggle}
              </button>

              <a
                href="tel:0568452506"
                className="bg-gold-gradient text-primary font-bold px-5 py-2.5 rounded-full text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all hover:scale-105"
                data-testid="nav-call-btn"
              >
                <Phone size={15} />
                {t.nav.callUs}
              </a>
            </div>

            {/* Mobile right side */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleLang}
                className={`flex items-center gap-1 text-xs font-bold border rounded-full px-2.5 py-1 transition-all ${
                  scrolled ? "border-primary text-primary" : "border-white/60 text-white"
                }`}
                data-testid="lang-toggle-mobile"
              >
                <Globe size={11} />
                {t.langToggle}
              </button>
              <button
                className={`p-2 rounded-lg ${scrolled ? "text-foreground" : "text-white"}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border shadow-xl animate-fade-in">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full font-medium py-2 border-b border-border/50 last:border-0 text-foreground ${lang === "ar" ? "text-right" : "text-left"}`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:0568452506"
                className="flex items-center gap-2 bg-gold-gradient text-primary font-bold px-4 py-3 rounded-xl justify-center"
              >
                <Phone size={16} />
                056 845 2506
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Abiat Al-Hijaz" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/95 via-primary/80 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <Star className="text-amber-400" size={14} fill="currentColor" />
              <span className="text-amber-300 text-sm font-medium">{t.hero.badge}</span>
              <span className="text-amber-400 text-sm">{t.hero.badgeSub}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 animate-fade-in-up delay-100">
              {t.hero.title1}
              <br />
              <span className="text-gold-gradient">{t.hero.title2}</span>
            </h1>

            <p className="text-xl text-white/85 mb-8 leading-relaxed animate-fade-in-up delay-200">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up delay-300">
              <button
                onClick={() => scrollToSection("categories")}
                className="bg-gold-gradient text-primary font-bold px-8 py-4 rounded-full text-lg flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                data-testid="hero-catalog-btn"
              >
                {t.hero.browseCatalog}
                <ChevronDown size={18} />
              </button>
              <a
                href="tel:0568452506"
                className="bg-white/15 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-full text-lg flex items-center gap-2 hover:bg-white/25 transition-all"
                data-testid="hero-call-btn"
              >
                <Phone size={18} />
                056 845 2506
              </a>
            </div>

            <div className="flex flex-wrap gap-6 animate-fade-in-up delay-400">
              <div className="flex items-center gap-2 text-white/80">
                <MapPin size={16} className="text-amber-400" />
                <span className="text-sm">{t.hero.location}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock size={16} className="text-amber-400" />
                <span className="text-sm">{t.hero.opens}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Star size={16} className="text-amber-400" fill="currentColor" />
                <span className="text-sm">{t.hero.reviews}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="text-white/60" size={28} />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-navy-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.stats.map((stat, index) => {
              const icons = [Package, Users, Truck, Award];
              const Icon = icons[index];
              return (
                <AnimatedSection key={index}>
                  <div className="stat-card rounded-2xl p-6 text-center" data-testid={`stat-card-${index}`}>
                    <Icon className="text-amber-400 mx-auto mb-3" size={28} />
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-amber-600 font-medium text-sm mb-3">
                <div className="w-8 h-px bg-amber-400" />
                {t.categoriesSection.eyebrow}
                <div className="w-8 h-px bg-amber-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">{t.categoriesSection.title}</h2>
              <div className="section-divider mx-auto mb-4" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.categoriesSection.subtitle}</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.categories.map((cat, index) => (
              <AnimatedSection key={cat.id}>
                <div
                  className="product-card bg-card rounded-2xl overflow-hidden border border-border cursor-pointer shadow-sm hover:shadow-xl"
                  onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                  data-testid={`category-card-${cat.id}`}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img src={categoryImages[index]} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className={`absolute top-3 ${lang === "ar" ? "right-3" : "left-3"} ${categoryBadgeColors[index]} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {cat.badge}
                    </span>
                    <div className={`absolute bottom-3 ${lang === "ar" ? "right-3 left-3" : "left-3 right-3"}`}>
                      <h3 className="text-white font-bold text-xl">{cat.name}</h3>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{cat.description}</p>
                    <div className={`overflow-hidden transition-all duration-400 ${activeCategory === cat.id ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="space-y-2 mb-4">
                        {cat.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-between text-primary font-medium text-sm" data-testid={`category-expand-${cat.id}`}>
                      <span>{activeCategory === cat.id ? t.categoriesSection.hideDetails : t.categoriesSection.showDetails}</span>
                      <ChevronDown size={16} className={`transition-transform ${activeCategory === cat.id ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="features" className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={constructionImg} alt="Projects" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                <div className={`absolute bottom-6 ${lang === "ar" ? "right-6" : "left-6"} bg-white rounded-2xl p-4 shadow-xl floating-badge`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <Star className="text-amber-500" size={18} fill="currentColor" />
                    </div>
                    <div>
                      <div className="font-bold text-primary text-sm">5.0 {lang === "ar" ? "تقييم" : "Rating"}</div>
                      <div className="text-muted-foreground text-xs">{lang === "ar" ? "من +5,013 عميل" : "From 5,013+ clients"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 text-amber-600 font-medium text-sm mb-3">
                  <div className="w-8 h-px bg-amber-400" />
                  {t.featuresSection.eyebrow}
                  <div className="w-8 h-px bg-amber-400" />
                </div>
                <h2 className="text-4xl font-black text-primary mb-3">{t.featuresSection.title}</h2>
                <div className="section-divider mb-5" />
                <p className="text-muted-foreground leading-relaxed mb-8">{t.featuresSection.subtitle}</p>
              </AnimatedSection>

              <div className="space-y-5">
                {t.features.map((feature, index) => {
                  const Icon = featureIcons[index];
                  return (
                    <AnimatedSection key={index}>
                      <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-amber-300 hover:shadow-md transition-all" data-testid={`feature-card-${index}`}>
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="text-primary" size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-navy-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-amber-400 font-medium text-sm mb-3">
                <div className="w-8 h-px bg-amber-400/60" />
                {t.reviewsSection.eyebrow}
                <div className="w-8 h-px bg-amber-400/60" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{t.reviewsSection.title}</h2>
              <div className="section-divider mx-auto mb-4" />
              <p className="text-white/70 text-lg max-w-xl mx-auto">{t.reviewsSection.subtitle}</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.reviews.map((review, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/12 transition-all" data-testid={`review-card-${index}`}>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-white/85 text-sm leading-relaxed mb-5">"{review.text}"</p>
                  <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                    <div className="w-9 h-9 bg-amber-400/20 rounded-full flex items-center justify-center">
                      <span className="text-amber-400 font-bold text-sm">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{review.name}</div>
                      <div className="text-white/50 text-xs">{review.location}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-12 bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-black text-blue-600">G</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{t.reviewsSection.googleLabel}</div>
                  <div className="text-white/70 text-sm">{t.reviewsSection.googleSub}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={22} className="text-amber-400" fill="currentColor" />
                  ))}
                </div>
                <div>
                  <span className="text-white font-black text-3xl">5.0</span>
                  <div className="text-white/60 text-sm">5,013+</div>
                </div>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-gradient text-primary font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:shadow-lg transition-all hover:scale-105"
                data-testid="google-maps-link"
              >
                <MapPin size={16} />
                {t.reviewsSection.rateBtn}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-amber-600 font-medium text-sm mb-3">
                <div className="w-8 h-px bg-amber-400" />
                {t.contactSection.eyebrow}
                <div className="w-8 h-px bg-amber-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">{t.contactSection.title}</h2>
              <div className="section-divider mx-auto mb-4" />
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t.contactSection.subtitle}</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <AnimatedSection>
              <a href="tel:0568452506" className="group bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary hover:shadow-lg transition-all" data-testid="contact-phone">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" size={28} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{t.contactSection.phoneTitle}</h3>
                <p className="text-muted-foreground text-sm mb-3">{t.contactSection.phoneSub}</p>
                <span className="text-primary font-bold text-lg">056 845 2506</span>
              </a>
            </AnimatedSection>

            <AnimatedSection>
              <a href="https://wa.me/966568452506" target="_blank" rel="noopener noreferrer" className="group bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center hover:border-green-500 hover:shadow-lg transition-all" data-testid="contact-whatsapp">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                  <MessageCircle className="text-green-600" size={28} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{t.contactSection.whatsappTitle}</h3>
                <p className="text-muted-foreground text-sm mb-3">{t.contactSection.whatsappSub}</p>
                <span className="text-green-600 font-bold text-lg">056 845 2506</span>
              </a>
            </AnimatedSection>

            <AnimatedSection>
              <a href="https://maps.google.com/?q=Al-Fadila+District+Jeddah" target="_blank" rel="noopener noreferrer" className="group bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center hover:border-amber-500 hover:shadow-lg transition-all" data-testid="contact-location">
                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                  <MapPin className="text-amber-600" size={28} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{t.contactSection.locationTitle}</h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed whitespace-pre-line">{t.contactSection.locationSub}</p>
                <span className="text-amber-600 font-medium text-sm flex items-center gap-1">
                  <ArrowLeft size={14} />
                  {t.contactSection.locationBtn}
                </span>
              </a>
            </AnimatedSection>

            <AnimatedSection>
              <a href="https://www.instagram.com/abyat_alhijaz" target="_blank" rel="noopener noreferrer" className="group bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center hover:border-pink-500 hover:shadow-lg transition-all" data-testid="contact-instagram">
                <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-pink-100 transition-colors">
                  <SiInstagram className="text-pink-600" size={28} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{t.contactSection.instagramTitle}</h3>
                <p className="text-muted-foreground text-sm mb-3">{t.contactSection.instagramSub}</p>
                <span className="text-pink-600 font-bold">@abyat_alhijaz</span>
              </a>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="bg-muted/40 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 border border-border">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Clock className="text-white" size={28} />
              </div>
              <div className="flex-1 text-center md:text-start">
                <h3 className="font-bold text-foreground text-xl mb-1">{t.contactSection.hoursTitle}</h3>
                <p className="text-muted-foreground">{t.contactSection.hoursSub}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary">{t.contactSection.hoursValue}</div>
                <div className="text-muted-foreground text-sm">{t.contactSection.hoursNote}</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* MAP */}
      <section className="h-80 relative overflow-hidden">
        <iframe
          title="Abiat Al-Hijaz Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.3!2d39.16!3d21.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM0JzQ0LjgiTiAzOcKwMDknMzYuMCJF!5e0!3m2!1sar!2ssa!4v1620000000000!5m2!1sar!2ssa"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 pointer-events-none border-t-4 border-amber-400" />
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl overflow-hidden flex-shrink-0">
                  <img src={logoImg} alt="Logo" className="w-full h-full object-contain p-0.5" />
                </div>
                <div>
                  <div className="font-bold text-lg">{t.brandName}</div>
                  <div className="text-white/60 text-sm">{t.brandSub}</div>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{t.footer.about}</p>
            </div>

            <div>
              <h4 className="font-bold text-amber-400 mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2">
                {navLinks.slice(1).map((item) => (
                  <li key={item.id}>
                    <button onClick={() => scrollToSection(item.id)} className="text-white/70 hover:text-amber-400 text-sm transition-colors">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-amber-400 mb-4">{t.footer.contactInfo}</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-white/70 text-sm">
                  <MapPin size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>{t.footer.address}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Phone size={16} className="text-amber-400" />
                  <a href="tel:0568452506" className="hover:text-amber-400 transition-colors">056 845 2506</a>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Clock size={16} className="text-amber-400" />
                  <span>{t.footer.hours}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <SiInstagram size={16} className="text-amber-400" />
                  <a href="https://www.instagram.com/abyat_alhijaz" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                    @abyat_alhijaz
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/50 text-sm">{t.footer.copyright}</p>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <span className="text-white/50 text-xs">{t.footer.googleRating}</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <a
        href="tel:0568452506"
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-2xl hover:shadow-green-500/40 transition-all hover:scale-110"
        data-testid="floating-call-btn"
        title="Call Us"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
