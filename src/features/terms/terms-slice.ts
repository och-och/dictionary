import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TermsState {
	value: ITerm[]
}

const initialState: TermsState = {
	value: []
}

const termsSlice = createSlice({
	name: "terms",
	initialState,
	reducers: {
		setTerms(state, action: PayloadAction<ITerm[]>) {
			state.value.push(...action.payload)
		},

		addedTerm(state, action: PayloadAction<Omit<ITerm, "id">>) {
			state.value.push({...action.payload, id: Math.random()})
		},

		removedTerm(state, action: PayloadAction<ITerm>) {
			const index = state.value.findIndex(term => term.id === action.payload.id)
			state.value.splice(index, 1)
		}
	}
})

export const { setTerms, addedTerm, removedTerm } = termsSlice.actions
export default termsSlice.reducer