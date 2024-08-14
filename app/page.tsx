import Link from "next/link";

export default function Page() {
  const photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-3 gap-4">
        {photos.map((id) => (
          <Link
            className="flex justify-center items-center h-52 w-52 bg-gray-200 text-base text-gray-900 rounded"
            key={id}
            href={`/photos/${id}`}
            passHref
          >
            {id}
          </Link>
        ))}
      </div>
    </section>
  );
}
