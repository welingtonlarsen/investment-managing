export type TFooter = {
    isNextDisabled: boolean
    isPreviousDisabled: boolean
    showNext: boolean
    showPrevious: boolean
    handleNext: () => void
}

export const Footer: React.FC<TFooter> = ({isNextDisabled, isPreviousDisabled, showNext, showPrevious, handleNext}) => {
    return (
        <div className="text-center w-full flex justify-end mt-5">
            <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                Voltar
            </button>
            <button
            onClick={handleNext}
            disabled={isNextDisabled}
            type="button"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500 disabled:opacity-40"
            >
                Próximo
            </button>
        </div>
    );
}