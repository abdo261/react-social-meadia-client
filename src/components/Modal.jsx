"use client"
import React  from "react";
import {Modal as M, ModalContent} from "@nextui-org/react";

export default function Modal({children,isOpen,onOpenChange}) {


  return (
    <>
      
      <M isOpen={isOpen} onOpenChange={onOpenChange} placement="center" scrollBehavior="inside" size="lg" >
        <ModalContent>
          {children}
        </ModalContent>
      </M>
    </>
  );
}
