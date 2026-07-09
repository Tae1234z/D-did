import ProgressCard from "../components/ProgressCard";
import PracticeCard from "../components/PracticeCard";
import SkillCard from "../components/SkillCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold">
          TGAT AI
        </h1>

        <p className="text-gray-500 mt-2">
          Practice smarter with AI-generated questions.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <ProgressCard />

          <SkillCard />

        </div>

        <h2 className="text-2xl font-bold mt-10">
          Start Practice
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">

          <PracticeCard
            title="Conversation"
            color="bg-blue-500"
          />

          <PracticeCard
            title="Grammar"
            color="bg-green-500"
          />

          <PracticeCard
            title="Vocabulary"
            color="bg-orange-500"
          />

          <PracticeCard
            title="Reading"
            color="bg-purple-500"
          />

          <PracticeCard
            title="Mixed Practice"
            color="bg-black"
          />

        </div>

      </div>

    </div>
  );
}
