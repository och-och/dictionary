import Term from "./Term"

export default function Terms({ terms } : { terms: ITerm[] }) {
	return (
		<div className="terms">
			{terms.map(term => (<Term term={term} key={term.id} />))}
		</div>
	)
}