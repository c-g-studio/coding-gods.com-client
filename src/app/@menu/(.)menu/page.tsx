import React from 'react';
import { DropdownMenu } from '@/components/layout/DropdownMenu/DropdownMenu';
import Modal from '@/components/layout/DropdownMenu/Modal/Modal';

export default function Page() {
  return (
    <Modal>
      <DropdownMenu />
    </Modal>
  );
}
