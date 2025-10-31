export interface Product {
  id: string
  slug: string
  name: string
  price: number
  image: string
  description: string
  taste: string
  benefits: string[]
  nutrition: {
    calories: number
    vitamin: string
    fiber: string
    naturalSugar: string
  }
}

export const products: Product[] = [
  {
    id: "1",
    slug: "jus-mangga",
    name: "Jus Mangga",
    price: 25000,
    image: "/juice-mangga.png",
    description: "Jus mangga segar dari buah mangga pilihan berkualitas tinggi",
    taste: "Manis alami dengan sentuhan asam yang menyegarkan",
    benefits: [
      "Kaya akan vitamin C untuk imunitas",
      "Mengandung antioksidan tinggi",
      "Baik untuk kesehatan pencernaan",
      "Menyegarkan dan energik",
    ],
    nutrition: {
      calories: 120,
      vitamin: "Vitamin C 45mg",
      fiber: "Serat 2.6g",
      naturalSugar: "Gula alami 22g",
    },
  },
  {
    id: "2",
    slug: "jus-alpukat",
    name: "Jus Alpukat",
    price: 30000,
    image: "/juice-alpukat.png",
    description: "Jus alpukat lembut dengan tekstur kental yang nikmat",
    taste: "Creamy dan lembut dengan rasa alami yang kaya",
    benefits: ["Lemak sehat untuk jantung", "Kaya potassium", "Meningkatkan energi", "Baik untuk kulit"],
    nutrition: {
      calories: 160,
      vitamin: "Vitamin E 2.07mg",
      fiber: "Serat 6.7g",
      naturalSugar: "Gula alami 0.7g",
    },
  },
  {
    id: "3",
    slug: "jus-jambu",
    name: "Jus Jambu",
    price: 22000,
    image: "/juice-jambu.png",
    description: "Jus jambu merah segar dengan rasa yang lezat",
    taste: "Manis dengan sentuhan asam yang seimbang",
    benefits: ["Vitamin C sangat tinggi", "Menjaga kesehatan gigi", "Meningkatkan imunitas", "Rendah kalori"],
    nutrition: {
      calories: 68,
      vitamin: "Vitamin C 228mg",
      fiber: "Serat 5.4g",
      naturalSugar: "Gula alami 9g",
    },
  },
  {
    id: "4",
    slug: "jus-stroberi",
    name: "Jus Stroberi",
    price: 28000,
    image: "/juice-stroberi.png",
    description: "Jus stroberi merah cerah dengan rasa manis alami",
    taste: "Manis dengan aroma buah yang kuat",
    benefits: ["Antioksidan tinggi", "Baik untuk kesehatan jantung", "Mempercantik kulit", "Meningkatkan metabolisme"],
    nutrition: {
      calories: 49,
      vitamin: "Vitamin C 58.8mg",
      fiber: "Serat 2g",
      naturalSugar: "Gula alami 7g",
    },
  },
  {
    id: "5",
    slug: "jus-melon",
    name: "Jus Melon",
    price: 20000,
    image: "/juice-melon.png",
    description: "Jus melon segar dengan kandungan air tinggi",
    taste: "Manis dan menyegarkan dengan aroma buah tropis",
    benefits: ["Hidrasi optimal", "Kaya mineral", "Menyegarkan di cuaca panas", "Baik untuk ginjal"],
    nutrition: {
      calories: 60,
      vitamin: "Vitamin A 3382IU",
      fiber: "Serat 1.4g",
      naturalSugar: "Gula alami 13g",
    },
  },
  {
    id: "6",
    slug: "jus-nanas",
    name: "Jus Nanas",
    price: 24000,
    image: "/juice-nanas.png",
    description: "Jus nanas tropis dengan rasa yang eksotis",
    taste: "Manis dengan sentuhan asam yang menyegarkan",
    benefits: [
      "Mengandung bromelain untuk pencernaan",
      "Anti-inflamasi alami",
      "Meningkatkan imunitas",
      "Menyegarkan dan energik",
    ],
    nutrition: {
      calories: 82,
      vitamin: "Vitamin C 47.8mg",
      fiber: "Serat 1.4g",
      naturalSugar: "Gula alami 16g",
    },
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
