import { useAppSelector } from "./app/hooks"
import AddTerm from "./components/AddTerm"
import Terms from "./components/Terms"

function App() {
	const terms = useAppSelector(state => state.terms.value)

	return (
		<div className="App">
			<Terms terms={terms} />
			<AddTerm />
		</div>
	);
}

export default App;
