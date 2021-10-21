import React, { FunctionComponent } from 'react';
import Modal from 'react-modal';
import Loader from 'react-loader-spinner';

import './ActivityIndicatorModal.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

interface ActivityIndicatorModalProps {
  showActivityIndicatorModal: boolean;
}

const ActivityIndicatorModal: FunctionComponent<ActivityIndicatorModalProps> =
  ({ showActivityIndicatorModal }) => {
    return (
      <Modal
        isOpen={showActivityIndicatorModal}
        ariaHideApp={false}
        className="activity__indicator__modal"
      >
        <Loader type="Oval" color="#777B7E" height={50} width={50} />
      </Modal>
    );
  };

export default ActivityIndicatorModal;
