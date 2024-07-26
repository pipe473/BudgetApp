export type BudgetActions =
    { type: 'add-budget', payload: { budget: number } }

export type BudgetState = {
    budget: number,
    auth: boolean
}

export const initialState: BudgetState = {
    budget: 0,
    auth: true
}

export const budgetReducer = (
    state: BudgetState = initialState,
    action: BudgetActions
) => {
    if (action.type === 'add-budget') {
        return {
            ...state,
            budget: action.payload.budget
        }
    }
}