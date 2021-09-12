import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react"
import { FiPlus } from "react-icons/fi"
import { useAppDispatch } from "../app/hooks"
import { addedTerm } from "../features/terms/terms-slice"

function useField() {
	const [value, setValue] = useState("")

	const updateValue: ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value)
	}

	const clearValue = () => {
		setValue("")
	}

	return [value, updateValue, clearValue] as const
}

export default function AddTerm() {
	const [term, handleTermChange, clearTerm] = useField()
	const [definition, handleDefinitionChange, clearDefinition] = useField()

	const termInput = useRef<HTMLInputElement>(null)

	const dispatch = useAppDispatch()

	const handleSubmit: FormEventHandler<any> = (e) => {
		e.preventDefault()
		dispatch(addedTerm({ term, definition }))
		clearTerm()
		clearDefinition()
		termInput.current?.focus()
	}

	return (
		<form onSubmit={handleSubmit}>
			<input ref={termInput} type="text" onChange={handleTermChange} value={term}/>
			<input type="text" onChange={handleDefinitionChange} value={definition}/>
			<button><FiPlus /></button>
		</form>
	)
}