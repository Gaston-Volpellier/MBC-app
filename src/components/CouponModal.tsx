import React, {useState} from 'react';
import ModalContainer from './ModalContainer';
import UsedCoupon from './UsedCoupon';
import QrCoupon from './QrModal';

export default function CouponModal(props): JSX.Element {
  const [isUsed, setIsUsed] = useState(false);
  const toggleModal = props.toggleModal;
  const modalVisible = props.modalVisible;

  return (
    <ModalContainer toggleModal={toggleModal} modalVisible={modalVisible}>
      {isUsed ? <UsedCoupon /> : <QrCoupon modalData={props.modalData} />}
    </ModalContainer>
  );
}
