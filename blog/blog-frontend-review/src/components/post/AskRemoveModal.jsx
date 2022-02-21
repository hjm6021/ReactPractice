import AskModal from '../common/AskModal';

const AskRemoveModal = ({ visible, onCancel, onConfirm }) => {
    return (
        <AskModal
            visible={visible}
            onCancel={onCancel}
            onConfirm={onConfirm}
            title="Remove Post"
            description="Are you sure to remove this post?"
            confirmText="REMOVE"
        />
    );
};

export default AskRemoveModal;
