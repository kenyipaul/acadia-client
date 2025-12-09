import { create } from "zustand";

interface SidebarState {
	sidebarState: boolean;
	openSidebar: () => void;
	closeSidebar: () => void;
}

const useSidebarState = create<SidebarState>((set) => ({
	sidebarState: false,
	openSidebar: () => {
		set(() => ({sidebarState: true}))
	},
	closeSidebar: () => {
		set(() => ({sidebarState: false}))
	}
}))

export default useSidebarState;
