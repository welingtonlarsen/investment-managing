import { useReducer } from 'react';

interface ModalsStates {
  isDeleteConfirmationModalOpened: boolean;
  isBrokerageNoteModalOpened: boolean;
  selectedItem: number | null;
}

type ModalsAction =
  | { type: 'OPEN_DELETE_CONFIRMATION_MODAL'; selectedItem: number }
  | { type: 'CLOSE_DELETE_CONFIRMATION_MODAL' }
  | { type: 'OPEN_BROKERAGE_NOTE_MODAL'; selectedItem: number }
  | { type: 'CLOSE_BROKERAGE_NOTE_MODAL' }
  | { type: 'CLOSE_ALL_MODALS' };

const reducer = (state: ModalsStates, action: ModalsAction): ModalsStates => {
  switch (action.type) {
    case 'OPEN_DELETE_CONFIRMATION_MODAL':
      return { ...state, isDeleteConfirmationModalOpened: true, selectedItem: action.selectedItem };
    case 'CLOSE_DELETE_CONFIRMATION_MODAL':
      return { ...state, isDeleteConfirmationModalOpened: false, selectedItem: null };
    case 'OPEN_BROKERAGE_NOTE_MODAL':
      return { ...state, isBrokerageNoteModalOpened: true, selectedItem: action.selectedItem };
    case 'CLOSE_BROKERAGE_NOTE_MODAL':
      return { ...state, isBrokerageNoteModalOpened: false, selectedItem: null };
    case 'CLOSE_ALL_MODALS': {
      return {
        ...state,
        isBrokerageNoteModalOpened: false,
        isDeleteConfirmationModalOpened: false,
        selectedItem: null,
      };
    }
    default:
      throw new Error('Invalid action to brokerage notes table modals reducer');
  }
};

export const useBrokerageNotesTableModals = () => {
  const [modalsStates, dispatch] = useReducer(reducer, {
    isDeleteConfirmationModalOpened: false,
    isBrokerageNoteModalOpened: false,
    selectedItem: null,
  });

  return {
    modalsStates,
    dispatch,
  };
};
