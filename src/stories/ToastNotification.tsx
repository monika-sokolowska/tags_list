import { useRef } from "react";
import { Toast } from "primereact/toast";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/soho-light/theme.css";
import Severity from "./assets/helpers";

interface ToastNotificationProps {
  severity: Severity;
}

const ToastNotification = ({ severity }: ToastNotificationProps) => {
  const toast = useRef<Toast>(null);

  const show = () => {
    if (toast?.current) {
      toast.current.show({
        severity: severity,
        summary: "Test title",
        detail: "Test message",
      });
    }
  };

  return (
    <>
      <Toast ref={toast} position="top-center" />
      <button onClick={show}>Show</button>
    </>
  );
};

export default ToastNotification;
