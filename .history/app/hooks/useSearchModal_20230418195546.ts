import { create } from 'zustand';

interface SeaModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useSearchModal = create<LoginModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));


export default useSearchModal