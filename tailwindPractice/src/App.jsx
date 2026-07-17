import Card from "./components/Card";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="text-center">
        <div className="inline-block bg-green-400 text-black rounded-lg px-6 py-3 text-3xl font-semibold mb-6">
          Tailwind test
        </div>
        <Card name="hello" btnText="click me"/>
        <Card name="world" btnText="do not click me"/>
        <Card name="react" />
      </div>
    </div>
  );
}
