import { FiX } from "react-icons/fi"
import { useAppDispatch } from "../app/hooks"
import { removedTerm } from "../features/terms/terms-slice"

export default function Term({ term } : { term: ITerm }) {
	const dispatch = useAppDispatch()

	const handleDeleteClick = () => {
		dispatch(removedTerm(term))
	}

	return (
		<div className="word">
			<p>{term.term} — {term.definition}</p>
			<button onClick={handleDeleteClick}><FiX /></button>
		</div>
	)
}