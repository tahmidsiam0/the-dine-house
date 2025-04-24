import CategoryCard from "@/components/Category/CategoryCard";
import categories from "@/db/categories.json";

export default function CategoryPage() {
  return (
    <div className="py-8">
      <h1 className="text-5xl font-bold mb-12">Categories</h1>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            src={`/lws${category.image}`}
            title={category.name}
            href={`/${category.name.toLowerCase()}`}
          />
        ))}
      </div>
    </div>
  );
}
