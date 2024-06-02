import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";

interface Props {
  title: string;
  desc: string;
  isLoading?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const ConfirmModal = ({
  open,
  onClose,
  title,
  desc,
  isLoading = false,
  onConfirm,
  onCancel,
}) => {
  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <span>{title}</span>
          </AlertDialogTitle>
        </AlertDialogHeader>

        <AlertDialogDescription>{desc}</AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmModal;
