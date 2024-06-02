import { create } from "zustand";

interface State {
  modals: any;
}

interface Actoins {
  openModal: (Component: any, props?: any) => void;
  closeModal: (Component) => void;
  cleanModal: (Component) => void;
  resetModal: () => void;
}

interface Store extends State, Actoins {}

const useModalStore = create<Store>((set) => ({
  modals: [],
  openModal: (Component, props) => {
    set((state) => {
      const existingModal = state.modals.find(
        (modal) => modal.Component === Component,
      );

      // 만약 modal이 이미 있는 경우
      if (existingModal) {
        return {
          ...state,
          modals: state.modals.map((modal) =>
            modal.Component === Component
              ? { ...modal, props: { ...props, open: true } }
              : modal,
          ),
        };
      }

      return {
        ...state,
        modals: [
          ...state.modals,
          { Component, props: { ...props, open: true } },
        ],
      };
    });
  },
  closeModal: (Component) => {
    set((state) => ({
      ...state,
      modals: state.modals.map((modal) =>
        modal.Component === Component
          ? { ...modal, props: { ...modal.props, open: false } }
          : modal,
      ),
    }));
  },
  cleanModal: (Component) => {
    set((state) => ({
      ...state,
      modals: state.modals.filter((modal) => modal.Component !== Component),
    }));
  },
  resetModal: () => {
    set(() => ({ modals: [] }));
  },
}));

export const useModalState = () => useModalStore((state) => state.modals);
export const useModalActions = () => ({
  openModal: useModalStore((state) => state.openModal),
  closeModal: useModalStore((state) => state.closeModal),
  cleanModal: useModalStore((state) => state.cleanModal),
  resetModal: useModalStore((state) => state.resetModal),
});
