export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  rating: number;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "demo-1",
    quote:
      "تعاملت معهم بسبب انسداد في الصرف وكان تجاوبهم سريع جدًا. الفريق وصل في الموعد وتعامل مع المشكلة باحتراف، والخدمة كانت ممتازة.",
    name: "محمد العتيبي",
    rating: 5,
    image: "/assets/workGallery/2.jpeg",
  },
  {
    id: "demo-2",
    quote:
      "طلبنا خدمة شفط وتنظيف للبيارة، وكان التعامل ممتاز من بداية التواصل حتى انتهاء العمل. فريق محترم والمعدات كانت مناسبة للموقع.",
    name: "عبدالله الشمري",
    rating: 5,
    image: "/assets/workGallery/4.jpeg",
  },
  {
    id: "demo-3",
    quote:
      "الخدمة سريعة والتعامل راقٍ جدًا. كان عندنا مشكلة متكررة في الصرف وتم تحديد السبب ومعالجته بدون تكسير أو حفر.",
    name: "خالد الحربي",
    rating: 5,
    image: "/assets/workGallery/6.jpg",
  },
  {
    id: "demo-4",
    quote:
      "تجربة ممتازة، خصوصًا سرعة الوصول والاستجابة. الفني كان فاهم المشكلة وأنجز العمل بشكل مرتب ونظيف.",
    name: "سعد المطيري",
    rating: 5,
    image: "/assets/workGallery/7.jpeg",
  },
];