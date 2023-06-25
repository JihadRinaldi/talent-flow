export const TALENT_LIST_STYLE = {
  candidateNoteStyle: {
    mainContainer: 'flex-1 flex gap-4 flex-col border border-gray-400 rounded-md p-2 text-gray-600 m-0 group/item hover:bg-slate-100',
    noteContainer: 'flex justify-start items-center gap-4 text-sm group',
    hoverContainer: 'group/edit justify-start items-center hidden group-hover/item:flex gap-4 text-sm',
    nameStyle: 'text-gray-600 whitespace-nowrap',
    noteStyle: 'text-gray-600',
  },
  candidateButtonStyle: {
    btnContainer: 'flex flex-row justify-center items-center gap-2',
    btnRed: 'inline-block bg-red-200 rounded-md px-3 py-1 text-sm text-gray-700',
    btnGreen: 'inline-block bg-green-200 rounded-md px-3 py-1 text-sm text-gray-700',
  },
  candidateCardStyle: {
    cardContainer: 'flex flex-col gap-4 bg-white rounded-lg shadow-md p-4 mb-4',
    candidateData: 'w-full flex flex-row justify-between items-center',
    textFullname: 'text-lg font-semibold text-blue-900',
    textStage: 'bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700',
    infoContainer: 'flex flex-wrap gap-4 flex-row justify-end items-start',
  },
  talentListStyle: {
    emptyTalent: 'text-center text-gray-600',
    mainContainer: 'container mx-auto px-4 py-8',
    stageContainer: 'flex justify-between items-center mb-8',
    contentWrapper: 'flex flex-wrap',
    textTalentStage: 'mr-4 cursor-pointer',

  }
};

export default TALENT_LIST_STYLE;
