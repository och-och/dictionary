import { ChangeEventHandler, FormEventHandler, useEffect, useRef, useState } from "react"
import { FiPlus } from "react-icons/fi"
import { useAppDispatch } from "../app/hooks"
import { addedTerm } from "../features/terms/terms-slice"

function useField() {
	const [value, setValue] = useState("")

	const updateValue: ChangeEventHandler<HTMLInputElement|HTMLTextAreaElement> = (e) => {
		setValue(e.target.value)
	}

	const clearValue = () => {
		setValue("")
	}

	return [value, updateValue, clearValue] as const
}

export default function AddTerm() {
	const dispatch = useAppDispatch()
	const [term, handleTermChange, clearTerm] = useField()
	const [definition, handleDefinitionChange, clearDefinition] = useField()
	const termInput = useRef<HTMLInputElement>(null)
	const definitionInput = useRef<HTMLTextAreaElement>(null)

	const handleSubmit: FormEventHandler<any> = (e) => {
		e.preventDefault()
		if (!term)
			return termInput.current?.focus()
		else if (!definition)
			return definitionInput.current?.focus()
		dispatch(addedTerm({ term, definition }))
		clearTerm()
		clearDefinition()
		termInput.current?.focus()
	}

	useEffect(() => {
		const def = definitionInput.current
		if (def) {
			def.style.height = "var(--lh)";
			def.style.height = def.scrollHeight + "px";
		}
	})

	return (
		<form className="add-term card" onSubmit={handleSubmit}>
			<input ref={termInput} className={"input term"} onChange={handleTermChange} value={term} placeholder="das Apfel" type="text" />
			<textarea ref={definitionInput} className="input definition" onChange={handleDefinitionChange} placeholder="/ˈapfəl/ an edible fruit produced by an apple tree" value={definition} />
			<button className="add icon-btn"><FiPlus /></button>
		</form>
	)
}