export function generateStaticParams() {
  const slugs = ["1", "2", "3", "4", "5", "6"];
  return slugs.map((slug) => ({ id: slug }));
}

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="flex justify-center items-center h-52 w-52 bg-gray-200 text-base text-gray-900 rounded">
      {id}
    </div>
  );
}
