import { groupedTechnologies } from "../../../assets/data/technologies";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Technologies = () => {
  return (
    <div className="p-5 md:p-20 relative">
      <p className="text-2xl sm:text-6xl font-extrabold mb-3">
        <span className="text-pink">Technologies</span> we use
      </p>
      <p className="text-lg mb-5 sm:mb-10">
        We're constantly pushing boundaries with the latest technologies to
        optimize your workflow, maximize output, and propel your business
        forward.
      </p>

      <Tabs defaultValue={groupedTechnologies[0].type} className="w-full">
        <TabsList className="flex flex-wrap justify-start gap-2 mb-6">
          {groupedTechnologies.map((group) => (
            <TabsTrigger key={group.type} value={group.type}>
              {group.type}
            </TabsTrigger>
          ))}
        </TabsList>

        {groupedTechnologies.map((group) => (
          <TabsContent key={group.type} value={group.type}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {group.items.map((tech, index) => (
                <div
                  key={index}
                  className="bg-darkGray2 text-center rounded-lg shadow-xl p-4 hover:-translate-y-2 transition-transform duration-300"
                >
                  <tech.icon className="text-3xl text-pink mb-2 mx-auto" />
                  <p className="text-sm font-semibold">{tech.name}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Technologies;
