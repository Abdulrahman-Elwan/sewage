export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "pipe" | "network" | "wind" | "droplets" | "truck" | "home" | "building";
};

export const services: Service[] = [
  {
    id: "unclog",
    title: "تسليك خطوط الصرف",
    description: "إزالة الانسدادات من خطوط الصرف بأحدث معدات الضغط العالي دون الحاجة لأعمال حفر.",
    icon: "pipe",
  },
  {
    id: "network-clean",
    title: "تنظيف شبكات الصرف",
    description: "فحص وتنظيف شامل لشبكة الصرف الصحي داخل المنزل أو المنشأة لضمان تدفق سليم.",
    icon: "network",
  },
  {
    id: "odor",
    title: "إزالة الروائح الكريهة",
    description: "معالجة مصدر الروائح في دورات المياه وصفايات المطابخ بشكل جذري وآمن.",
    icon: "wind",
  },
  {
    id: "grease",
    title: "شفط الدهون والرواسب",
    description: "شفط الدهون المتراكمة والرواسب من المطابخ والمطاعم بمعدات متخصصة.",
    icon: "droplets",
  },
  {
    id: "septic-vacuum",
    title: "شفط البيارات",
    description: "خدمة شفط بيارات سريعة بسيارات فاكيوم بأحجام مختلفة تناسب كل موقع.",
    icon: "truck",
  },
  {
    id: "home-septic",
    title: "تنظيف بيارات المنازل",
    description: "تنظيف دوري لبيارات المنازل يمنع الفيضان المستمر ويطيل عمر الشبكة.",
    icon: "home",
  },
];
