import VuexPersistence from "vuex-persist";

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      /* your options */
      //  asyncStorage: true,
      reducer: (state) => ({
        projects: {
          user: state.projects.user,
          s_roomToggle: state.projects.s_roomToggle,
          isLinkedCalendar: state.projects.isLinkedCalendar,
          isShowMilestone: state.projects.isShowMilestone,
          isShowCurrent: state.projects.isShowCurrent,
          isLinkedOrder: state.projects.isLinkedOrder,
          isLinkedSubcon: state.projects.isLinkedSubcon,
          showArchived: state.projects.showArchived,
          project: state.projects.project,
        },
      }),
    }).plugin(store);
  });
};
