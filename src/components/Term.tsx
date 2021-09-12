import { FiX } from "react-icons/fi"
import { useAppDispatch } from "../app/hooks"
import { removedTerm } from "../features/terms/terms-slice"

export default function Term({ term } : { term: ITerm }) {
	const dispatch = useAppDispatch()

	const handleDeleteClick = () => {
		dispatch(removedTerm(term))
	}

	return (
		<div className="term card">
			<p>{term.term} —&nbsp;{term.definition}</p>
			<button className="delete icon-btn" onClick={handleDeleteClick}><FiX /></button>
		</div>
	)
}