import TemplateListContainer from "@/containers/TemplateList";

export default function Home() {
  return (
    <div className="p-9 container mx-auto">
      <h1 className="text-stone-800 text-2xl mb-14 font-medium">My emails</h1>
      <TemplateListContainer />
    </div>
  );
}
