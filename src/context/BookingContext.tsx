import React, { createContext, useContext, useState, type ReactNode } from 'react';
import BookingModal from '../components/BookingModal';

interface BookingContextType {
    openModal: () => void;
    closeModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <BookingContext.Provider value={{ openModal, closeModal }}>
            {children}
            <BookingModal isOpen={isModalOpen} onClose={closeModal} />
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (context === undefined) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};
