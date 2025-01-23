import type { Project } from "@/app/_types/Project";
import { create } from "zustand"

interface ModalState {
    open: boolean;
    data: Project | null;
    setOpen(open: boolean): void;
    setData(data: Project): void;
    reset(): void;
}

export const useModalStore = create<ModalState>((set) => ({
    open: false,
    data: null,
    setOpen(open) { set({ open }) },
    setData(data) { set({ data }) },
    reset() { set({ open: false, data: null }) }
}))