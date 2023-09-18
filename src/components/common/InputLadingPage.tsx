import { Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { BsSearch } from 'react-icons/bs';

export default function InputLadingPage(){
    const { isOpen,onOpen,onOpenChange } = useDisclosure();


    return (
        <>
            <Input
                isClearable
                radius="lg"
                placeholder="Type to search..."
                value=""
                onChange={onOpen}
                onClick={onOpen}
                startContent={
                    <BsSearch className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                }
            />
            <Modal 
                backdrop="opaque" 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                size="5xl"
                placement="center"
                closeButton={
                    <>
                    </>
                }
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalFooter className="border-b flex items-center font-semibold md:text-2xl">
                                <BsSearch className="text-gray-200 flex-none"/>
                                <input type="text" autoFocus placeholder="Search Mymoment.com" className="w-screen outline-none bg-transparent"/>
                            </ModalFooter>
                            <ModalBody className="p-5">
                                <p>Quick links</p>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}